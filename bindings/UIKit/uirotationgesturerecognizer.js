// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log("UIRotationGestureRecognizer");
export let UIRotationGestureRecognizer = UIGestureRecognizer.extendClass ("UIRotationGestureRecognizer", () => ({

    // Interpreting the Gesture
    rotation: instanceProperty(),
    velocity: instanceProperty()

}));
