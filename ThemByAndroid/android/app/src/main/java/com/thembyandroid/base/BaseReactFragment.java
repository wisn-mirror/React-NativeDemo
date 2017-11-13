package com.thembyandroid.base;


import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by wisn on 2017/9/18.
 */

public abstract class BaseReactFragment extends Fragment  {
    private ReactRootView mReactRootView;
    public Context mContext;

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        mContext = context;
        mReactRootView = new ReactRootView(context);
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {

        boolean needToEnableDevMenu = false;

        if (getReactNativeHost().getUseDeveloperSupport()
            && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M
            && !Settings.canDrawOverlays(getContext())) {
            needToEnableDevMenu = true;
        }

        mReactRootView = new ReactRootView(getContext());

        if (!needToEnableDevMenu) {
            mReactRootView.startReactApplication(
                    getReactNativeHost().getReactInstanceManager(),
                    getMainPageName(), getLaunchOptions());
        }
        return mReactRootView;
    }

    @javax.annotation.Nullable
    protected  Bundle getLaunchOptions(){
        return null;
    }

    @Override
    public void onResume() {
        super.onResume();
        if (getReactNativeHost().hasInstance()&&getReactNativeHost().getReactInstanceManager()!=null&&getActivity()!=null) {
            getReactNativeHost().getReactInstanceManager().onHostResume(getActivity(), (DefaultHardwareBackBtnHandler) getActivity());
        }
    }
    @Override
    public void onPause() {
        super.onPause();
        if (getReactNativeHost().hasInstance()&&getReactNativeHost().getReactInstanceManager()!=null&&getActivity()!=null) {
            getReactNativeHost().getReactInstanceManager().onHostPause(getActivity());
        }
    }
    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
    }

    protected ReactNativeHost getReactNativeHost() {
        return ((BaseReactApplication) getActivity().getApplication()).getReactNativeHost();
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mReactRootView != null) {
            mReactRootView.unmountReactApplication();
            mReactRootView = null;
        }
        if (getReactNativeHost().hasInstance()&&getReactNativeHost().getReactInstanceManager()!=null&&getActivity()!=null) {
            getReactNativeHost().getReactInstanceManager().onHostDestroy(getActivity());
        }
    }

    protected abstract String getMainPageName();

}
