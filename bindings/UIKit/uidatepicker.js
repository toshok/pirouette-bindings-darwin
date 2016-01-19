// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol';

//console.log("UIDatePicker");
export let UIDatePicker = UIControl.extendClass ("UIDatePicker", () => ({

    // Managing the Date and Calendar
    calendar:  instanceProperty(),
    date:      instanceProperty(),
    setDate:   instanceSelector("setDate:animated:"),
    timeZone:  instanceProperty(),
    locale:    instanceProperty(), // Deprecated in iOS 5.0

    // Configuring the Date Picker Mode
    datePickerMode:  instanceProperty(),

    // Configuring Temporal Attributes
    maximumDate:  instanceProperty(),
    minimumDate:  instanceProperty(),
    minuteInterval:  instanceProperty(),
    countDownDuration:  instanceProperty()

}));
