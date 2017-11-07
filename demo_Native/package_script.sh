#!/usr/bin/env bash
mkdir -p android/app/src/main/assets
curl -k "http://localhost:8081/index.android.bundle" >android/app/src/main/assets/index.android.bundle
React-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.jsbundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
cd android && ./gradlew assembleRelease
# react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output ./app/src/main/assets/index.android.bundle --assets-dest ./app/src/main/res/