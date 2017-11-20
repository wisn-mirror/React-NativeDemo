package com.thembyandroid;

import com.thembyandroid.base.BaseReactApplication;

public class MainApplication extends BaseReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();
       /* SkinManager.getInstance().setSkinRootPath(Environment.getExternalStorageDirectory() +
                                                  File.separator +
                                                  "dd");*/
    }
}
