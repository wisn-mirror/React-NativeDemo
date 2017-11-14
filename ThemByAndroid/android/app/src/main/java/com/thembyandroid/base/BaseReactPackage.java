package com.thembyandroid.base;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.thembyandroid.mudule.MainModule;
import com.thembyandroid.mudule.SettingModule;
import com.thembyandroid.mudule.SkinModule;
import com.thembyandroid.mudule.TestModule;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wisn on 2017/11/13.
 */

public class BaseReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(final ReactApplicationContext reactContext) {
        return new ArrayList<NativeModule>(){{
            add(new SkinModule(reactContext));
            add(new MainModule(reactContext));
            add(new SettingModule(reactContext));
            add(new TestModule(reactContext));
        }};
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return new ArrayList<ViewManager>(){{

        }};
    }
}
