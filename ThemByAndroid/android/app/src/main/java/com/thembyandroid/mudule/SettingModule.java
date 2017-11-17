package com.thembyandroid.mudule;

import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.thembyandroid.activity.RNNavigatorActivity;
import com.thembyandroid.activity.SkinSettingActivity;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;

/**
 * Created by wisn on 2017/9/26.
 */

public class SettingModule extends BaseReactContextBaseJavaModule {

    public SettingModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SettingModule";
    }

    @ReactMethod
    public void startActivity(String activity) {
        Intent intent = null;
        if ("SkinSettingActivity".equals(activity)) {
            intent = new Intent(mActivity, SkinSettingActivity.class);
        }else if("RNNavigatorActivity".equals(activity)){
            intent = new Intent(mActivity, RNNavigatorActivity.class);
        }
        if (intent != null) {
            mActivity.startActivity(intent);
        }
    }
    
}
