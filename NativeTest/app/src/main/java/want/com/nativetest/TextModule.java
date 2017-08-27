package want.com.nativetest;

import android.app.Activity;
import android.content.Intent;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by wisn on 2017/8/27.
 */

public class TextModule extends ReactContextBaseJavaModule implements ActivityEventListener,
                                                                      LifecycleEventListener {
    protected String MODULE_NAME = "TextModule";
    protected ReactApplicationContext mReactContext;
    protected Activity mActivity;

    protected TextModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
        this.mReactContext.addActivityEventListener(this);
        this.mReactContext.addLifecycleEventListener(this);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    public void sendEvent(String eventName, @Nullable WritableMap params) {
        mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @Override
    public void onHostResume() {
        this.mActivity = getCurrentActivity();
    }

    @Override
    public void onHostPause() {}

    @Override
    public void onHostDestroy() {
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    public void goBack() {
        mActivity.finish();
    }


}
