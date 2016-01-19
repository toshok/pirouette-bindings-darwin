// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, staticSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

export let NSAlert = NSObject.extendClass("NSAlert", () => ({
    init:                 instanceSelector("init"),
    alertWithError:       staticSelector("alertWithError:"),
    alertWithMessageText: staticSelector("alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:"),

    // Configuring Alerts
    //
    layout:        instanceSelector("layout"),
    alertStyle:    instanceProperty(),
    accessoryView: instanceProperty(),
    showsHelp:     instanceProperty(),
    helpAnchor:    instanceProperty(),
    delegate:      instanceProperty(),

    // Displaying Alerts
    //
    runModal:                    instanceSelector("runModal"),
    beginSheetModalWithHandler:  instanceSelector("beginSheetModalForWindow:completionHandler:"),
    beginSheetModalWithDelegate: instanceSelector("beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:"), // deprecated, use beginSheelModalWithHandler instead
    suppressionButton:           instanceProperty({ set: null }), // read-only
    showsSuppressionButton:      instanceProperty(),

    // Accessing Alert Text
    //
    informativeText: instanceProperty(),
    messageText:     instanceProperty(),

    // Accesing Alert Icons
    //
    icon: instanceProperty(),

    // Accessing Alert Buttons
    //
    buttons:            instanceProperty({ set: null }), // read-only
    addButtonWithTitle: instanceSelector("addButtonWithTitle:"),

    // Getting Alert Panels
    window: instanceProperty({ set: null}) // read-only

}));
