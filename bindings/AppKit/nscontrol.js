// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, sig, chainCtor } from '../objc';
import { NSView } from 'nsview';
import { NSObject } from '../foundation';

export let NSControl = NSView.extendClass("NSControl", () => ({
    // Initializing an NSControl
    initWithFrame: instanceSelector("initWithFrame:"),

    // Setting the Control’s Cell
    cellClass: instanceProperty(),
    cell: instanceProperty(),

    // Enabling and Disabling the Control
    enabled: instanceProperty({ get: "isEnabled" }),

    // Identifying the Selected Cell
    selectedCell: instanceSelector("selectedCell"),
    selectedTag: instanceSelector("selectedTag"),

    // Setting the Control’s Value
    doubleValue: instanceProperty(),
    floatValue: instanceProperty(),
    intValue: instanceProperty(),
    integerValue: instanceProperty(),
    objectValue: instanceProperty(),
    stringValue: instanceProperty(),
    attributedStringValue: instanceProperty(),
    setNeedsDisplay: instanceSelector("setNeedsDisplay"),

    // Interacting with Other Controls
    takeDoubleValueFrom: instanceSelector("takeDoubleValueFrom:"),
    takeFloatValueFrom: instanceSelector("takeFloatValueFrom:"),
    takeIntValueFrom: instanceSelector("takeIntValueFrom:"),
    takeIntegerValueFrom: instanceSelector("takeIntegerValueFrom:"),
    takeObjectValueFrom: instanceSelector("takeObjectValueFrom:"),
    takeStringValueFrom: instanceSelector("takeStringValueFrom:"),

    // Formatting Text
    alignment: instanceProperty(),
    font: instanceProperty(),
    formatter: instanceProperty(),
    baseWritingDirection: instanceProperty(),
    setFloatingPointFormat: instanceSelector("setFloatingPointFormat:left:right:"), // Deprecated in Mac OS X v10.0

    // Managing the Field Editor
    abortEditing: instanceSelector("abortEditing"),
    currentEditor: instanceSelector("currentEditor"),
    validateEditing: instanceSelector("validateEditing"),

    // Resizing the Control
    calcSize: instanceSelector("calcSize"),
    sizeToFit: instanceSelector("sizeToFit"),

    // Displaying a Cell
    selectCell: instanceSelector("selectCell:"),
    drawCell: instanceSelector("drawCell:"),
    drawCellInside: instanceSelector("drawCellInside:"),
    updateCell: instanceSelector("updateCell:"),
    updateCellInside: instanceSelector("updateCellInside:"),

    // Implementing the Target/action Mechanism
    action: instanceProperty(),
    target: instanceProperty(),
    continuous: instanceProperty({ get: "isContinuous" }),
    sendActionTo: instanceSelector("sendAction:to:"),
    sendActionOn: instanceSelector("sendActionOn:"),

    // Getting and Setting Tags
    tag: instanceProperty(),

    // Activating from the Keyboard
    performClick: instanceSelector("performClick:"),
    refusesFirstResponder: instanceSelector("refusesFirstResponder"),
    setRefusesFirstResponder: instanceSelector("setRefusesFirstResponder:"),

    // Tracking the Mouse
    mouseDown: instanceSelector("mouseDown:"),
    ignoresMultiClick: instanceProperty(),

    // Control Editing Notifications
    controlTextDidBeginEditing: instanceSelector("controlTextDidBeginEditing:"),  // delegate method
    controlTextDidChange: instanceSelector("controlTextDidChange:"),  // delegate method
    controlTextDidEndEditing: instanceSelector("controlTextDidEndEditing:"),  // delegate method

    // Supporting Constraint-Based Layout
    invalidateIntrinsicContentSizeForCell: instanceSelector("invalidateIntrinsicContentSizeForCell:")

}));

export let NSControlProxy = NSObject.extendClass("NSControlProxy", () => ({
    constructor: function(fn) {
      chainCtor (NSControlProxy, this, []);
      this.fn = fn;
    },

    proxyAction: instanceSelector("action").
                               returns( function() { return sig.Void; }).
                                params( function() { return [NSObject]; }).
                                  impl( function() { return this.fn(); })

}));
