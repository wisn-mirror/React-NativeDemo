package com.thembyandroid.view.attr;

import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.view.View;

import com.thembyandroid.view.TipRadioButton;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.attr.base.SkinAttr;
import com.wisn.skinlib.utils.LogUtils;


/**
 * Created by wisn on 2017/9/28.
 */

public class DrawableTopAttr extends SkinAttr {
    @Override
    public void applySkin(View view) {
        if (view instanceof TipRadioButton) {
            TipRadioButton radioButton = (TipRadioButton) view;
            if (isDrawable()) {
                Drawable drawable = SkinManager.getInstance().getDrawable(attrValueRefId);
                drawable.setBounds(0,0,radioButton.getDrawableSize(),radioButton.getDrawableSize());
                radioButton.setCompoundDrawables(null,drawable,null,null);
            } else {
                Drawable drawable = new ColorDrawable(SkinManager.getInstance()
                                                                 .getColor(attrValueRefId));
                drawable.setBounds(0,0,radioButton.getDrawableSize(),radioButton.getDrawableSize());
                radioButton.setCompoundDrawables(null,drawable,null,null);
            }

        }
    }
}