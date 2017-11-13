package com.thembyandroid;

import android.os.Environment;

import com.thembyandroid.base.BaseReactApplication;
import com.wisn.skinlib.SkinManager;

import java.io.File;

public class MainApplication extends BaseReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        SkinManager.getInstance().setSkinRootPath(Environment.getExternalStorageDirectory() +
                                                  File.separator +
                                                  "dd");
    }
}
