package com.thembyandroid.them;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.thembyandroid.base.BaseReactActivity;
import com.thembyandroid.mudule.TestModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/9/26.
 */

public class TestActivity extends BaseReactActivity {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> data = new ArrayList<>();
        data.add(new TestModule(reactContext));
        return data;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "Test";
    }
}
