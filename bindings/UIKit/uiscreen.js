// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIScreen");
export let UIScreen = NSObject.extendClass ("UIScreen", () => ({

    // Getting the Available Screens
    mainScreen:   staticProperty({ set: null }), // readonly class property
    screens:   staticProperty({ set: null }), // readonly class property
    mirroredScreen: instanceProperty(),

    // Getting the Bounds Information
    bounds: instanceProperty(),
    applicationFrame: instanceProperty(),
    scale: instanceProperty(),

    // Accessing the Screen Modes
    preferredMode: instanceProperty(),
    availableModes: instanceProperty(),
    currentMode: instanceProperty(),

    // Getting a Display Link
    displayLink: instanceSelector("displayLinkWithTarget:selector:"),

    // Setting a Display’s Brightness
    brightness: instanceProperty(),
    wantsSoftwareDimming: instanceProperty(),

    // Setting a Display’s Overscan Compensation.
    overscanCompensation: instanceProperty()

}));
