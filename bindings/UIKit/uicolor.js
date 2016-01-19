// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, staticProperty, instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIColor");
export let UIColor = NSObject.extendClass ("UIColor", () => ({

    // Creating a UIColor Object from Component Values
    colorWithWhite:          staticSelector("colorWithWhite:alpha:"),
    colorWithHSBA:           staticSelector("colorWithHue:saturation:brightness:alpha:"),
    colorWithRGBA:           staticSelector("colorWithRed:green:blue:alpha:"),
    colorWithCGColor:        staticSelector("colorWithCGColor:"),
    colorWithPatternImage:   staticSelector("colorWithPatternImage:"),
    colorWithCIColor:        staticSelector("colorWithCIColor:"),
    colorWithAlphaComponent: staticSelector("colorWithAlphaComponent:"),

    // Initializing a UIColor Object
    initWithWhite:            instanceSelector("initWithWhite:alpha:"),
    initWithHSBA:             instanceSelector("initWithHue:saturation:brightness:alpha:"),
    initWithRGBA:             instanceSelector("initWithRed:green:blue:alpha:"),
    initWithCGColor:          instanceSelector("initWithCGColor:"),
    initWithPatternImage:     instanceSelector("initWithPatternImage:"),
    initWithCIColor:          instanceSelector("initWithCIColor:"),

    // Creating a UIColor with Preset Component Values
    blackColor:           staticProperty({ set : null }), // readonly
    darkGrayColor:        staticProperty({ set : null }), // readonly
    lightGrayColor:       staticProperty({ set : null }), // readonly
    whiteColor:           staticProperty({ set : null }), // readonly
    grayColor:            staticProperty({ set : null }), // readonly
    redColor:             staticProperty({ set : null }), // readonly
    greenColor:           staticProperty({ set : null }), // readonly
    blueColor:            staticProperty({ set : null }), // readonly
    cyanColor:            staticProperty({ set : null }), // readonly
    yellowColor:          staticProperty({ set : null }), // readonly
    magentaColor:         staticProperty({ set : null }), // readonly
    orangeColor:          staticProperty({ set : null }), // readonly
    purpleColor:          staticProperty({ set : null }), // readonly
    brownColor:           staticProperty({ set : null }), // readonly
    clearColor:           staticProperty({ set : null }), // readonly

    // System Colors
    lightTextColor:                    staticProperty({ set : null }), // readonly
    darkTextColor:                     staticProperty({ set : null }), // readonly
    groupTableViewBackgroundColor:     staticProperty({ set : null }), // readonly
    viewFlipsideBackgroundColor:       staticProperty({ set : null }), // readonly
    scrollViewTexturedBackgroundColor: staticProperty({ set : null }), // readonly
    underPageBackgroundColor:          staticProperty({ set : null }), // readonly

    // Retrieving Color Information
    CGColor:         instanceProperty(),
    CIColor:         instanceProperty(),
    getHSBA:         instanceSelector("getHue:saturation:brightness:alpha:"),
    getRGBA:         instanceSelector("getRed:green:blue:alpha:"),
    getWhite:        instanceSelector("getWhite:alpha:"),

    // Drawing Operations
    set:                      instanceSelector("set"),
    setFill:                  instanceSelector("setFill"),
    setStroke:                instanceSelector("setStroke")

}));
