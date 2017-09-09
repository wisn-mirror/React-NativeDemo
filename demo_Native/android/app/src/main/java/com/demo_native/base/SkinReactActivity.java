package com.demo_native.base;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.view.LayoutInflaterCompat;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.attr.base.DynamicAttr;
import com.wisn.skinlib.interfaces.DynamicView;
import com.wisn.skinlib.interfaces.ISkinUpdate;
import com.wisn.skinlib.loader.SkinInflaterFactory;

import java.util.List;

/**
 * Created by wisn on 2017/9/8.
 */

public abstract class SkinReactActivity extends ReactActivity implements ISkinUpdate, DynamicView {
    private SkinInflaterFactory skinInflaterFactory;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        skinInflaterFactory = new SkinInflaterFactory();
        skinInflaterFactory.setAppCompatActivity(this);
        LayoutInflaterCompat.setFactory(getLayoutInflater(), skinInflaterFactory);
        super.onCreate(savedInstanceState);

    }

    @Override
    protected void onResume() {
        super.onResume();
        SkinManager.getInstance().attach(this);
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        SkinManager.getInstance().detach(this);
        skinInflaterFactory.clear();
    }

    public SkinInflaterFactory getSkinInflaterFactory(){
        return skinInflaterFactory;
    }

    @Override
    public void onThemUpdate() {
        skinInflaterFactory.applySkin();
    }

    @Override
    public void dynamicAddView(View view, List<DynamicAttr> attr) {

    }

    @Override
    public void dynamicAddView(View view, String attrName, int attrValueresId) {

    }

    @Override
    public void dynamicAddFontView(TextView textView) {

    }

}
