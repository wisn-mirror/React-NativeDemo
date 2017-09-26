package com.thembyandroid.mudule;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;

/**
 * Created by wisn on 2017/9/26.
 */

public class TestModule extends BaseReactContextBaseJavaModule {

    public TestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestModule";
    }

    @ReactMethod
    public void showToast() {
        Toast.makeText(getCurrentActivity(), "hello fdsafdsafdsafd", Toast.LENGTH_SHORT).show();
    }
    
}
