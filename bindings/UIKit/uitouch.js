// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log "UITouch"
export let UITouch = NSObject.extendClass ("UITouch", () => ({

    // Getting the Location of Touches
    locationInView:         instanceSelector("locationInView:"),
    previousLocationInView: instanceSelector("previousLocationInView:"),
    view: instanceProperty(),
    window: instanceProperty(),

    // Getting Touch Attributes
    tapCount: instanceProperty(),
    timestamp: instanceProperty(),
    phase: instanceProperty(),

    // Getting a Touch Object’s Gesture Recognizers
    gestureRecognizers: instanceProperty()

}));
