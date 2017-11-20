package com.thembyandroid;

import android.os.Environment;

import com.thembyandroid.base.BaseReactApplication;

import java.io.File;

public class MainApplication extends BaseReactApplication {


    @Override
    public String setSkinRootPath() {
        return Environment.getExternalStorageDirectory() +
               File.separator + "dd";
    }
}
