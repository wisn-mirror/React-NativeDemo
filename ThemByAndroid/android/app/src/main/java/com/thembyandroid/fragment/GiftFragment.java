package com.thembyandroid.fragment;

import android.os.Bundle;

import com.thembyandroid.base.BaseReactFragment;
import com.wisn.skinlib.SkinManager;

import javax.annotation.Nullable;


/**
 * Created by wisn on 2017/9/11.
 */

public class GiftFragment extends BaseReactFragment {

    @Override
    protected String getMainPageName() {
        return "gift_fram";
    }

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
}
