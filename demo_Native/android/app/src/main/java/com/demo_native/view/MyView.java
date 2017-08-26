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

/**
 * Created by wisn on 2017/8/26.
 */

public class MyView extends View {
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

    //    public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr, int defStyleRes) {
//        super(context, attrs, defStyleAttr, defStyleRes);
//    }
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

    /**
     * 设置圆的背景色
     *
     * @param color
     */
    public void setColor(Integer color) {
        mPaint.setColor(color); // 设置画笔颜色
        invalidate();   // 更新画板
    }

    /**
     * 设置圆的背景色
     *
     * @param text
     */
    public void setText(String text) {
        mText = text;
        invalidate();
    }

    public void setTextSize(Integer textSize){
        mTextSize=  DensityUtils.dip2px(mContext1,textSize);
        mPaint.setTextSize(mTextSize);
//        textSize;
        invalidate();
    }
}
