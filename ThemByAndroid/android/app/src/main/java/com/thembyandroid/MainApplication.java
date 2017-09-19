package com.thembyandroid;

import android.app.Application;
import android.os.Environment;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.thembyandroid.base.BaseReactApplication;
import com.thembyandroid.base.BaseReactNativeHost;
import com.wisn.skinlib.SkinManager;

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends BaseReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        SkinManager.getInstance().setSkinRootPath(Environment.getExternalStorageDirectory() +
                                                  File.separator +
                                                  "dd");
    }
}
