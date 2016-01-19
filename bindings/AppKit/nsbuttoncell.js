// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSCell } from 'nscell';

export let NSButtonCell = NSCell.extendClass("NSButtonCell", () => ({
    // Setting Titles
    //
    alternateTitle:           instanceProperty(),
    attributedAlternateTitle: instanceProperty(),
    attributedTitle:          instanceProperty(),
    setFont:                  instanceSelector("setFont:"),
    title:                    instanceProperty(),

    // Managing Images
    //
    alternateImage: instanceProperty(),
    imagePosition:  instanceProperty(),
    imageScaling:   instanceProperty(),

    // Managing the Repeat Interval
    //
    getPeriodicDelay: instanceSelector("getPeriodicDelay:interval:"),
    setPeriodicDelay: instanceSelector("setPeriodicDelay:interval:"),

    // Managing the Key Equivalent
    //
    keyEquivalent:             instanceProperty(),
    keyEquivalentFont:         instanceProperty(),
    keyEquivalentModifierMask: instanceProperty(),
    setKeyEquivalentFont:      instanceSelector("setKeyEquivalentFont:size:"),

    // Managing Graphics Attributes
    //
    backgroundColor: instanceProperty(),
    bezelStyle: instanceProperty(),
    gradientType: instanceProperty(),
    imageDimsWhenDisabled: instanceProperty(),
    isOpaque: instanceProperty({ set: null }),
    isTransparent: instanceProperty({ set: "setTransparent:" }),
    showsBorderOnlyWhileMouseInside: instanceProperty(),

    // Displaying the Cell
    //
    highlightsBy: instanceProperty(),
    showsStateBy: instanceProperty(),
    buttonType:   instanceProperty({ get: null }),

    // Managing the Sound
    //
    sound: instanceProperty(),

    // Handling Events and Action Messages
    //
    mouseEntered: instanceSelector("mouseEntered:"),
    mouseExited: instanceSelector("mouseExited:"),
    performClick: instanceSelector("performClick:"),

    // Drawing the Button Content
    //
    drawBezel: instanceSelector("drawBezelWithFrame:inView:"),
    drawImage: instanceSelector("drawImage:withFrame:inView:"),
    drawTitle: instanceSelector("drawTitle:withFrame:inView:")
}));
