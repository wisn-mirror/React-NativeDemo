package com.thembyandroid.activity;

import android.os.Bundle;

import com.thembyandroid.base.BaseReactActivity;
import com.wisn.skinlib.SkinManager;

import javax.annotation.Nullable;

/**
 * Created by wisn on 2017/11/13.
 */

public class SettingActivity extends BaseReactActivity {
    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        Bundle initialProperties = new Bundle();
        initialProperties.putString("primary", SkinManager.getInstance().getColorForRN("primary"));
        initialProperties.putString("gift_0", SkinManager.getInstance().getPathForRN("gift_0"));
        initialProperties.putString("home_0", SkinManager.getInstance().getPathForRN("home_0"));
        initialProperties.putString("watch_0", SkinManager.getInstance().getPathForRN("watch_0"));
        return initialProperties;
    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "Setting";
    }
}
