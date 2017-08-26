package com.demo_native;

import com.demo_native.view.CircleView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by wisn on 2017/8/26.
 */

public class CircleManager extends SimpleViewManager<CircleView>{
    @Override
    public String getName() {
        return "MCircle";
    }

    @Override
    protected CircleView createViewInstance(ThemedReactContext reactContext) {
        return new CircleView(reactContext);
    }
    /**
     * 传输背景色参数
     */
    @ReactProp(name = "color")
    public void setColor(CircleView view, Integer color) {
        view.setColor(color);
    }

    /**
     * 传输半径参数
     */
    @ReactProp(name = "radius")
    public void setRadius(CircleView view, Integer radius) {
        view.setRadius(radius);
    }
}
