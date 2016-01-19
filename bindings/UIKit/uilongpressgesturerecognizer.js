// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log("UILongPressGestureRecognizer");
export let UILongPressGestureRecognizer = UIGestureRecognizer.extendClass ("UILongPressGestureRecognizer", () => ({

    // Configuring the Gesture Recognizer
    minimumPressDuration: instanceProperty(),
    numberOfTouchesRequired: instanceProperty(),
    numberOfTapsRequired: instanceProperty(),
    allowableMovement: instanceProperty()

}));
