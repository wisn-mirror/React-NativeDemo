package com.thembyandroid.base;

import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.wisn.skinlib.base.SkinAppCompatActivity;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/9/18.
 */

public abstract class BaseReactActivity extends SkinAppCompatActivity implements DefaultHardwareBackBtnHandler,
                                                                                 PermissionAwareActivity,
                                                                                 ReactPackage {

    private final BaseReactActivityDelegate mDelegate;

    protected BaseReactActivity() {
        mDelegate = createReactActivityDelegate();
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     * e.g. "MoviesApp"
     */
    protected
    @Nullable
    String getMainComponentName() {
        return null;
    }

    /**
     * Called at construction time, override if you have a custom delegate implementation.
     */
    protected BaseReactActivityDelegate createReactActivityDelegate() {
        return new BaseReactActivityDelegate(this, getMainComponentName());
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ((BaseReactNativeHost) getReactNativeHost()).addPackage(this);
        mDelegate.onCreate(savedInstanceState);
    }

    @Override
    protected void onPause() {
        super.onPause();
        mDelegate.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mDelegate.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mDelegate.onDestroy();
        ((BaseReactNativeHost) getReactNativeHost()).removePackage(this);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        mDelegate.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        return mDelegate.onKeyUp(keyCode, event) || super.onKeyUp(keyCode, event);
    }

    @Override
    public void onBackPressed() {
        if (!mDelegate.onBackPressed()) {
            super.onBackPressed();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    public void onNewIntent(Intent intent) {
        if (!mDelegate.onNewIntent(intent)) {
            super.onNewIntent(intent);
        }
    }

    public void getHost() {
        mDelegate.getReactNativeHost();
    }

    @Override
    public void requestPermissions(
            String[] permissions,
            int requestCode,
            PermissionListener listener) {
        mDelegate.requestPermissions(permissions, requestCode, listener);
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode,
            String[] permissions,
            int[] grantResults) {
        mDelegate.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    protected final ReactNativeHost getReactNativeHost() {
        return mDelegate.getReactNativeHost();
    }

    protected final ReactInstanceManager getReactInstanceManager() {
        return mDelegate.getReactInstanceManager();
    }

    protected final void loadApp(String appKey) {
        mDelegate.loadApp(appKey);
    }
}