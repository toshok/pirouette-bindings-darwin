// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { CAAnimationDelegate } from 'caanimationdelegate';

export let CAAnimation = NSObject.extendClass("CAAnimation", () => ({

    // Archiving Properties
    shouldArchiveValueForKey: instanceSelector("shouldArchiveValueForKey:"),

    // Providing Default Values for Properties
    defaultValueForKey: staticSelector("defaultValueForKey:"),

    // Creating an Animation
    animation: staticSelector("animation"),

    // Animation Attributes
    removedOnCompletion: instanceProperty(),
    isRemovedOnCompletion: instanceSelector("isRemovedOnCompletion"),
    timingFunction: instanceProperty(),

    // Getting and Setting the Delegate
    delegate: autoboxProperty(CAAnimationDelegate)

}));
