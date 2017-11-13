package com.thembyandroid.activity;

import android.os.Bundle;

import com.thembyandroid.base.BaseReactActivity;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/9/26.
 */

public class TestActivity extends BaseReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "Test";
    }

    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        return null;
    }
}
