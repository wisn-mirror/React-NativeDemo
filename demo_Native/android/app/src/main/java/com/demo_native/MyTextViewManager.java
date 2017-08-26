package com.demo_native;
import android.util.Log;

import com.demo_native.view.MyView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by wisn on 2017/8/25.
 */

public class MyTextViewManager extends SimpleViewManager<MyView> {
    @Override
    public String getName() {
        return "MyView";
    }

    @Override
    protected MyView createViewInstance(ThemedReactContext reactContext) {
        MyView myTextView = new MyView(reactContext);
        return myTextView;
    }

    @ReactProp(name = "color")
    public void setColor(MyView textView, Integer color) {
        textView.setColor(color);
    }

    @ReactProp(name = "text")
    public void setText(MyView textView, String text) {
        Log.d("setText", text);
        textView.setText(text);
    }
    @ReactProp(name = "textsize")
    public void setTextSize(MyView textView, Integer textSize) {
        Log.d("setText", ""+textSize);
        textView.setTextSize(textSize);
    }
}
