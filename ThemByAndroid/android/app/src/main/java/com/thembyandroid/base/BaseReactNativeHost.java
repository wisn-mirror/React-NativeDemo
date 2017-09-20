package com.thembyandroid.base;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.thembyandroid.BuildConfig;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wisn on 2017/9/18.
 */

public class BaseReactNativeHost extends ReactNativeHost {
    List<ReactPackage> data = new ArrayList<ReactPackage>() ;

    public BaseReactNativeHost(Application application) {
        super(application);
        data.add(new MainReactPackage());
    }

    @Override
    public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return data;
    }

    public void addPackage(ReactPackage reactPackage) {
        if (data != null) {
            data.add(reactPackage);
        }
    }

    public void removePackage(ReactPackage reactPackage) {
        if (data != null) {
            if (data.contains(reactPackage)) {
                data.remove(reactPackage);
            }

        }
    }
}
