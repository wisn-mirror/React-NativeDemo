package com.thembyandroid.activity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

import com.thembyandroid.R;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.base.SkinAppCompatActivity;
import com.wisn.skinlib.interfaces.SkinLoaderListener;
import com.wisn.skinlib.utils.LogUtils;

public class FirstActivity extends SkinAppCompatActivity implements View.OnClickListener, SkinLoaderListener {
    private static final String TAG = "MainActivity";
    private Button mChangeSkin, resetSkin,nextActivity;

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
//        return (int) (dpValue * scale + 0.5f);

    }

    @Override
    public void onClick(View v) {
        if (v == mChangeSkin) {
            SkinManager.getInstance().loadSkin("theme-com.wisn.skin1--65-1.0-2017-11-02--06-28-16.skin",
                                               this);
            Log.e(TAG, "printprintprint--------------------------------------------------");
//            SkinResourceCompat.print();
        } else if (v == resetSkin) {
//            SkinResourceCompat.print();
           /* long start = System.currentTimeMillis();
            String path = SkinResourceCompat.getPath("aaaaa");
            for (int i = 0; i < 10; i++) {
                Log.e(TAG, SkinResourceCompat.getPath("gift_0"));
                Log.e(TAG, SkinResourceCompat.getPath("gift_1"));
                Log.e(TAG, SkinResourceCompat.getPath("ic_launcher_round"));
            }
            Log.e(TAG, (System.currentTimeMillis() - start) + ":" + path);*/
            SkinManager.getInstance().resetDefaultSkin();
        }else if(v==nextActivity){
//            startActivity(new Intent(this, MainActivity.class));
            startActivity(new Intent(this, RadioButtonViewPagerNavigatorActivity.class));
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
}
