// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log("UITapGestureRecognizer");
export let UITapGestureRecognizer = UIGestureRecognizer.extendClass ("UITapGestureRecognizer", () => ({

    // Configuring the Gesture
    numberOfTapsRequired: instanceProperty(),
    numberOfTouchesRequired: instanceProperty()

}));
