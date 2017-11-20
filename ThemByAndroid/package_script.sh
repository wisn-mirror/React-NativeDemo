#!/usr/bin/env bash
mkdir -p android/app/src/main/assets
curl -k "http://localhost:8081/index.android.bundle" >android/app/src/main/assets/index.android.bundle
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest
cd android && ./gradlew assembleRelease

