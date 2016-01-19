// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSControl, NSControlProxy } from 'nscontrol';

export let NSButton = NSControl.extendClass("NSButton", () => ({

    // Configuring Buttons
    //
    buttonType:               instanceProperty({ get: null }),
    getPeriodicDelay:         instanceSelector("getPeriodicDelay:interval:"),
    setPeriodicDelay:         instanceSelector("setPeriodicDelay:interval:"),
    alternateTitle:           instanceProperty(),
    attributedTitle:          instanceProperty(),
    attributedAlternateTitle: instanceProperty(),
    title:                    instanceProperty(),
    sound:                    instanceProperty(),
    setTitleWithMnemonic:     instanceSelector("setTitleWithMnemonic:"), // Deprecated in OS X v10.8

    // Configuring Button Images
    //
    image:                           instanceProperty(),
    alternateImage:                  instanceProperty(),
    imagePosition:                   instanceProperty(),
    isBordered:                      instanceProperty({ set: "setBordered:" }),
    isTransparent:                   instanceProperty({ set: "setTransparent:" }),
    bezelStyle:                      instanceProperty(),
    showsBorderOnlyWhileMouseInside: instanceProperty(),

    // Managing Button State
    //
    allowsMixedState: instanceProperty(),
    state:            instanceProperty(),
    setNextState:     instanceSelector(),
    highlight:        instanceSelector("highlight:"),

    // Accessing Key Equivalents
    //
    keyEquivalent:             instanceProperty(),
    keyEquivalentModifierMask: instanceProperty(),

    // Handling Keyboard Events
    performKeyEquivalent: instanceSelector("performKeyEquivalent:"),
    
    clicked: instanceProperty({
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
      get: null // this should really be an actual getter that returns the callback...
    })
}));

NSButton.newWithFrame = function (frame) {
  return NSButton.newWith({ initWith: "Frame", args: [frame] });
};
