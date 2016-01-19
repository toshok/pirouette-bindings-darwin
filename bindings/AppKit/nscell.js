// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticProperty } from '../objc';
import { NSObject } from '../foundation';

export let NSCell = NSObject.extendClass("NSCell", () => ({
    // Initializing a Cell
    //
    initImageCell: instanceSelector("initImageCell:"),
    initTextCell:  instanceSelector("initTextCell:"),

    // Managing Cell Values
    //
    objectValue:         instanceProperty(),
    hasValidObjectValue: instanceSelector(),
    intValue:            instanceProperty(),
    integerValue:        instanceProperty(),
    stringValue:         instanceProperty(),
    doubleValue:         instanceProperty(),
    floatValue:          instanceProperty(),

    // Managing Cell Attributes
    //
    setCellAttribute: instanceSelector("setCellAttribute:to:"),
    cellAttribute:    instanceSelector("cellAttribute:"),
    type:             instanceProperty(),
    isEnabled:        instanceProperty({ set: "setEnabled" }),
    allowsUndo:       instanceProperty(),

    // Managing Display Attributes
    //
    isBezeled:               instanceProperty({ set: "setBezeled" }),
    isBordered:              instanceProperty({ set: "setBordered" }),
    isOpaque:                instanceProperty({ set: null }),
    controlTint:             instanceProperty(),
    backgroundStyle:         instanceProperty(),
    interiorBackgroundStyle: instanceProperty({ set: null }),

    // Managing Cell State
    //
    allowsMixedState: instanceProperty(),
    nextState:        instanceProperty(),
    state:            instanceProperty(),

    // Modifying Textual Attributes
    //
    isEditable:                  instanceProperty({ set: "setEditable" }),
    isSelectable:                instanceProperty({ set: "setSelectable" }),
    isScrollable:                instanceProperty({ set: "setScrollable" }),
    alignment:                   instanceProperty(),
    font:                        instanceProperty(),
    lineBreakMode:               instanceProperty(),
    truncatesLastVisibleLine:    instanceProperty(),
    wraps:                       instanceProperty(),
    baseWritingDirection:        instanceProperty(),
    attributedStringValue:       instanceProperty(),
    allowsEditingTextAttributes: instanceProperty(),
    importsGraphics:             instanceProperty(),
    setUpFieldEditorAttributes:  instanceSelector("setUpFieldEditorAttributes:"),
    title:                       instanceProperty(),

    // Managing the Target and Action
    //
    action:       instanceProperty(),
    target:       instanceProperty(),
    isContinuous: instanceProperty({ set: "setContinuous" }),
    sendActionOn: instanceSelector("sendActionOn:"),

    // Managing the Image
    //
    image: instanceProperty(),

    // Managing the Tag
    //
    tag: instanceProperty(),

    // Formatting and Validating Data
    //
    formatter: instanceProperty(),

    // Managing Menus
    //
    defaultMenu:  staticProperty({ set: null }),
    menu:         instanceProperty(),
    menuForEvent: instanceSelector("menuForEvent:inRect:ofView:"),

    // Comparing Cells
    //
    compare: instanceSelector("compare:"),

    // Respond to Keyboard Events
    //
    acceptsFirstResponder: instanceSelector(),
    showsFirstResponder:   instanceProperty(),
    refusesFirstResponder: instanceProperty(),
    performClick:          instanceSelector("performClick:"),

    // Deriving Values
    //
    takeObjectValueFrom:  instanceSelector("takeObjectValueFrom:"),
    takeIntegerValueFrom: instanceSelector("takeIntegerValueFrom:"),
    takeIntValueFrom:     instanceSelector("takeIntValueFrom:"),
    takeStringValueFrom:  instanceSelector("takeStringValueFrom:"),
    takeDoubleValueFrom:  instanceSelector("takeDoubleValueFrom:"),
    takeFloatValueFrom:   instanceSelector("takeFloatValueFrom:"),

    // Representing an Object
    //
    representedObject: instanceProperty(),

    // Tracking the Mouse
    //
    trackMouse:                  instanceSelector("trackMouse:inRect:ofView:untilMouseUp:"),
    startTracking:               instanceSelector("startTrackingAt:inView:"),
    continueTracking:            instanceSelector("continueTracking:at:inView:"),
    stopTracking:                instanceSelector("stopTracking:at:inView:mouseIsUp:"),
    mouseDownFlags:              instanceProperty({ set: null }),
    prefersTrackingUntilMouseUp: staticProperty({ set: null }),
    getPeriodicDelay:            instanceSelector("getPeriodicDelay:interval:"),

    // Hit Testing
    //
    hitTest: instanceSelector("hitTestForEvent:inRect:ofView:"),

    // Managing the Cursor
    //
    resetCursorRect: instanceSelector("resetCursorRect:inView:"),

    // Handling Keyboard Alternatives
    //
    keyEquivalent: instanceSelector(),

    // Dragging Cells
    //
    draggingImageComponents: instanceSelector("draggingImageComponentsWithFrame:inView:"),

    // Managing Focus Rings
    //
    drawFocusRingMask:    instanceSelector("drawFocusRingMaskWithFrame:inView:"),
    focusRingMaskBounds:  instanceSelector("focusRingMaskBoundsForFrame:inView:"),
    defaultFocusRingType: staticProperty({ set: null }),
    focusRingType:        instanceProperty(),

    // Determining Cell Size
    //
    calcDrawInfo:         instanceSelector("calcDrawInfo:"),
    cellSize:             instanceProperty({ set: null }),
    cellSizeForBounds:    instanceSelector("cellSizeForBounds:"),
    drawingRectForBounds: instanceSelector("drawingRectForBounds:"),
    imageRectForBounds:   instanceSelector("imageRectForBounds:"),
    titleRectForBounds:   instanceSelector("titleRectForBounds:"),
    controlSize:          instanceProperty(),

    // Drawing and Highlighting
    //
    draw:           instanceSelector("drawWithFrame:inView:"),
    highlightColor: instanceSelector("highlightColorWithFrame:inView:"),
    drawInterior:   instanceSelector("drawInteriorWithFrame:inView:"),
    controlView:    instanceProperty(),
    highlight:      instanceSelector("highlight:withFrame:inView:"),
    isHighlighted:  instanceProperty({ set: "setHighlighted" }),

    // Editing and Selecting Text
    //
    edit:                           instanceSelector("editWithFrame:inView:editor:delegate:event:"),
    select:                         instanceSelector("selectWithFrame:inView:editor:delegate:start:length:"),
    sendsActionOnEndEditing:        instanceProperty(),
    endEditing:                     instanceSelector("endEditing:"),
    wantsNotificationForMarkedText: instanceProperty({ set: null }),
    fieldEditorForView:             instanceSelector("fieldEditorForView:"),
    usesSingleLineMode:             instanceProperty(),

    // Managing Expansion Frames
    //
    expansionFrame:         instanceSelector("expansionFrameWithFrame:inView:"),
    drawWithExpansionFrame: instanceSelector("drawWithExpansionFrame:inView:"),

    // User Interface Layout Direction
    //
    userInterfaceLayoutDirection: instanceProperty()
}));

NSCell.newImageCell = function(anImage) {
    return new NSCell().initImageCell(anImage);
};
NSCell.newTextCell = function(aString) {
    return new NSCell().initTextCell(aString);
};
