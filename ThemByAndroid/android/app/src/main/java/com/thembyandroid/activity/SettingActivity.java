package com.thembyandroid.activity;

import android.os.Bundle;

import com.thembyandroid.base.BaseReactActivity;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/11/13.
 */

public class SettingActivity extends BaseReactActivity {
    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        return null;
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "Setting";
    }
}
