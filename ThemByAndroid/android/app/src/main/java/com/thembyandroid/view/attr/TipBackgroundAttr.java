package com.thembyandroid.view.attr;

import android.view.View;

import com.thembyandroid.view.TipRadioButton;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.attr.base.SkinAttr;


/**
 * Created by wisn on 2017/9/30.
 */

public class TipBackgroundAttr extends SkinAttr {
    @Override
    public void applySkin(View view) {
        if (view instanceof TipRadioButton) {
            TipRadioButton radioButton = (TipRadioButton) view;
            radioButton.setTipBackground(SkinManager.getInstance().getColor(attrValueRefId));
        }
    }
}
