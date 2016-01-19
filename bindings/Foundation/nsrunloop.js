// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticProperty, instanceProperty, instanceSelector, sig } from '../objc';
import { NSObject } from 'nsobject';

export let NSRunLoop = NSObject.extendClass("NSRunLoop", () => ({

    // Accessing Run Loops and Modes
    currentRunLoop: staticProperty ({ set: null }),
    currentMode: instanceProperty ({ set: null }),
    limitDate: instanceSelector("limitDateForMode:").
                             returns( function() { return sig.Void; }).
			      params( function() { return [ sig.NSString ]; }),
    mainRunLoop: staticProperty ({ set: null }),
    getCFRunLoop: instanceSelector("getCFRunLoop"),

    // Managing Timers
    addTimer: instanceSelector("addTimer:forMode:"),

    // Managing Ports
    addPort: instanceSelector("addPort:forMode:"),
    removePort: instanceSelector("removePort:forMode:"),

    // Running a Loop
    run: instanceSelector("run"),
    runMode: instanceSelector("runMode:beforeDate:"),
    runUntilDate: instanceSelector("runUntilDate:"),
    acceptInputForMode: instanceSelector("acceptInputForMode:beforeDate:"),

    // Scheduling and Canceling Messages
    performSelector: instanceSelector("performSelector:target:argument:order:modes:"),
    cancelPerformSelector: instanceSelector("cancelPerformSelector:target:argument:"),
    cancelPerformSelectors: instanceSelector("cancelPerformSelectorsWithTarget:")

}));
console.log ("<NSRunLoop");
