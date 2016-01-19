// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UIView } from 'uiview';
import { UIScrollViewDelegate } from 'uiscrollviewdelegate';

export let UIScrollView = UIView.extendClass ("UIScrollView", () => ({

    // Managing the Display of Content
    setContentOffset: instanceSelector("setContentOffset:animated:"),
    contentOffset: instanceProperty({ set: function(v) { return this.setContentOffset (v, false); } }),
    contentSize: instanceProperty(),
    contentInset: instanceProperty(),

    // Managing Scrolling
    scrollRectToVisible:              instanceSelector("scrollRectToVisible:animated:"),
    touchesShouldBegin:               instanceSelector("touchesShouldBegin:withEvent:inContentView:"),
    touchesShouldCancelInContentView: instanceSelector("touchesShouldCancelInContentView:"),
    scrollEnabled: instanceProperty(),
    directionalLockEnabled: instanceProperty(),
    scrollsToTop: instanceProperty(),
    pagingEnabled: instanceProperty(),
    bounces: instanceProperty(),
    alwaysBounceVertical: instanceProperty(),
    alwaysBounceHorizontal: instanceProperty(),
    canCancelContentTouches: instanceProperty(),
    delaysContentTouches: instanceProperty(),
    decelerationRate: instanceProperty(),
    dragging: instanceProperty(),
    tracking: instanceProperty(),
    decelerating: instanceProperty(),

    // Managing the Scroll Indicator
    indicatorStyle: instanceProperty(),
    scrollIndicatorInsets: instanceProperty(),
    showsHorizontalScrollIndicator: instanceProperty(),
    showsVerticalScrollIndicator: instanceProperty(),
    flashScrollIndicators: instanceSelector("flashScrollIndicators"),

    // Zooming and Panning
    zoomToRect:   instanceSelector("zoomToRect:animated:"),
    setZoomScale: instanceSelector("setZoomScale:animated:"),
    panGestureRecognizer: instanceProperty(),
    pinchGestureRecognizer: instanceProperty(),
    zoomScale: instanceProperty({ set: function (v) { return this.setZoomScale(v, false); } }),
    maximumZoomScale: instanceProperty(),
    minimumZoomScale: instanceProperty(),
    zoomBouncing: instanceProperty(),
    zooming: instanceProperty(),
    bouncesZoom: instanceProperty(),

    // Managing the Delegate
    delegate: autoboxProperty(UIScrollViewDelegate)

}));
