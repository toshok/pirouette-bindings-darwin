// This file is part of Pirouette.  for licensing information, see the LICENSE file
import { staticSelector, staticProperty, instanceSelector, instanceProperty } from "../objc";
import { NSObject } from '../foundation';

export let NSColor = NSObject.extendClass("NSColor", () => ({
    // Creating an NSColor Object from Component Values
    //
    colorWithCalibratedHSBA:      staticSelector("colorWithCalibratedHue:saturation:brightness:alpha:"),
    colorWithCalibratedRGBA:      staticSelector("colorWithCalibratedRed:green:blue:alpha:"),
    colorWithCalibratedWhite:     staticSelector("colorWithCalibratedWhite:alpha:"),
    colorWithName:                staticSelector("colorWithCatalogName:colorName:"),
    colorWithDeviceCMYKA:         staticSelector("colorWithDeviceCyan:magenta:yellow:black:alpha:"),
    colorWithDeviceHSBA:          staticSelector("colorWithDeviceHue:saturation:brightness:alpha:"),
    colorWithDeviceRGBA:          staticSelector("colorWithDeviceRed:green:blue:alpha:"),
    colorWithDeviceWhite:         staticSelector("colorWithDeviceWhite:alpha:"),
    colorWithCIColor:             staticSelector("colorWithCIColor:"),
    colorWithColorSpace:          staticSelector("colorWithColorSpace:components:count:"),
    colorWithSRGBA:               staticSelector("colorWithSRGBRed:green:blue:alpha:"),
    colorWithGenericGamma22White: staticSelector("colorWithGenericGamma22White:alpha:"),
    colorWithHSBA:                staticSelector("colorWithHue:saturation:brightness:alpha:"),
    colorWithRGBA:                staticSelector("colorWithRed:green:blue:alpha:"),
    colorWithWhite:               staticSelector("colorWithWhite:alpha:"),

    // Creating an NSColor with Preset Components
    //
    blackColor:     staticProperty({ set: null }),
    blueColor:      staticProperty({ set: null }),
    brownColor:     staticProperty({ set: null }),
    clearColor:     staticProperty({ set: null }),
    cyanColor:      staticProperty({ set: null }),
    darkGrayColor:  staticProperty({ set: null }),
    grayColor:      staticProperty({ set: null }),
    greenColor:     staticProperty({ set: null }),
    lightGrayColor: staticProperty({ set: null }),
    magentaColor:   staticProperty({ set: null }),
    orangeColor:    staticProperty({ set: null }),
    purpleColor:    staticProperty({ set: null }),
    redColor:       staticProperty({ set: null }),
    whiteColor:     staticProperty({ set: null }),
    yellowColor:    staticProperty({ set: null }),

    // Working with Pattern Images
    //
    colorWithPatternImage: staticSelector("colorWithPatternImage:"),
    patternImage: instanceProperty({ set: null }),

    // Creating a System Color—an NSColor Whose Value Is Specified by User Preferences
    //
    alternateSelectedControlColor:         staticProperty({ set: null }),
    alternateSelectedControlTextColor:     staticProperty({ set: null }),
    colorForControlTint:                   staticSelector("colorForControlTint:"),
    controlBackgroundColor:                staticProperty({ set: null }),
    controlColor:                          staticProperty({ set: null }),
    controlAlternatingRowBackgroundColors: staticProperty({ set: null }),
    controlHighlightColor:                 staticProperty({ set: null }),
    controlLightHighlightColor:            staticProperty({ set: null }),
    controlShadowColor:                    staticProperty({ set: null }),
    controlDarkShadowColor:                staticProperty({ set: null }),
    controlTextColor:                      staticProperty({ set: null }),
    currentControlTint:                    staticProperty({ set: null }),
    disabledControlTextColor:              staticProperty({ set: null }),
    gridColor:                             staticProperty({ set: null }),
    headerColor:                           staticProperty({ set: null }),
    headerTextColor:                       staticProperty({ set: null }),
    highlightColor:                        staticProperty({ set: null }),
    keyboardFocusIndicatorColor:           staticProperty({ set: null }),
    knobColor:                             staticProperty({ set: null }),
    scrollBarColor:                        staticProperty({ set: null }),
    secondarySelectedControlColor:         staticProperty({ set: null }),
    selectedControlColor:                  staticProperty({ set: null }),
    selectedControlTextColor:              staticProperty({ set: null }),
    selectedMenuItemColor:                 staticProperty({ set: null }),
    selectedMenuItemTextColor:             staticProperty({ set: null }),
    selectedTextBackgroundColor:           staticProperty({ set: null }),
    selectedTextColor:                     staticProperty({ set: null }),
    selectedKnobColor:                     staticProperty({ set: null }),
    shadowColor:                           staticProperty({ set: null }),
    textBackgroundColor:                   staticProperty({ set: null }),
    textColor:                             staticProperty({ set: null }),
    windowBackgroundColor:                 staticProperty({ set: null }),
    windowFrameColor:                      staticProperty({ set: null }),
    windowFrameTextColor:                  staticProperty({ set: null }),
    underPageBackgroundColor:              staticProperty({ set: null }),

    // Ignoring Alpha Components
    //
    ignoresAlpha: staticProperty(),

    // Copying and Pasting
    //
    colorFromPasteboard: staticSelector("colorFromPasteboard:"),
    writeToPasteboard: instanceSelector("writeToPasteboard:"),

    // Retrieving a Set of Components
    //
    // FIXME these APIs take CGFloat*'s.  we need to figure out a way to wrap them such that they
    // return either an array or populate an array or something.
    //getCyan:magenta:yellow:black:alpha:: instanceSelector()
    //getHue:saturation:brightness:alpha:: instanceSelector()
    //getRed:green:blue:alpha:: instanceSelector()
    //getWhite:alpha:: instanceSelector()
    //getComponents:: instanceSelector()
    //numberOfComponents: instanceSelector()

    // Retrieving Individual Components
    //
    alphaComponent:                instanceProperty({ set: null }),
    blackComponent:                instanceProperty({ set: null }),
    blueComponent:                 instanceProperty({ set: null }),
    brightnessComponent:           instanceProperty({ set: null }),
    catalogNameComponent:          instanceProperty({ set: null }),
    colorNameComponent:            instanceProperty({ set: null }),
    cyanComponent:                 instanceProperty({ set: null }),
    greenComponent:                instanceProperty({ set: null }),
    hueComponent:                  instanceProperty({ set: null }),
    localizedCatalogNameComponent: instanceProperty({ set: null }),
    localizedColorNameComponent:   instanceProperty({ set: null }),
    magentaComponent:              instanceProperty({ set: null }),
    redComponent:                  instanceProperty({ set: null }),
    saturationComponent:           instanceProperty({ set: null }),
    whiteComponent:                instanceProperty({ set: null }),
    yellowComponent:               instanceProperty({ set: null }),

    // Working with the Color Space
    //
    colorSpaceName:                    instanceProperty({ set: null }),
    colorUsingColorSpaceName:          instanceSelector("colorUsingColorSpaceName:"),
    colorUsingColorSpaceNameAndDevice: instanceSelector("colorUsingColorSpaceName:device:"),
    colorSpace:                        instanceProperty({ set: null }),
    colorUsingColorSpace:              instanceSelector("colorUsingColorSpace:"),

    // Changing the Color
    //
    blendedColor:            instanceSelector("blendedColorWithFraction:ofColor:"),
    colorWithAlphaComponent: instanceSelector("colorWithAlphaComponent:"),
    highlightWithLevel:      instanceSelector("highlightWithLevel:"),
    shadowWithLevel:         instanceSelector("shadowWithLevel:"),

    // Converting Colors Between CGColors
    //
    CGColor:          instanceProperty({ set: null }),
    colorWithCGColor: staticSelector("colorWithCGColor:"),

    // Drawing
    //
    drawSwatchInRect: instanceSelector("drawSwatchInRect:"),
    set:              instanceSelector(),
    setFill:          instanceSelector(),
    setStroke:        instanceSelector()

}));
