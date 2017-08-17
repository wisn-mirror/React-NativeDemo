package com.demo_native;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import android.os.SystemClock;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/8/16.
 */

public class RnModule extends ReactContextBaseJavaModule implements LifecycleEventListener ,ActivityEventListener{
    // 保存图片的sd卡路径
    private static final String HEAD_IMAGE_PATH = Environment.getExternalStorageDirectory().getAbsolutePath() + "/HeadImage/";
    // 保存图片的名称
    private static final String HEAD_IMAGE_NAME = "head_image.png";
    private boolean isStartEvent=false;
    // startActivityForResult 的 requestCode
    private static final int REQUEST_CODE_CAMERA = 0;
    private static final int REQUEST_CODE_GALLERY = 1;
    private static final int REQUEST_CODE_CROP = 2;
    private Promise mPromise = null;
    private Uri mUri = null;
    private String mFullPath = null;

    private final  static  String MODULE="RnModule";
    private final  static  String TAG="RnModule";
    public RnModule(ReactApplicationContext reactContext) {
        super(reactContext);
        //监听生命周期
        reactContext.addLifecycleEventListener(this);
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return MODULE;
    }

    /**
     * 发送消息
     * @param eventName
     * @param params
     */
    public void sendEvent(String eventName,WritableMap params){
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,params);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object>  contents=new HashMap<>();
        contents.put("name","wisn");
//        return super.getConstants();
        return contents;
    }

    @Override
    public void onHostResume() {
        Log.d(TAG,"onHostResume");
    }

    @Override
    public void onHostPause() {
        Log.d(TAG,"onHostPause");
    }

    @Override
    public void onHostDestroy() {
        Log.d(TAG,"onHostDestroy");
    }

    @ReactMethod
    public void showToast(){
        Toast.makeText(getCurrentActivity(),"hello reactNative",Toast.LENGTH_SHORT).show();
    }
    @ReactMethod
    public void startNativeTest(){
        Intent intent=new Intent(getCurrentActivity(),NativeTestActivity.class);
        getCurrentActivity().startActivity(intent);
    }
    @ReactMethod
    public void selectPhoto(Promise promise){
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT, null);
        intent.setType("image/*");
        intent.putExtra("return-data", true);
        if (isHeadPathExist()) {
            mFullPath = HEAD_IMAGE_PATH + System.currentTimeMillis() + ".png";
            mUri = Uri.fromFile(new File(mFullPath));
            intent.putExtra(MediaStore.EXTRA_OUTPUT, mUri);
            Activity activity = getCurrentActivity();
            if (activity != null) {
                mPromise = promise;
                activity.startActivityForResult(intent, REQUEST_CODE_GALLERY);
            } else {
                Log.e("", "callGallery: activity is null");
            }
        }
    }
    @ReactMethod
    public void isImageExists(Promise promise) {
        boolean isExists = isHeadImageExits();
        promise.resolve(isExists);
    }

    @ReactMethod
    public void getImageUri(Promise promise) {
        Uri uri = Uri.fromFile(new File(HEAD_IMAGE_PATH + HEAD_IMAGE_NAME));
        promise.resolve(uri.toString());
    }

    @ReactMethod
    public void callCamera(Promise promise){
        recursionDeleteFile();
        Intent intent=new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if(isHeadPathExist()){
            mFullPath = HEAD_IMAGE_PATH + System.currentTimeMillis() + ".png";
            mUri =Uri.fromFile(new File(mFullPath));
            intent.putExtra(MediaStore.EXTRA_OUTPUT,mUri);
            Activity activity=getCurrentActivity();
            if(activity!=null){
                mPromise=promise;
                activity.startActivityForResult(intent,REQUEST_CODE_CAMERA);
            }
        }
    }
    @ReactMethod
    public void getCallBack(Callback callback){
        WritableMap params= Arguments.createMap();
        params.putString("message","当前时间："+System.currentTimeMillis());
        params.putString("result","当前时间result："+System.currentTimeMillis());
        callback.invoke(params);

    }
    @ReactMethod
    public void callMathAdd(int a,int b,Callback callback ){
        WritableMap params=Arguments.createMap();
        params.putString("sum",String.valueOf(a+b));
        callback.invoke(params);
    }
    @ReactMethod
    public void stopMessage(){
        isStartEvent=false;
    }
    @ReactMethod
    public void startMessage(){
        if(isStartEvent){
            Log.e(TAG,"已经开启了Message");
            return ;
        }
        new Thread(new Runnable() {
            @Override
            public void run() {
                isStartEvent=true;
                while(isStartEvent){
                    Log.d(TAG,"android_Native_event");
                    WritableMap params=Arguments.createMap();
                    params.putString("event","envent:"+new Date().toLocaleString());
                    sendEvent("android_Native_event",params);
                    SystemClock.sleep(2000);
                }
            }
        }).start();
    }

    private boolean isHeadImageExits() {
        File file = new File(HEAD_IMAGE_PATH + HEAD_IMAGE_NAME);
        return file.exists();
    }
    /**
     *
     * @return
     */
    private boolean isHeadPathExist(){
        File file=new File(HEAD_IMAGE_PATH);
        if(!file.exists()){
            file.mkdirs();
        }
        return file.exists();
    }

    public void recursionDeleteFile() {
        File file = new File(HEAD_IMAGE_PATH);
        File[] childFile = file.listFiles();
        if (childFile == null || childFile.length == 0) {
            return;
        }
        for (File f : childFile) {
            if (f.getName().contains(HEAD_IMAGE_NAME))
                continue;
            f.delete();
        }
    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if(requestCode==REQUEST_CODE_CAMERA){
            //请求相机
            if(resultCode==Activity.RESULT_OK){
                activity.startActivityForResult(cropImage(mUri),REQUEST_CODE_CROP);
            }else{
                mPromise.resolve(null);
                new File(mFullPath).delete();
            }
        }else if(requestCode==REQUEST_CODE_GALLERY){
            //请求相册
            if (resultCode == Activity.RESULT_OK) {
                Log.e(TAG,"RESULT_OK");
                activity.startActivityForResult(cropImage(data.getData()), REQUEST_CODE_CROP);
            } else if (resultCode == Activity.RESULT_CANCELED) {
                Log.e(TAG,"RESULT_CANCELED"+mPromise);
                mPromise.resolve(null);
                new File(mFullPath).delete();
            }else{
                Log.e(TAG,"RESULT_other"+resultCode);

            }
        }else if(requestCode==REQUEST_CODE_CROP){
            //剪切相册
            if(resultCode==Activity.RESULT_OK){
               mPromise.resolve(mUri.toString());
                saveHeadImage();
            }else{
                mPromise.resolve(null);
                new File(mFullPath).delete();
            }
        }
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    private Intent cropImage(Uri uri) {
        Intent intent = new Intent("com.android.camera.action.CROP");
        intent.setDataAndType(uri, "image/*");
        intent.putExtra("crop", "true");
        intent.putExtra("aspectX", 1);
        intent.putExtra("aspectY", 1);
        intent.putExtra("outputX", 800);
        intent.putExtra("outputY", 800);
        intent.putExtra("return-data", false);
        intent.putExtra("scale", true);
        intent.putExtra("scaleUpIfNeeded", true);
        intent.putExtra(MediaStore.EXTRA_OUTPUT,
                        Uri.fromFile(new File(mFullPath)));
        intent.putExtra("outputFormat", "png");
        return intent;
    }


    private void saveHeadImage() {
        try {
            File file = new File(HEAD_IMAGE_PATH + HEAD_IMAGE_NAME);
            if (file.exists()) {
                file.delete();
            }
            InputStream from = new FileInputStream(mFullPath);
            OutputStream to = new FileOutputStream(HEAD_IMAGE_PATH + HEAD_IMAGE_NAME);
            byte bt[] = new byte[1024];
            int c;
            while ((c = from.read(bt)) > 0) {
                to.write(bt, 0, c);
            }
            from.close();
            to.close();
        } catch (Exception e) {
        }
    }
}

