// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIGestureRecognizerDelegate");
export let UIGestureRecognizerDelegate = Protocol.extendClass("UIGestureRecognizerDelegate", () => ({

    // Regulating Gesture Recognition
    shouldBegin:        optionalMethod("gestureRecognizerShouldBegin:"),
    shouldReceiveTouch: optionalMethod("gestureRecognizer:shouldReceiveTouch:"),

    // Controlling Simultaneous Gesture Recognition
    shouldRecognizeSimultaneouslyWithGestureRecognizer: optionalMethod("gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:")

}));
