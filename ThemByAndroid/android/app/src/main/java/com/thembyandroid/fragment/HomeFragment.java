package com.thembyandroid.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.thembyandroid.R;
import com.thembyandroid.view.TipRadioButton;
import com.thembyandroid.view.attr.DrawableTopAttr;
import com.thembyandroid.view.attr.TipBackgroundAttr;
import com.wisn.skinlib.base.SkinFragment;
import com.wisn.skinlib.utils.LogUtils;

/**
 * Created by wisn on 2017/9/11.
 */

public class HomeFragment extends SkinFragment {
    TipRadioButton tipRadioButton;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);
        Bundle bundle = this.getArguments();
//        String tag = bundle.getString("TAG");
        TextView textView = (TextView) view.findViewById(R.id.fragment_textView);
        tipRadioButton = (TipRadioButton) view.findViewById(R.id.radiobutton_bg_home_aa);
        textView.setText("HomeFragment原生");
        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getActivity(), "dddd", Toast.LENGTH_SHORT).show();
            }
        });
        return view;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        TipBackgroundAttr  tipBackgroundAttr=new TipBackgroundAttr();
        tipBackgroundAttr.setRes("tipBackgroundAttr",R.color.colorPrimary);
        dynamicAddView(tipRadioButton,tipBackgroundAttr);
        DrawableTopAttr  drawableTopAttr=new DrawableTopAttr();
        drawableTopAttr.setRes("drawableTopAttr",R.drawable.radiobutton_bg_home);
        dynamicAddView(tipRadioButton,drawableTopAttr);
    }

}
