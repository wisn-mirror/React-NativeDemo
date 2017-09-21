package com.thembyandroid.them;

import android.os.Bundle;
import android.support.annotation.IdRes;
import android.support.annotation.Nullable;
import android.support.v4.view.ViewPager;
import android.widget.RadioGroup;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.thembyandroid.R;
import com.thembyandroid.adapter.FragmentAdapter;
import com.thembyandroid.base.BaseReactActivity;
import com.thembyandroid.base.BaseReactApplication;
import com.thembyandroid.view.MyRadioButton;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RadioButtonViewPagerNavigatorActivity extends BaseReactActivity implements RadioGroup.OnCheckedChangeListener,
                                                                                        ViewPager.OnPageChangeListener {

    private RadioGroup mRadioButton;
    private MyRadioButton mRadiobutton_bg_home;
    private MyRadioButton mRadiobutton_bg_gift;
    private MyRadioButton mRadiobutton_bg_start;
    private MyRadioButton mRadiobutton_bg_watch;
    private ViewPager mViewpager;
    private ReactInstanceManager mReactInstanceManager;

    private List<String> data = new ArrayList<String>();

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navigator_viewpager);
        mRadioButton = (RadioGroup) findViewById(R.id.bottom_radiogroup);
        mViewpager = (ViewPager) findViewById(R.id.viewpager);
        mRadiobutton_bg_home = (MyRadioButton) findViewById(R.id.radiobutton_bg_home);
        mRadiobutton_bg_gift = (MyRadioButton) findViewById(R.id.radiobutton_bg_gift);
        mRadiobutton_bg_start = (MyRadioButton) findViewById(R.id.radiobutton_bg_start);
        mRadiobutton_bg_watch = (MyRadioButton) findViewById(R.id.radiobutton_bg_watch);
        mRadioButton.setOnCheckedChangeListener(this);
        mReactInstanceManager =
                ((BaseReactApplication) this.getApplication()).getReactNativeHost()
                                                              .getReactInstanceManager();


    }

    @Override
    protected void onStart() {
        super.onStart();
        setDefaultFragment();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    private void setDefaultFragment() {
        data.add("HomeFragment");
        data.add("GiftFragment");
        data.add("StartFragment");
        data.add("WatchFragment");
        FragmentAdapter fragmentAdapter = new FragmentAdapter(getSupportFragmentManager(), data);
        mViewpager.setAdapter(fragmentAdapter);
        mViewpager.addOnPageChangeListener(this);
        mViewpager.setCurrentItem(1);
    }

    @Override
    public void onCheckedChanged(RadioGroup group, @IdRes int checkedId) {
        int index = 0;
        switch (checkedId) {
            case R.id.radiobutton_bg_home:
                index = 0;
                break;
            case R.id.radiobutton_bg_gift:
                index = 1;
                break;
            case R.id.radiobutton_bg_start:
                index = 2;
                break;
            case R.id.radiobutton_bg_watch:
                index = 3;
                break;
        }
        mViewpager.setCurrentItem(index);
    }

    @Override
    public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

    }

    @Override
    public void onPageSelected(int position) {
        mRadioButton.setOnCheckedChangeListener(null);
        switch (position) {
            case 0:
                mRadiobutton_bg_home.setChecked(true);
                break;
            case 1:
                mRadiobutton_bg_gift.setChecked(true);
                break;
            case 2:
                mRadiobutton_bg_start.setChecked(true);
                break;
            case 3:
                mRadiobutton_bg_watch.setChecked(true);
                break;
        }
        mRadioButton.setOnCheckedChangeListener(this);
    }

    @Override
    public void onPageScrollStateChanged(int state) {

    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        ArrayList nativeModuleList = new ArrayList<>();
        nativeModuleList.add(new MainModule(reactContext));
        return nativeModuleList;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }


}
