package want.com.nativetest;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.List;

/**
 * Created by wisn on 2017/8/27.
 */

public class TextPackage implements ReactPackage {
    protected List<NativeModule> nativeModuleList;
    protected List<Class<? extends JavaScriptModule>> javaScriptModuleList;
    protected List<ViewManager> viewManagerList;

    public TextPackage() {
        nativeModuleList = Collections.emptyList();
        javaScriptModuleList = Collections.emptyList();
        viewManagerList = Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        nativeModuleList.add(new TextModule(reactContext));
        return nativeModuleList;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return javaScriptModuleList;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return viewManagerList;
    }
}
