// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CAValueFunction = NSObject.extendClass("CAValueFunction", () => ({

    // Getting Value Function Properties
    name: instanceProperty(),

    // Creating and Initializing Value Functions
    functionWithName: staticSelector("functionWithName:")

}));
