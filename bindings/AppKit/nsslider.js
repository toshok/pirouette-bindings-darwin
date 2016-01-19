// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSControl, NSControlProxy } from 'nscontrol';

export let NSSlider = NSControl.extendClass("NSSlider", () => ({

    // Configuring the slider's appearance
    //
    altIncrementValue: instanceProperty(),
    knobThickness: instanceProperty({ set: null }),

    // Configuring the value limits
    //
    maxValue: instanceProperty(),
    minValue: instanceProperty(),

    // Handling mouse down events
    acceptsFirstMouse: instanceSelector(),

    // Managing tick marks
    allowsTickMarkValuesOnly: instanceProperty(),
    closestTickMarkValueToValue: instanceSelector(),
    indexOfTickMarkAtPoint: instanceSelector(),
    numberOfTickMarks: instanceProperty(),
    rectOfTickMarkAtIndex: instanceSelector(),
    tickMarkPosition: instanceProperty(),
    tickMarkValueAtIndex: instanceSelector(),

    valueChanged: instanceProperty({
      set: function (v) {
        if (v) {
          this.proxy = new NSControlProxy(v);
          this.target = this.proxy;
          this.action = this.proxy.proxyAction;
        }
        else {
          this.proxy = null;
          this.target = null;
          this.action = null;
        }
      },
      get: null // TODO
    })

}));

NSSlider.newWithFrame = function(frame) {
    return NSSlider.newWith({  initWith: "Frame", args: [frame] });
};

