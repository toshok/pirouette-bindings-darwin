// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let NSColorList = NSObject.extendClass("NSColorList", () => ({

    // Initializing an NSColorList Object
    //
    initWithName:         instanceSelector("initWithName:"),
    initWithNameFromFile: instanceSelector("initWithName:fromFile:"),

    // Getting Color Lists
    //
    availableColorLists: staticSelector(),
    colorListNamed:      staticSelector("colorListNamed:"),

    // Getting Color List Properties
    //
    name:       instanceProperty({ set: null }),
    isEditable: instanceProperty({ set: null }),

    // Managing Colors By Key
    //
    allKeys:      instanceProperty({ set: null }),
    colorWithKey: instanceSelector("colorWithKey:"),
    insertColor:  instanceSelector("insertColor:key:atIndex:"),
    removeColor:  instanceSelector("removeColorWithKey:"),
    setColor:     instanceSelector("setColor:forKey:"),

    // Writing and Removing Color-List Files
    //
    removeFile:  instanceSelector(),
    writeToFile: instanceSelector("writeToFile:")
}));
