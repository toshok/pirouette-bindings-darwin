// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIFont");
export let UIFont = NSObject.extendClass ("UIFont", () => ({

    // Creating Arbitrary Fonts
    fontWithName: staticSelector("fontWithName:size:"),
    fontWithSize:  instanceSelector("fontWithSize:"),

    // Creating System Fonts
    systemFontOfSize:       staticSelector("systemFontOfSize:"),
    boldSystemFontOfSize:   staticSelector("boldSystemFontOfSize:"),
    italicSystemFontOfSize: staticSelector("italicSystemFontOfSize:"),

    // Getting the Available Font Names
    familyNames:            instanceSelector("familyNames"),
    fontNamesForFamilyName: instanceSelector("fontNamesForFamilyName:"),

    // Getting Font Name Attributes
    familyName: instanceProperty(),
    fontName: instanceProperty(),

    // Getting Font Metrics
    pointSize: instanceProperty(),
    ascender: instanceProperty(),
    descender: instanceProperty(),
    capHeight: instanceProperty(),
    xHeight: instanceProperty(),
    lineHeight: instanceProperty(),
    leading: instanceProperty(), // Deprecated in iOS 4.0

    // Getting System Font Information
    labelFontSize:       staticSelector("labelFontSize"),
    buttonFontSize:      staticSelector("buttonFontSize"),
    smallSystemFontSize: staticSelector("smallSystemFontSize"),
    systemFontSize:      staticSelector("systemFontSize")

}));
