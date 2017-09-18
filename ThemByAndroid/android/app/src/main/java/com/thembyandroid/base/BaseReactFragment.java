package com.thembyandroid.base;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by wisn on 2017/9/18.
 */

public abstract class BaseReactFragment extends Fragment {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        mReactRootView = new ReactRootView(context);
        mReactInstanceManager =
                ((BaseReactApplication) getActivity().getApplication()).getReactNativeHost()
                                                                       .getReactInstanceManager();
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
//        return super.onCreateView(inflater, container, savedInstanceState);
        return mReactRootView;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        mReactRootView.startReactApplication(mReactInstanceManager,getMainPageName(),null);
    }

    protected abstract String getMainPageName();
    protected void sendEvent(String eventName,
                             @Nullable WritableMap params) {
        if (((BaseReactApplication) getActivity().getApplication()).getReactContext() != null) {
            ((BaseReactApplication) getActivity().getApplication()).getReactContext()
                                                            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                                            .emit(eventName, params);
        }
    }
}
