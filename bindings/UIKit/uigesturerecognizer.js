// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { UIGestureRecognizerDelegate } from 'uigesturerecognizerdelegate';

//console.log("UIGestureRecognizer");
export let UIGestureRecognizer = NSObject.extendClass ("UIGestureRecognizer", () => ({

    // Initializing a Gesture Recognizer
    initWithTarget: instanceSelector("initWithTarget:action:"),

    // Adding and Removing Targets and Actions
    addTarget:             instanceSelector("addTarget:action:"),
    removeTarget:          instanceSelector("removeTarget:action:"),

    // Getting the Touches and Location of a Gesture
    locationInView:        instanceSelector("locationInView:"),
    locationOfTouchInView: instanceSelector("locationOfTouch:inView:"),
    numberOfTouches:       instanceSelector("numberOfTouches"),

    // Getting the Recognizer’s State and View
    state: instanceProperty(),
    view: instanceProperty(),
    enabled: instanceProperty(),

    // Canceling and Delaying Touches
    cancelsTouchesInView: instanceProperty(),
    delaysTouchesBegan: instanceProperty(),
    delaysTouchesEnded: instanceProperty(),

    // Specifying Dependencies Between Gesture Recognizers
    requireGestureRecognizerToFail: instanceSelector("requireGestureRecognizerToFail:"),

    // Setting and Getting the Delegate
    delegate: autoboxProperty(UIGestureRecognizerDelegate),

    // Methods For Subclasses

    // The UIGestureRecognizerSubclass.h header file contains a extension
    // class extension that declares methods intended to be called or
    // overridden only by subclasses of UIGestureRecognizer. Clients that
    // merely use concrete subclasses of UIGestureRecognizer must never
    // call these methods (except for those noted).

    touchesBegan:                      instanceSelector("touchesBegan:withEvent:"),
    touchesMoved:                      instanceSelector("touchesMoved:withEvent:"),
    touchesEnded:                      instanceSelector("touchesEnded:withEvent:"),
    touchesCancelled:                  instanceSelector("touchesCancelled:withEvent:"),
    reset:                             instanceSelector("reset"),
    ignoreTouch:                       instanceSelector("ignoreTouch:forEvent:"),
    canBePreventedByGestureRecognizer: instanceSelector("canBePreventedByGestureRecognizer:"),
    canPreventGestureRecognizer:       instanceSelector("canPreventGestureRecognizer:")

}));
