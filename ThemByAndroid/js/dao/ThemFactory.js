/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AsyncStorage,
    StyleSheet,
} from 'react-native';

const key = "theme_key"
export default class ThemFactory {
    getTheme() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (!result) {
                    this.setThem("#fff075");
                    result = "#fff075";
                }
                console.log("getTheme:"+result);
                resolve(ThemDe.createTheme(result));
            })
        });
    }

    setThem(color) {
        AsyncStorage.setItem(key, color, (error => {
            console.log("setItem:"+error);
        }))
    }

}
export  class ThemDe {
    static  createTheme(ThemFlag) {
        return {
            bgcolor: ThemFlag,
            ThemStyles: StyleSheet.create({
                OneOutViewStyle: {
                    backgroundColor: ThemFlag,
                }
            }),
        }
    }
}