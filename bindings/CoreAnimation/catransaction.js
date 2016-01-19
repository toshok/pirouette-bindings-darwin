// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CATransaction = NSObject.extendClass("CATransaction", () => ({

    // Creating and Committing Transactions
    begin: staticSelector("begin"),
    commit: staticSelector("commit"),
    flush: staticSelector("flush"),

    // Overriding Animation Duration and Timing
    animationDuration: staticProperty(),
    animationTimingFunction: staticProperty(),

    // Temporarily Disabling Property Animations
    disableAction: staticProperty(),

    // Getting and Setting Completion Block Objects
    completionBlock: staticProperty(),

    // Managing Concurrency
    lock: staticSelector("lock"),
    unlock: staticSelector("unlock"),

    // Getting and Setting Transaction Properties
    setValue: staticSelector("setValue:forKey:"),
    valueForKey: staticSelector("valueForKey:")

}));
