package com.thembyandroid.base;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactContext;
import com.facebook.soloader.SoLoader;
import com.wisn.skinlib.base.SkinApplication;

/**
 * Created by wisn on 2017/9/18.
 */

public class BaseReactApplication extends SkinApplication implements ReactApplication {

    private final BaseReactNativeHost mReactNativeHost = new BaseReactNativeHost(this);

    private ReactContext mReactContext;

    public ReactContext getReactContext() {
        return mReactContext;
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}