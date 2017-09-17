package com.demo_native;

import android.os.Bundle;
import android.support.v4.view.LayoutInflaterCompat;
import android.view.LayoutInflater;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "demo_Native";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        LayoutInflater newLayoutInlflater = getLayoutInflater().cloneInContext(this);

        getLayoutInflater().setFactory(new TestInflactory());
//        getLayoutInflater().setFactory(new TestInflactory());
//        LayoutInflaterCompat.setFactory(newLayoutInlflater, new TestInflactory());

        super.onCreate(savedInstanceState);
    }
}
