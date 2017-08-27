package want.com.nativetest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Button;

import com.facebook.react.*;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class TextActivity_RN extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    private Button mButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_text);
        mReactRootView = new ReactRootView(this);

        mReactInstanceManager = ReactInstanceManager.builder()
                                                    .setApplication(getApplication())
                                                    .setBundleAssetName("index.android.bundle")
                                                    .setJSMainModuleName("index.android")
                                                    .addPackage(new MainReactPackage())
//                                                    .addPackage(new TextPackage())
                                                    .setUseDeveloperSupport(com.facebook.react.BuildConfig.DEBUG)
                                                    .setInitialLifecycleState(LifecycleState.RESUMED)
                                                    .build();

        mReactRootView.startReactApplication(
                mReactInstanceManager, "TestActivity", null);

        setContentView(mReactRootView);


//        mButton = (Button) findViewById(R.id.button);
//        mButton.setText("hahahah");
    }


    @Override
    protected void onResume() {
        if (this.mReactInstanceManager != null)
            mReactInstanceManager.onHostResume(this, this);
        super.onResume();
    }

    @Override
    protected void onPause() {
        if (mReactInstanceManager != null)
            mReactInstanceManager.onHostPause(this);
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (mReactInstanceManager != null)
            mReactInstanceManager.onHostDestroy(this);
        super.onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (mReactInstanceManager != null)
            mReactInstanceManager.onActivityResult(this, requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        if (mReactInstanceManager != null)
            mReactInstanceManager.onNewIntent(intent);
        super.onNewIntent(intent);
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null)
            mReactInstanceManager.onBackPressed();
        else
            super.onBackPressed();
    }

    @Override
    public void invokeDefaultOnBackPressed() {
//        super.onBackPressed();
    }
}
