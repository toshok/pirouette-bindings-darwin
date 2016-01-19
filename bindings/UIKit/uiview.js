// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject, NSRect } from '../foundation';
import { UIResponder } from 'uiresponder';

//console.log("UIView");
export let UIView = UIResponder.extendClass ("UIView", () => ({

    initWithFrame:    instanceSelector("initWithFrame:").
                            returns( function() { return NSObject; /* XXX should be UIView */}).
			     params( function() { return [ NSRect ]; }),

    // Configuring a View’s Visual Appearance
    layerClass:      staticSelector(),
    backgroundColor: instanceProperty(),
    hidden: instanceProperty(),
    alpha: instanceProperty(),
    opaque: instanceProperty(),
    clipsToBounds: instanceProperty(),
    clearsContextBeforeDrawing: instanceProperty(),
    layer: instanceProperty(),

    // Configuring the Event-Related Behavior
    userInteractionEnabled: instanceProperty(),
    multipleTouchEnabled: instanceProperty(),
    exclusiveTouch: instanceProperty(),

    // Configuring the Bounds and Frame Rectangles
    frame: instanceProperty(),
    bounds: instanceProperty(),
    center: instanceProperty(),
    transform: instanceProperty(),

    // Configuring the Resizing Behavior
    sizeThatFits: instanceSelector("sizeThatFits:"),
    sizeToFit:    instanceSelector("sizeToFit"),
    autoresizingMask: instanceProperty(),
    autoresizesSubviews: instanceProperty(),
    contentMode: instanceProperty(),
    contentStretch: instanceProperty(),

    // Managing the View Hierarchy
    addSubview:                               instanceSelector("addSubview:"),
    addSubviews: function (...subviews) {
      for (var i = 0, e = subviews.length; i < e; i ++)
	this.addSubview (subviews[i]);
    },
    bringSubviewToFront:                      instanceSelector("bringSubviewToFront:"),
    sendSubviewToBack:                        instanceSelector("sendSubviewToBack:"),
    removeFromSuperview:                      instanceSelector("removeFromSuperview"),
    insertSubviewAtIndex:                     instanceSelector("insertSubview:atIndex:"),
    insertSubviewAboveSubview:                instanceSelector("insertSubview:aboveSubview:"),
    insertSubviewBelowSubview:                instanceSelector("insertSubview:belowSubview:"),
    exchangeSubviewAtIndexWithSubviewAtIndex: instanceSelector("exchangeSubviewAtIndex:withSubviewAtIndex:"),
    isDescendantOfView:                       instanceSelector("isDescendantOfView:"),
    superview: instanceProperty(),
    subviews: instanceProperty(),
    window: instanceProperty(),

    // Laying out Subviews
    layoutSubviews: instanceSelector("layoutSubviews"),
    setNeedsLayout: instanceSelector("setNeedsLayout"),
    layoutIfNeeded: instanceSelector("layoutIfNeeded"),

    // Drawing and Updating the View
    drawRect:              instanceSelector("drawRect:"),
    setNeedsDisplay:       instanceSelector("setNeedsDisplay"),
    setNeedsDisplayInRect: instanceSelector("setNeedsDisplayInRect:"),
    contentScaleFactor: instanceProperty(),

    // Formatting Printed View Content
    viewPrintFormatter:            instanceSelector("viewPrintFormatter"),
    drawRectForViewPrintFormatter: instanceSelector("drawRect:forViewPrintFormatter:"),

    // Managing Gesture Recognizers
    addGestureRecognizer:    instanceSelector("addGestureRecognizer:"),
    removeGestureRecognizer: instanceSelector("removeGestureRecognizer:"),
    gestureRecognizers: instanceProperty(),

    // Animating Views with Blocks
    animateWithDurationDelayCompletion: instanceSelector("animateWithDuration:delay:options:animations:completion:"),
    animateWithDurationCompletion:      instanceSelector("animateWithDuration:animations:completion:"),
    animateWithDuration:                instanceSelector("animateWithDuration:animations:"),
    transitionWithViewDelayCompletion:  instanceSelector("transitionWithView:duration:options:animations:completion:"),
    transitionFromViewCompletion:       instanceSelector("transitionFromView:toView:duration:options:completion:"),

    // Animating Views
    // Use of the methods in this section is discouraged in iOS 4 and later. Use the block-based animation methods instead.

    beginAnimationsWithContext: instanceSelector("beginAnimations:context:"),
    commitAnimations:                   instanceSelector("commitAnimations"),
    setAnimationStartDate:              instanceSelector("setAnimationStartDate:"),
    setAnimationsEnabled:               instanceSelector("setAnimationsEnabled:"),
    setAnimationDelegate:               instanceSelector("setAnimationDelegate:"),
    setAnimationWillStartSelector:      instanceSelector("setAnimationWillStartSelector:"),
    setAnimationDidStopSelector:        instanceSelector("setAnimationDidStopSelector:"),
    setAnimationDuration:               instanceSelector("setAnimationDuration:"),
    setAnimationDelay:                  instanceSelector("setAnimationDelay:"),
    setAnimationCurve:                  instanceSelector("setAnimationCurve:"),
    setAnimationRepeatCount:            instanceSelector("setAnimationRepeatCount:"),
    setAnimationRepeatAutoreverses:     instanceSelector("setAnimationRepeatAutoreverses:"),
    setAnimationBeginsFromCurrentState: instanceSelector("setAnimationBeginsFromCurrentState:"),
    setAnimationTransitionForView:      instanceSelector("setAnimationTransition:forView:cache:"),
    areAnimationsEnabled:               instanceSelector("areAnimationsEnabled"),

    // Identifying the View at Runtime
    viewWithTag:          instanceSelector("viewWithTag:"),
    tag: instanceProperty(),

    // Converting Between View Coordinate Systems
    convertPointToView:   instanceSelector("convertPoint:toView:"),
    convertPointFromView: instanceSelector("convertPoint:fromView:"),
    convertRectToView:    instanceSelector("convertRect:toView:"),
    convertRectFromView:  instanceSelector("convertRect:fromView:"),

    // Hit Testing in a View
    hitTestWithEvent:     instanceSelector("hitTest:withEvent:"),
    pointInsideWithEvent: instanceSelector("pointInside:withEvent:"),

    // Ending a View Editing Session
    endEditing:           instanceSelector("endEditing:"),

    // Observing View-Related Changes
    didAddSubview:        instanceSelector("didAddSubview:"),
    willRemoveSubview:    instanceSelector("willRemoveSubview:"),
    willMoveToSuperview:  instanceSelector("willMoveToSuperview:"),
    didMoveToSuperview:   instanceSelector("didMoveToSuperview"),
    willMoveToWindow:     instanceSelector("willMoveToWindow:"),
    didMoveToWindow:      instanceSelector("didMoveToWindow")

    // XXX ES6-port
    //@mixinProtocol UIAppearance
}));
