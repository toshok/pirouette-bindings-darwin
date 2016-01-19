// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSView } from 'nsview';

export let NSTableRowView = NSView.extendClass("NSTableRowView", () => ({
    // Display Style
    emphasized: instanceProperty({ get: "isEmphasized" }),
    interiorBackgroundStyle: instanceProperty({ set: null }),
    floating: instanceProperty({ get: "isFloating" }),

    // Row Selection
    selected: instanceProperty({ get: "isSelected" }),
    selectionHighlightStyle: instanceProperty(),

    // Drag and Drop
    draggingDestinationFeedbackStyle: instanceProperty(),
    indentationForDropOperation: instanceProperty(),
    targetForDropOperation: instanceProperty({ get: "isTargetForDropOperation" }),

    // Row Grouping
    groupRowStyle: instanceProperty({ get: "isGroupRowStyle" }),
    numberOfColumns: instanceProperty({ set: null }),

    // Overriding Row View Display Characteristics
    backgroundColor: instanceProperty(),
    drawBackground: instanceSelector("drawBackgroundInRect:"),
    drawDraggingDestinationFeedback: instanceSelector("drawDraggingDestinationFeedbackInRect:"),
    drawSelection: instanceSelector("drawSelectionInRect:"),
    drawSeparator: instanceSelector("drawSeparatorInRect:"),

    // Accessing A Row Column View
    viewAtColumn: instanceSelector("viewAtColumn:")

}));
