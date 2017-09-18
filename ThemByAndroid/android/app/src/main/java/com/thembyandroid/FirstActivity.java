package com.thembyandroid;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.thembyandroid.them.RadioButtonViewPagerNavigatorActivity;

public class FirstActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);
        startActivity(new Intent(this,RadioButtonViewPagerNavigatorActivity.class));
    }
}
