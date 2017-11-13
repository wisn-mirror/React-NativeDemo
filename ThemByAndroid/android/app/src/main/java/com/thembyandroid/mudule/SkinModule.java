package com.thembyandroid.mudule;

import android.os.Handler;
import android.os.Looper;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableMap;
import com.thembyandroid.base.BaseReactContextBaseJavaModule;
import com.wisn.skinlib.SkinManager;
import com.wisn.skinlib.interfaces.SkinLoaderListener;
import com.wisn.skinlib.utils.LogUtils;


/**
 * Created by wisn on 2017/9/18.
 */

public class SkinModule extends BaseReactContextBaseJavaModule {

    private String TAG = "SkinModule";

    public SkinModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
//    private List<SkinTask.DataBean.ThemeListBean> mThemeList;

    @Override
    public String getName() {
        return "SkinModule";
    }

    @Override
    public boolean canOverrideExistingModule() {
        return true;
    }

    @ReactMethod
    public void changeSkin(final String skinID, final Promise mPromise) {
        if (skinID == null) mPromise.resolve(null);
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                SkinManager.getInstance().loadSkin(skinID,
                                                   new SkinLoaderListener() {
                                                       @Override
                                                       public void start() {
                                                           LogUtils.e(TAG, skinID + "  start   ");
                                                       }

                                                       @Override
                                                       public void onSuccess() {
                                                           sendEvent("nativeChangeSkin", null);
                                                           LogUtils.e(TAG, skinID + " onSuccess ");
                                                          /* if(mThemeList!=null){
                                                               List<String> skinListName = SkinManager.getInstance().getSkinListName(false, false);
                                                               String  currentThemName = SkinManager.getInstance().getCurrentSkinId();
                                                               WritableArray
                                                                       skinList = new WritableNativeArray();
                                                               for (SkinTask.DataBean.ThemeListBean themeListBean : mThemeList) {
                                                                   WritableMap map = new WritableNativeMap();
                                                                   map.putString("id", themeListBean.getId());
                                                                   map.putString("name", themeListBean.getName());
                                                                   map.putString("packageUrl",
                                                                                 themeListBean.getPackageUrl());
                                                                   map.putString("showUrl", themeListBean.getShowUrl());
                                                                   map.putString("type", themeListBean.getType());
                                                                   map.putString("color", themeListBean.getColor());
                                                                   map.putString("beginDate", themeListBean.getBeginDate());
                                                                   if(skinListName!=null&&(skinListName.contains(themeListBean.getId()))){
                                                                       map.putBoolean("isDownload",true );
                                                                   }else{
                                                                       map.putBoolean("isDownload", false);
                                                                   }
                                                                   if(currentThemName!=null&&themeListBean.getId().equals(currentThemName)){
                                                                       map.putBoolean("isCurrentThem",true );
                                                                   }else{
                                                                       map.putBoolean("isCurrentThem",false );
                                                                   }
                                                                   skinList.pushMap(map);
                                                               }
                                                               mPromise.resolve(skinList);
                                                           } else {
                                                               mPromise.resolve(null);
                                                           }*/
                                                       }

                                                       @Override
                                                       public void onFailed(String error) {
                                                           LogUtils.e(TAG, skinID + "  onFailed   " + error);
                                                           mPromise.reject("400", error);
                                                       }

                                                       @Override
                                                       public void onProgress(int progress, int sum) {
                                                           LogUtils.e(TAG,
                                                                      skinID +
                                                                      "  onProgress   progress " +
                                                                      progress +
                                                                      " sum " +
                                                                      sum);
                                                       }
                                                   });

            }
        });
    }

    @ReactMethod
    public void setDefaultSkin() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                SkinManager.getInstance().resetDefaultSkin();
                sendEvent("nativeChangeSkin", null);
            }
        });
    }

    @ReactMethod
    public void getImage(String StateName, String imageName, Callback callback) {
//        log_d("getImage", "StateName:" + StateName + " imageName:" + imageName);
        WritableMap params = Arguments.createMap();
        String path = SkinManager.getInstance().getPathForRN(imageName);
        params.putString(StateName, path);
        callback.invoke(params);
    }

    @ReactMethod
    public void getImageMap(ReadableMap StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        ReadableMapKeySetIterator readableMapKeySetIterator = StateName.keySetIterator();
        while (readableMapKeySetIterator.hasNextKey()) {
            String s = readableMapKeySetIterator.nextKey();
            String Name = StateName.getString(s);
            String path = SkinManager.getInstance().getPathForRN(Name);
//            log_d(TAG, "getImageMap path:" + path + "  name:" + Name + "  key:" + s);
            params.putString(s, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getImageList(ReadableArray StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        for (int i = 0; i < StateName.size(); i++) {
            String string = StateName.getString(i);
            String path = SkinManager.getInstance().getPathForRN(string);
//            log_d(TAG, "getImageList path:" + path + "  name:" + string);
            params.putString(string, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColor(String StateName, String colorName, Callback callback) {
        WritableMap params = Arguments.createMap();
        String path = SkinManager.getInstance().getColorForRN(colorName);
        params.putString(StateName, path);
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorMap(ReadableMap StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        ReadableMapKeySetIterator readableMapKeySetIterator = StateName.keySetIterator();
        while (readableMapKeySetIterator.hasNextKey()) {
            String s = readableMapKeySetIterator.nextKey();
            String Name = StateName.getString(s);
            String path = SkinManager.getInstance().getColorForRN(Name);
//            log_d(TAG, "getColorMap path:" + path + "  name:" + Name + "  key:" + s);
            params.putString(s, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorList(ReadableArray StateName, Callback callback) {
        WritableMap params = Arguments.createMap();
        for (int i = 0; i < StateName.size(); i++) {
            String string = StateName.getString(i);
            String path = SkinManager.getInstance().getColorForRN(string);
//            log_d(TAG, "getColorList path:" + path + "  name:" + string);
            params.putString(string, path);
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorImageMap(ReadableMap colorMap, ReadableMap imageMap, Callback callback) {
        WritableMap params = Arguments.createMap();
        if (colorMap != null) {
            ReadableMapKeySetIterator colorMapIterator = colorMap.keySetIterator();
            while (colorMapIterator.hasNextKey()) {
                String stateName = colorMapIterator.nextKey();
                String Name = colorMap.getString(stateName);
                String path = SkinManager.getInstance().getColorForRN(Name);
                params.putString(stateName, path);
            }
        }
        if (imageMap != null) {
            ReadableMapKeySetIterator imageMapIterator = imageMap.keySetIterator();
            while (imageMapIterator.hasNextKey()) {
                String stateName = imageMapIterator.nextKey();
                String Name = imageMap.getString(stateName);
                String path = SkinManager.getInstance().getPathForRN(Name);
//                log_d(TAG, "getImageMap path:" + path + "  name:" + Name + "  key:" + stateName);
                params.putString(stateName, path);
            }
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void getColorImageList(ReadableArray colorList, ReadableArray ImageList, Callback callback) {
        WritableMap params = Arguments.createMap();
        if (colorList != null) {
            for (int i = 0; i < colorList.size(); i++) {
                String string = colorList.getString(i);
                String path = SkinManager.getInstance().getColorForRN(string);
//                log_d(TAG, "getColorList path:" + path + "  name:" + string);
                params.putString(string, path);
            }
        }
        if (ImageList != null) {
            for (int i = 0; i < ImageList.size(); i++) {
                String string = ImageList.getString(i);
                String path = SkinManager.getInstance().getPathForRN(string);
//                log_d(TAG, "getImageList path:" + path + "  name:" + string);
                params.putString(string, path);
            }
        }
        callback.invoke(params);
    }

    @ReactMethod
    public void downloadSkin(final String skinId, String downloadurl, final Promise promise) {

       /* new DownloadUtil().download(downloadurl,
                                    Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
                                               .getAbsolutePath(),
                                    new DownloadUtil.OnDownloadListener() {
                                        @Override
                                        public void onDownloadSuccess(final String path) {
                                            LogUtil.d(TAG,skinId+"onDownloadSuccess   "+path);
                                            try {
                                                if(mThemeList!=null){
                                                    List<String> skinListName = SkinManager.getInstance().getSkinListName(false, false);
                                                    String  currentThemName = SkinManager.getInstance().getCurrentSkinId();
                                                    WritableArray skinList = new WritableNativeArray();
                                                    for (SkinTask.DataBean.ThemeListBean themeListBean : mThemeList) {
                                                        WritableMap map = new WritableNativeMap();
                                                        map.putString("id", themeListBean.getId());
                                                        map.putString("name", themeListBean.getName());
                                                        map.putString("packageUrl",
                                                                      themeListBean.getPackageUrl());
                                                        map.putString("showUrl", themeListBean.getShowUrl());
                                                        map.putString("type", themeListBean.getType());
                                                        map.putString("color", themeListBean.getColor());
                                                        map.putString("beginDate", themeListBean.getBeginDate());
                                                        if(skinListName!=null&&(skinListName.contains(themeListBean.getId())||skinId.equalsIgnoreCase(themeListBean.getId()))){
                                                            map.putBoolean("isDownload",true );
                                                        }else{
                                                            map.putBoolean("isDownload", false);
                                                        }
                                                        if(currentThemName!=null&&themeListBean.getId().equals(currentThemName)){
                                                            map.putBoolean("isCurrentThem",true );
                                                        }else{
                                                            map.putBoolean("isCurrentThem",false );
                                                        }
                                                        skinList.pushMap(map);
                                                    }
                                                    promise.resolve(skinList);
                                                } else {
                                                    promise.resolve(null);
                                                }
                                            } catch (Exception e) {
                                                e.printStackTrace();
                                                promise.resolve(null);
                                            }
                                            new Thread(new Runnable() {
                                                @Override
                                                public void run() {
                                                    //保存并解压皮肤
                                                    LogUtil.d(TAG,path+"   "+skinId);
                                                    SkinManager.getInstance()
                                                               .saveSkin(path, skinId);
                                                }
                                            }).start();
                                        }

                                        @Override
                                        public void onDownloading(int progress) {
                                            LogUtil.d(TAG,skinId+"onDownloading   "+progress);
                                        }

                                        @Override
                                        public void onDownloadFailed() {
                                            LogUtil.d(TAG,skinId+"onDownloadFailed   ");
                                            promise.resolve(null);
                                        }
                                    });*/
    }

    @ReactMethod
    public void getAllNetSkin(final Promise promise) {
        /*HashMap map = new HashMap();
        String token = PrivilegeUtil.getInstance(mActivity).getToken();
        if (token == null) {
            promise.resolve(null);
            return;
        }
        map.put("token", token);
        map.put("osType", "AZ");
        map.put("systemType", "AZ");
        try {
            String
                    url =
                    URLEncoder.encode("token=" +
                                      token +
                                      "&systemType=AZ", "UTF-8");
            NetworkImpl.getInstance()
                       .postRequest(Constant.BASE_URL +
                                    "theme/queryAllTheme?"+url,
                                    new LoadCallBack<SkinTask>(SkinManager.getInstance().mContext) {
                                        @Override
                                        public void onSuccess(Call call,
                                                              Response response,
                                                              SkinTask skinTask) {
                                            try {
                                                List<String> skinListName = SkinManager.getInstance().getSkinListName(false, false);
                                                String  currentThemName = SkinManager.getInstance().getCurrentSkinId();
                                                if (skinTask != null &&
                                                    skinTask.getData() != null &&
                                                    skinTask.getData().getThemeList() != null) {
                                                    LogUtil.e(TAG, skinTask.toString());
                                                    WritableArray skinList = new WritableNativeArray();
                                                    mThemeList = skinTask.getData().getThemeList();
                                                    for (SkinTask.DataBean.ThemeListBean themeListBean : mThemeList) {
                                                        WritableMap map = new WritableNativeMap();
                                                        map.putString("id", themeListBean.getId());
                                                        map.putString("name", themeListBean.getName());
                                                        map.putString("packageUrl",
                                                                      themeListBean.getPackageUrl());
                                                        map.putString("showUrl", themeListBean.getShowUrl());
                                                        map.putString("type", themeListBean.getType());
                                                        map.putString("beginDate", themeListBean.getBeginDate());
                                                        map.putString("color", themeListBean.getColor());
                                                        if(skinListName!=null){
                                                            map.putBoolean("isDownload", skinListName.contains(themeListBean.getId()));
                                                        }else{
                                                            map.putBoolean("isDownload", false);
                                                        }
                                                        if(currentThemName!=null&&themeListBean.getId().equals(currentThemName)){
                                                            map.putBoolean("isCurrentThem",true );
                                                        }else{
                                                            map.putBoolean("isCurrentThem",false );
                                                        }
                                                        skinList.pushMap(map);
                                                    }
                                                    promise.resolve(skinList);
                                                } else {
                                                    promise.resolve(null);
                                                }
                                            } catch (Exception e) {
                                                e.printStackTrace();
                                                promise.resolve(null);
                                            }
                                        }

                                        @Override
                                        public void onEror(Call call, int statusCode, Exception e) {
                                            LogUtil.e(TAG, "onEror statusCode:" + statusCode + " ");
                                            promise.resolve(null);
                                        }

                                        @Override
                                        public void onFailure(Call call, IOException e) {
                                            super.onFailure(call, e);
                                            LogUtil.e(TAG, "onFailure statusCode:  ");
                                        }
                                    }, map);
        } catch (Exception e) {
            e.printStackTrace();
            promise.resolve(null);
        }*/
    }
}