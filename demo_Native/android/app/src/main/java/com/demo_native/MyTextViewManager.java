package com.demo_native;

import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by wisn on 2017/8/25.
 */

public class MyTextViewManager extends SimpleViewManager<TextView> {
    @Override
    public String getName() {
        return "MyTextViewManager";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView myTextView = new TextView(reactContext);
        myTextView.setText("默认值");
        return myTextView;
    }

    @ReactProp(name = "color")
    public void setColor(TextView textView, Integer color) {
       // textView.setTextColor(color);
    }

    @ReactProp(name = "text")
    public void setText(TextView textView, String text) {

        //textView.setText(text);
    }
}
