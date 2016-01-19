// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { chainCtor, instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CADisplayLink = NSObject.extendClass("CADisplayLink", () => ({
    constructor: function (handle) {
      if (!handle) throw "use CADisplayLink.displayLink instead of new CADisplayLink";

      chainCtor (CADisplayLink, this, arguments);
    },

    // Creating Instances
    displayLink: staticSelector("displayLinkWithTarget:selector:"),

    // Scheduling the Display Link to Send Notifications
    addToRunLoop: instanceSelector("addToRunLoop:forMode:"),
    removeFromRunLoop: instanceSelector("removeFromRunLoop:forMode:"),
    invalidate: instanceSelector("invalidate"),

    // Configuring the Display Link
    duration: instanceProperty(),
    frameInterval: instanceProperty(),
    paused: instanceProperty(),
    timestamp: instanceProperty()

}));
