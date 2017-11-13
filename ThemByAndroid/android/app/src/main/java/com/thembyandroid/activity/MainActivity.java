package com.thembyandroid.activity;

import android.os.Bundle;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.thembyandroid.base.BaseReactActivity;
import com.thembyandroid.mudule.MainModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Nullable;

public class MainActivity extends BaseReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ThemByAndroid";
    }

    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        return null;
    }
}
