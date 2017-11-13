package com.thembyandroid.mudule;

import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableMap;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;
import com.thembyandroid.activity.TestActivity;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.interfaces.SkinLoaderListener;
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
                SkinManager.getInstance().resetDefaultSkin();
                sendEvent("nativeChangeThem", null);
            }
        });
    }

    @ReactMethod
    public void getImage(String StateName, String imageName, Callback callback) {
        LogUtils.e("getImage", "StateName:" + StateName + " imageName:" + imageName);
        WritableMap params = Arguments.createMap();
        String path = SkinManager.getInstance().getPathForRN(imageName);
        params.putString(StateName, path);
        callback.invoke(params);
    }

    @ReactMethod
    public void getImageMap(ReadableMap StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        ReadableMapKeySetIterator readableMapKeySetIterator = StateName.keySetIterator();
        while (readableMapKeySetIterator.hasNextKey()) {
            String s = readableMapKeySetIterator.nextKey();
            String Name=StateName.getString(s);
            String path = SkinManager.getInstance().getPathForRN(Name);
            LogUtils.e("MainModule", "getImageMap path:" + path + "  name:" + Name+ "  key:" + s);
            params.putString(s, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getImageList(ReadableArray StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        for (int i = 0; i < StateName.size(); i++) {
            String string = StateName.getString(i);
            String path = SkinManager.getInstance().getPathForRN(string);
            LogUtils.e("MainModule", "getImageList path:" + path + "  name:" + string);
            params.putString(string, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColor(String StateName, String colorName, Callback callback) {
        WritableMap params = Arguments.createMap();
        String path = SkinManager.getInstance().getColorForRN(colorName);
        params.putString(StateName, path);
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorMap(ReadableMap StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        ReadableMapKeySetIterator readableMapKeySetIterator = StateName.keySetIterator();
        while (readableMapKeySetIterator.hasNextKey()) {
            String s = readableMapKeySetIterator.nextKey();
            String Name=StateName.getString(s);
            String path = SkinManager.getInstance().getColorForRN(Name);
            LogUtils.e("MainModule", "getColorMap path:" + path + "  name:" + Name+ "  key:" + s);
            params.putString(s, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorList(ReadableArray StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        for (int i = 0; i < StateName.size(); i++) {
            String string = StateName.getString(i);
            String path = SkinManager.getInstance().getColorForRN(string);
            LogUtils.e("MainModule", "getColorList path:" + path + "  name:" + string);
            params.putString(string, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void startTest(){
        mActivity.startActivity(new Intent(mActivity, TestActivity.class));
    }
}
