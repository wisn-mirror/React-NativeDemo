package com.thembyandroid.them;

import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.interfaces.SkinLoaderListener;
import com.wisn.skinlib.loader.SkinResourceCompat;
import com.wisn.skinlib.utils.LogUtils;

/**
 * Created by wisn on 2017/9/18.
 */

public class MainModule extends BaseReactContextBaseJavaModule {
    public MainModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MainModule";
    }


    @ReactMethod
    public void showToast() {
        Toast.makeText(getCurrentActivity(), "hello reactNative", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void changeThem() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                SkinManager.getInstance().loadSkin("theme-com.wisn.skin1--30-1.0-2017-09-18-09-16-10.skin",
                                                   new SkinLoaderListener() {
                                                       @Override
                                                       public void start() {

                                                       }

                                                       @Override
                                                       public void onSuccess() {
                                                           sendEvent("nativeChangeThem", null);
                                                       }

                                                       @Override
                                                       public void onFailed(String error) {

                                                       }

                                                       @Override
                                                       public void onProgress(int progress, int sum) {

                                                       }
                                                   });

            }
        });
    }

    @ReactMethod
    public void setDefaultThem() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                SkinManager.getInstance().resetDefaultThem();
                sendEvent("nativeChangeThem", null);
            }
        });

    }

    @ReactMethod
    public void getImage(String StateName, String imageName, Callback callback) {
        LogUtils.e("getImage","StateName:"+StateName+" imageName:"+imageName);
        WritableMap params = Arguments.createMap();
       String path= SkinResourceCompat.getPathForRN(imageName);
        params.putString(StateName, path);
        callback.invoke(params);
    }

}
