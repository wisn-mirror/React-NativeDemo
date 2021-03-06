package com.thembyandroid.mudule;

import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.thembyandroid.activity.SettingActivity;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;

/**
 * Created by wisn on 2017/11/14.
 */

public class MainModule extends BaseReactContextBaseJavaModule {

    public MainModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MainModule";
    }

    @ReactMethod
    public void showToast() {
        Toast.makeText(getCurrentActivity(), "hello fdsafdsafdsafd", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void startActivity(String activity) {
        Intent intent = null;
        if ("SettingActivity".equals(activity)) {
            intent = new Intent(mActivity, SettingActivity.class);
        }
        if (intent != null) {
            mActivity.startActivity(intent);
        }
    }
}
