#!/usr/bin/env bash
sudo  chmod -R 777 node_modules
touch app/src/main/assets/index.android.bundle
touch app/src/main/assets/index.android.map
sudo  chmod -R 777 app/src/main/assets/index.android.bundle
sudo  chmod -R 777 app/src/main/assets/index.android.map
#sudo react-native bundle —platform android —dev false —entry-file index.android.js —bundle-output ./app/src/main/assets/index.android.bundle —sourcemap-output ./app/src/main/assets/index.android.map —assets-dest app/src/main/res/
React-native bundle --entry-file index.android.js --bundle-output ./app/src/main/assets/index.android.js bundle --platform android --assets-dest ./app/src/main/res/ --dev false
