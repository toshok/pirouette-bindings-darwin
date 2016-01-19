// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, staticProperty, instanceSelector, instanceProperty } from '../objc';
import { NSPanel } from 'nspanel';

export let NSColorPanel = NSPanel.extendClass("NSColorPanel", () => ({

    // Obtaining the Shared Color-Panel Object
    //
    sharedColorPanel:       staticSelector(),
    sharedColorPanelExists: staticProperty({ set: null }),

    // Configuring the Color Panel
    //
    accessoryView: instanceProperty(),
    isContinuous: instanceProperty({ set: "setContinuous" }),
    mode: instanceProperty(),
    setAction: instanceSelector("setAction:"),
    setTarget: instanceSelector("setTarget:"),
    showsAlpha: instanceProperty(),

    // Managing Color Lists
    //
    attachColorList: instanceSelector("attachColorList:"),
    detachColorList: instanceSelector("detachColorList:"),

    // Setting Color Picker Modes
    //
    setPickerMask: staticSelector("setPickerMask:"),
    setPickerMode: staticSelector("setPickerMode:"),

    // Setting Color
    //
    dragColor: staticSelector("dragColor:withEvent:fromView:"),
    setColor: instanceSelector("setColor:"),

    // Getting Color Information
    //
    alpha: instanceProperty({ set: null }),
    color: instanceProperty({ set: null })

    // Responding to a Color Change
    // FIXME
    //changeColor:: instanceSelector()  delegate method

}));
