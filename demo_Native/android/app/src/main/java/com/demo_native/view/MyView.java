package com.demo_native.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;

import com.demo_native.DensityUtils;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by wisn on 2017/8/26.
 */

public class MyView extends View {

    public void setColor(Integer color) {
        mPaint.setColor(color);
        invalidate();
    }

    public void setText(String text) {
        mText = text;
        invalidate();
    }

    public void setTextSize(Integer textSize){
        mTextSize=  DensityUtils.dip2px(mContext1,textSize);
        mPaint.setTextSize(mTextSize);
        invalidate();
    }


    private String mText = "textSize";
    private float mTextSize = 100;
    private int mTextColor = Color.BLACK;
    private Paint mPaint;
    private Rect mRect;
    private Context mContext1;


    public MyView(Context context) {
        super(context);
        init(context);
    }

    public MyView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }
    private void init(Context context) {
        mContext1 = context;
        mPaint = new Paint();
        mPaint.setTextSize(mTextSize);
        mPaint.setColor(mTextColor);
        mRect = new Rect();
        mPaint.getTextBounds(mText, 0, mText.length(), mRect);
    }

    @Override
    protected void onDraw(Canvas canvas) {
//        super.onDraw(canvas);
        canvas.drawText(mText,
                        getWidth() / 2 - mRect.width() / 2,
                        getHeight() / 2 + mRect.height() / 2,
                        mPaint);

    }


}
