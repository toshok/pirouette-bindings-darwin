// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIEvent");
export let UIEvent = NSObject.extendClass ("UIEvent", () => ({

    // Getting the Touches for an Event
    allTouches:       instanceSelector("allTouches"),
    touchesForView:   instanceSelector("touchesForView:"),
    touchesForWindow: instanceSelector("touchesForWindow:"),

    // Getting Event Attributes
    timestamp: instanceProperty(),

    // Getting the Event Type
    type: instanceProperty(),
    subtype: instanceProperty(),

    // Getting the Touches for a Gesture Recognizer
    touchesForGestureRecognizer: instanceSelector("touchesForGestureRecognizer:")

}));
