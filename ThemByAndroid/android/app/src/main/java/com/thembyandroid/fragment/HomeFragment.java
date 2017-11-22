package com.thembyandroid.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.thembyandroid.R;
import com.thembyandroid.base.BaseLazyFragment;

/**
 * Created by wisn on 2017/9/11.
 */

public class HomeFragment extends BaseLazyFragment {

    @Override
    public String getFragment() {
        return "HomeFragment";
    }

    @Override
    public View onCreateLazyView(LayoutInflater inflater,
                                 @Nullable ViewGroup container,
                                 @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_content, container, false);
        Bundle bundle = this.getArguments();
//        String tag = bundle.getString("TAG");
        TextView textView = (TextView) view.findViewById(R.id.fragment_textView);
        textView.setText("HomeFragment原生");
        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getActivity(),"dddd",Toast.LENGTH_SHORT).show();
            }
        });
        return view;
    }


    @Override
    public void firstVisible() {
        super.firstVisible();
        Log.e(TAG, "firstVisible ");
    }

    @Override
    public void onFragmentVisibleChange(boolean isVisible) {
        super.onFragmentVisibleChange(isVisible);
        Log.e(TAG,"onFragmentVisibleChange isVisible:"+isVisible);
    }
}
