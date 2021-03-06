package com.thembyandroid.adapter;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;


import com.thembyandroid.fragment.FragmentFactory;

import java.util.List;

/**
 * Created by wisn on 2017/9/12.
 */

public class FragmentAdapter extends FragmentPagerAdapter {
    List<String> data=null;
    public FragmentAdapter(FragmentManager fm, List<String> data) {
        super(fm);
        this.data=data;
        FragmentFactory.init();
    }

    @Override
    public Fragment getItem(int position) {
        return FragmentFactory.getFragment(data.get(position));
    }

    @Override
    public int getCount() {
        return data.size();
    }

    @Override
    public CharSequence getPageTitle(int position) {
//        return super.getPageTitle(position);
        return data.get(position);
    }

}
