package com.thembyandroid.activity;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Toast;

import com.thembyandroid.R;
import com.thembyandroid.base.BaseReactActivity;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.interfaces.SkinLoaderListener;
import com.wisn.skinlib.utils.LogUtils;

import javax.annotation.Nullable;

public class LaunchActivity extends BaseReactActivity implements View.OnClickListener, SkinLoaderListener {
    private static final String TAG = "MainActivity";
    private Button mChangeSkin, resetSkin, nextActivity;

    @Nullable
    @Override
    protected Bundle getLaunchOptions() {
        return null;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);
        ImageButton imageButton = (ImageButton) findViewById(R.id.imageButton);
        imageButton.setPressed(true);
        mChangeSkin = (Button) findViewById(R.id.changeSkin);
        resetSkin = (Button) findViewById(R.id.resetSkin);
        nextActivity = (Button) findViewById(R.id.nextActivity);
        mChangeSkin.setOnClickListener(this);
        resetSkin.setOnClickListener(this);
        nextActivity.setOnClickListener(this);
        final float scale = this.getResources().getDisplayMetrics().density;
        LogUtils.e(TAG, "density:" + scale);

    }

    @Override
    public void onClick(View v) {
        if (v == mChangeSkin) {
            SkinManager.getInstance().loadSkin("theme-com.wisn.skin1--65-1.0-2017-11-02--06-28-16.skin",
                                               this);
        } else if (v == resetSkin) {
            SkinManager.getInstance().resetDefaultSkin();
            requestPermissions();
        } else if (v == nextActivity) {
            startActivity(new Intent(this, RadioButtonViewPagerNavigatorActivity.class));
        }
    }

    public void requestPermissions() {
        if (Build.VERSION.SDK_INT >= 23) {
            int request = ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE);
            if (request != PackageManager.PERMISSION_GRANTED){
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, 123);
                return;//
            } else {
                //权限同意，不需要处理,
                 Toast.makeText(this,"权限同意",Toast.LENGTH_SHORT).show();
            }
        } else {
            //低于23 不需要特殊处理
        }
    }

    @Override
    public void start() {
        LogUtils.e(TAG, "start");
    }

    @Override
    public void onSuccess() {
        LogUtils.e(TAG, "onSuccess");

    }

    public void updateSkinPath() {
        new Thread(new Runnable() {
            @Override
            public void run() {
             /*   SkinManager.getInstance().updateSkinPath(Environment.getExternalStorageDirectory() +
                                                         File.separator +
                                                         "dd",
                                                         new SkinPathChangeLister() {
                                                             @Override
                                                             public void start() {
                                                                 LogUtils.e(TAG,"SkinPathChangeLister:start:");
                                                             }

                                                             @Override
                                                             public void progress(int current, int progress) {
                                                                 LogUtils.e(TAG,"SkinPathChangeLister:progress:current:"+current+" progress"+progress);
                                                             }

                                                             @Override
                                                             public void finish() {
                                                                 LogUtils.e(TAG,"SkinPathChangeLister:finish:");
                                                             }
                                                         });*/
            }
        }).start();
    }

    @Override
    public void onFailed(String error) {
        LogUtils.e(TAG, "onFailed" + error);
    }

    @Override
    public void onProgress(int progress, int sum) {

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            Toast.makeText(this, "权限申请成功", Toast.LENGTH_SHORT).show();
        } else if (grantResults[0] == PackageManager.PERMISSION_DENIED) {
            Toast.makeText(this, "权限申请失败，用户拒绝权限", Toast.LENGTH_SHORT).show();
        }

    }
}
