// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log("UIPanGestureRecognizer");
export let UIPanGestureRecognizer = UIGestureRecognizer.extendClass ("UIPanGestureRecognizer", () => ({

    // Configuring the Gesture Recognizer
    maximumNumberOfTouches: instanceProperty(),
    minimumNumberOfTouches: instanceProperty(),

    // Tracking the Location and Velocity of the Gesture
    translationInView:    instanceSelector("translationInView:"),
    setTranslationInView: instanceSelector("setTranslation:inView:"),
    velocityInView:       instanceSelector("velocityInView:")

}));
