package com.demo_native;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/8/16.
 */

public class RnModule extends ReactContextBaseJavaModule implements LifecycleEventListener {
    private final  static  String MODULE="RnModule";
    private final  static  String TAG="RnModule";
    public RnModule(ReactApplicationContext reactContext) {
        super(reactContext);
        //监听生命周期
        reactContext.addLifecycleEventListener(this);
    }

    @Override
    public String getName() {
        return MODULE;
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
}
