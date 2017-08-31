package com.demo_native;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.demo_native.view.MyView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by wisn on 2017/8/25.
 */

public class MyTextViewManager extends SimpleViewManager<MyView> {
    @Override
    public String getName() {
        return "MyView";
    }

    @Override
    protected MyView createViewInstance(final ThemedReactContext reactContext) {
        final MyView myTextView = new MyView(reactContext);
        myTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onReceiveNativeEvent(myTextView,reactContext);
            }
        });
        return myTextView;
    }
    public void onReceiveNativeEvent(MyView myTextView,ThemedReactContext reactContext) {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                myTextView.getId(),
                "topChange",
                event);
    }
    @ReactProp(name = "color")
    public void setColor(MyView textView, Integer color) {
        textView.setColor(color);
    }

    @ReactProp(name = "text")
    public void setText(MyView textView, String text) {
        textView.setText(text);
    }
    @ReactProp(name = "textsize")
    public void setTextSize(MyView textView, Integer textSize) {
        textView.setTextSize(textSize);
    }
}
