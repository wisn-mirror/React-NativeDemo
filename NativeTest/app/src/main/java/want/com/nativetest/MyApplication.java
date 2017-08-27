package want.com.nativetest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by wisn on 2017/8/27.
 */

public class MyApplication extends Application implements ReactApplication {
    private Application context;

    @Override
    public ReactNativeHost getReactNativeHost() {
        context = this;
        ReactNativeHost host = null;
        if (host==null){
            host = new ReactNativeHost(context) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return false;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                    return Arrays.<ReactPackage>asList(
                            new MainReactPackage(),
                            new TextPackage()
                    );
                }
            };
        }

        return host;
    }
}
