// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIGestureRecognizer } from 'uigesturerecognizer';

//console.log "UISwipeGestureRecognizer"
export let UISwipeGestureRecognizer = UIGestureRecognizer.extendClass ("UISwipeGestureRecognizer", () => ({

    // Configuring the Gesture
    direction: instanceProperty(),
    numberOfTouchesRequired: instanceProperty()

}));
