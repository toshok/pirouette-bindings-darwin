// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log("UIPinchGestureRecognizer");
export let UIPinchGestureRecognizer = UIGestureRecognizer.extendClass ("UIPinchGestureRecognizer", () => ({

    // Interpreting the Pinching Gesture
    scale: instanceProperty(),
    velocity: instanceProperty()

}));
