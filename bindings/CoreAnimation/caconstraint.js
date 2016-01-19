// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CAConstraint = NSObject.extendClass("CAConstraint", () => ({

    // Create a New Constraint
    constraintWithAttributeAndScaleAndOffset: staticSelector("constraintWithAttribute:relativeTo:attribute:scale:offset:"),
    constraintWithAttributeAndOffset:         staticSelector("constraintWithAttribute:relativeTo:attribute:offset:"),
    constraintWithAttribute:                  staticSelector("constraintWithAttribute:relativeTo:attribute:"),
    init:                                     instanceSelector("initWithAttribute:relativeTo:attribute:scale:offset:"),

    // Accessing Constraint Values
    attribute:       instanceProperty(),
    offset:          instanceProperty(),
    scale:           instanceProperty(),
    sourceAttribute: instanceProperty(),
    sourceName:      instanceProperty()

}));
