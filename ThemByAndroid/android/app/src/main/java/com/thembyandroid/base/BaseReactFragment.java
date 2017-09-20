package com.thembyandroid.base;


import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.thembyandroid.them.MTouchListener;
import com.thembyandroid.them.RadioButtonViewPagerNavigatorActivity;
import com.wisn.skinlib.utils.LogUtils;

/**
 * Created by wisn on 2017/9/18.
 */

public abstract class BaseReactFragment extends Fragment implements MTouchListener {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private boolean isload=false;
    private LinearLayout mInflate;

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
//        mInflate = (LinearLayout)View.inflate(context, R.layout.fragment_root, null);

//        mReactInstanceManager.addReactInstanceEventListener();
        ((RadioButtonViewPagerNavigatorActivity) getActivity()).setMTouchListener(this);
        /*mReactInstanceManager = ReactInstanceManager.builder()
                                                    .setApplication(getActivity().getApplication())
                                                    *//*.setBundleAssetName("index.android.bundle")
                                                    .setJSMainModuleName("index.android")*//*
                                                    .setNativeModuleCallExceptionHandler(new NativeModuleCallExceptionHandler() {
                                                        @Override
                                                        public void handleException(Exception e) {
                                                            e.printStackTrace();
                                                        }
                                                    })
                                                    .addPackage((ReactPackage) getActivity())
                                                    .setUseDeveloperSupport(false)
                                                    .setInitialLifecycleState(LifecycleState.RESUMED)
                                                    .build();*/
        mReactRootView = new ReactRootView(context);
        mReactInstanceManager =
                ((BaseReactApplication) getActivity().getApplication()).getReactNativeHost()
                                                                       .getReactInstanceManager();


//        mInflate.addView(mReactRootView);
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
         super.onCreateView(inflater, container, savedInstanceState);
        return mReactRootView;
//        return mInflate;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        if(!isload){
            mReactRootView.startReactApplication(mReactInstanceManager,getMainPageName(),null);
            isload=true;
        }

    }


    @Override
    public void onDestroyView() {
        mReactRootView.unmountReactApplication();
        super.onDestroyView();
        /*if (mReactRootView != null) {
            ((ViewGroup) mReactRootView.getParent()).removeView(mReactRootView);
        }*/
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
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
    public void dispatchTouchEvent(MotionEvent event){
        if(mReactRootView!=null){
            LogUtils.e("dispatchTouchEvent","getAction:"+event.getAction());
//            mReactRootView.onTouchEvent(event);
//            mReactRootView.onChildStartedNativeGesture(event);
//            mReactRootView.onChildStartedNativeGesture(event);
        }
    }
}
