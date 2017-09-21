package com.thembyandroid.fragment;

import com.thembyandroid.base.BaseReactFragment;


/**
 * Created by wisn on 2017/9/11.
 */

public class GiftFragment extends BaseReactFragment {

    /*@Override
    public String getFragment() {
        return "GiftFragment";
    }*/


   /* @Override
    public View onCreateLazyView(LayoutInflater inflater,
                                 @Nullable ViewGroup container,
                                 @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_content, container, false);
        Bundle bundle = this.getArguments();
//        String tag = bundle.getString("TAG");
        TextView textView = (TextView) view.findViewById(R.id.fragment_textView);
        textView.setText("GiftFragment");
        return view;
    }*/

    @Override
    protected String getMainPageName() {
        return "ThemByAndroid";
    }

    /*@Override
    public void firstVisible() {
        super.firstVisible();
        Log.e(TAG, "firstVisible ");
    }

    @Override
    public void onFragmentVisibleChange(boolean isVisible) {
        super.onFragmentVisibleChange(isVisible);
        Log.e(TAG,"onFragmentVisibleChange isVisible:"+isVisible);
    }*/
}
