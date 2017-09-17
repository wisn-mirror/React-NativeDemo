package com.demo_native;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wisn on 2017/9/9.
 */

public class TestInflactory implements LayoutInflater.Factory2 {
    @Override
    public View onCreateView(View parent, String name, Context context, AttributeSet attrs) {
        Log.e("TestInflactory1111","onCreateView111"+parent.toString()+" name"+name);
        int attributeCount = attrs.getAttributeCount();
        for (int i = 0; i < attributeCount; i++) {
            String attributeName = attrs.getAttributeName(i);
            String attributeValue = attrs.getAttributeValue(i);
            Log.e("TestInflactory111","attributeName:"+attributeName+" attributeValue:"+attributeValue);
        }
        return null;
    }

    @Override
    public View onCreateView(String name, Context context, AttributeSet attrs) {
        Log.e("TestInflactory222","onCreateView222"+name);
        int attributeCount = attrs.getAttributeCount();
        for (int i = 0; i < attributeCount; i++) {
            String attributeName = attrs.getAttributeName(i);
            String attributeValue = attrs.getAttributeValue(i);
            Log.e("TestInflactory222","attributeName:"+attributeName+" attributeValue:"+attributeValue);
        }
            return null;
    }
}
