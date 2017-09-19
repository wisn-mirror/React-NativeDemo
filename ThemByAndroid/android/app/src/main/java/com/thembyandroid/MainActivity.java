package com.thembyandroid;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.thembyandroid.base.BaseReactActivity;
import com.thembyandroid.them.MainModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MainActivity extends BaseReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ThemByAndroid";
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        ArrayList nativeModuleList = new ArrayList<>();
        nativeModuleList.add(new MainModule(reactContext));
        return nativeModuleList;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
