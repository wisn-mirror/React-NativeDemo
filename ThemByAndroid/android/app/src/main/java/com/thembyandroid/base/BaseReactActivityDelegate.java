package com.thembyandroid.base;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/9/18.
 */

public class BaseReactActivityDelegate extends ReactActivityDelegate{
    public BaseReactActivityDelegate(Activity activity,
                                     @Nullable String mainComponentName) {
        super(activity, mainComponentName);
    }
    @Override
    protected ReactNativeHost getReactNativeHost() {
        return super.getReactNativeHost();
    }

    @Override
    public ReactInstanceManager getReactInstanceManager() {
        return super.getReactInstanceManager();
    }

    @Override
    protected void loadApp(String appKey) {
        super.loadApp(appKey);
    }

    @Override
    public boolean onNewIntent(Intent intent) {
        return super.onNewIntent(intent);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public boolean onBackPressed() {
        return super.onBackPressed();
    }
}
