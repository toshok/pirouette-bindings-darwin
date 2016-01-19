// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector, staticProperty } from '../objc';
import { NSObject } from '../foundation';

export let NSAnimationContext = NSObject.extendClass("NSAnimationContext", () => ({
    // Grouping Transactions
    beginGrouping: instanceSelector("beginGrouping"),
    endGrouping:   instanceSelector("endGrouping"),

    // Getting the Current Animation Context
    //
    currentContext: staticProperty({set: null}), // read-only

    // Animation Completion Handlers
    //
    completionHandler: instanceProperty(),
    runAnimationGroup: staticSelector("runAnimationGroup:completionHandler:"),

    // Modifying the Animation Duration
    //
    duration:       instanceProperty(),
    timingFunction: instanceProperty(),

    // Implicit Animation
    //
    allowsImplicitAnimation: instanceProperty({set: null})
}));
