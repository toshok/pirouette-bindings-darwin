// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIControl } from 'uicontrol';

//console.log("UIStepper");
export let UIStepper = UIControl.extendClass ("UIStepper", () => ({

    // Configuring the Stepper
    continuous:   instanceProperty(),
    autorepeat:   instanceProperty(),
    wraps:        instanceProperty(),
    minimumValue: instanceProperty(),
    maximumValue: instanceProperty(),
    stepValue:    instanceProperty(),

    // Accessing the Stepper’s Value
    value:        instanceProperty()

}));
