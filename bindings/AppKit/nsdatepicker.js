// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSControl, NSControlProxy } from 'nscontrol';

export let NSDatePicker = NSControl.extendClass("NSDatePicker", () => ({

    // Configuring date pickers
    bezeled: instanceProperty({ get: 'isBezeled' }),
    bordered: instanceProperty({ get: 'isBordered' }),
    color: instanceProperty(),
    drawsBackground: instanceProperty(),
    textColor: instanceProperty(),
    datePickerStyle: instanceProperty(),
    datePickerElements: instanceProperty(),

    // Controlling date picker range and mode
    //calendar: instanceProperty(),
    //locale: instanceProperty(),
    datePickerMode: instanceProperty(),
    //timeZone: instanceProperty(),

    // Accessing object values
    //dateValue: instanceProperty(),
    timeInterval: instanceProperty(),

    // Constraining the displayable/selectable range
    //minDate: instanceProperty(),
    //maxDate: instanceProperty(),
}));

NSDatePicker.newWithFrame = function (frame) {
  return NSDatePicker.newWith({ initWith: "Frame", args: [frame] });
};

