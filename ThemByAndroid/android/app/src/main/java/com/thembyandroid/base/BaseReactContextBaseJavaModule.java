package com.thembyandroid.base;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/9/18.
 */

public abstract class BaseReactContextBaseJavaModule extends ReactContextBaseJavaModule implements
                                                                                        ActivityEventListener,
                                                                                        LifecycleEventListener {
    public  Activity mActivity;

    public BaseReactContextBaseJavaModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
        reactContext.addLifecycleEventListener(this);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

    }

    protected void sendEvent(String eventName, @Nullable WritableMap params) {
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                    .emit(eventName, params);
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    @Override
    public void onHostResume() {
        if (mActivity == null)
            mActivity = getCurrentActivity();
    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {

    }

    public void back() {
        if (mActivity != null)
            mActivity.finish();
    }

    @Override
    public boolean canOverrideExistingModule() {
//        return super.canOverrideExistingModule();
        return true;
    }
}
