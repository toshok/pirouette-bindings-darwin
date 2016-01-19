// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CAMediaTimingFunction = NSObject.extendClass("CAMediaTimingFunction", () => ({

    // Creating Timing Functions
    functionWithName: staticSelector("functionWithName:"),
    functionWithControlPoints: staticSelector("functionWithControlPoints::::"),
    initWithControlPoints: instanceSelector("initWithControlPoints::::"),

    // Accessing the Control Points
    getControlPointAtIndex: instanceSelector("getControlPointAtIndex:values:")

}));
