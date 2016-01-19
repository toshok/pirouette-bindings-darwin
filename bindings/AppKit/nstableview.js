// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSControl } from 'nscontrol';
import { NSTableViewDataSource } from 'nstableviewdatasource';
import { NSTableViewDelegate } from 'nstableviewdelegate';

export let NSTableView = NSControl.extendClass("NSTableView", () => ({
    // Creating the Displayed Views
    makeViewWithIdentifier: instanceSelector("makeViewWithIdentifier:owner:"),
    rowViewAtRow: instanceSelector("rowViewAtRow:makeIfNecessary:"),
    viewAt: instanceSelector("viewAtColumn:row:makeIfNecessary:"),

    // Setting the Data Source
    dataSource: autoboxProperty(NSTableViewDataSource),

    // Loading Data
    reloadData: instanceSelector("reloadData"),
    reloadDataFor: instanceSelector("reloadDataForRowIndexes:columnIndexes:"),

    // Using Views for Row and Column Content
    beginUpdates: instanceSelector("beginUpdates"),
    endUpdates: instanceSelector("endUpdates"),
    columnForView: instanceSelector("columnForView:"),
    moveRowAt: instanceSelector("moveRowAtIndex:toIndex:"),
    insertRowsAt: instanceSelector("insertRowsAtIndexes:withAnimation:"),
    removeRowsAt: instanceSelector("removeRowsAtIndexes:withAnimation:"),
    rowForView: instanceSelector("rowForView:"),

    // View-based Table Nib Registration
    registerNib: instanceSelector("registerNib:forIdentifier:"),
    registeredNibsByIdentifier: instanceSelector("registeredNibsByIdentifier"),

    // Target-action Behavior
    doubleAction: instanceSelector(),
    clickedColumn: instanceProperty({ set: null }),
    clickedRow: instanceProperty({ set: null }),

    // Configuring Behavior
    allowsColumnReordering: instanceSelector(),
    allowsColumnResizing: instanceSelector(),
    allowsEmptySelection: instanceSelector(),
    allowsColumnSelection: instanceSelector(),

    // Setting Display Attributes
    intercellSpacing: instanceSelector(),
    rowHeight: instanceSelector(),
    backgroundColor: instanceSelector(),
    usesAlternatingRowBackgroundColors: instanceSelector(),
    selectionHighlightStyle: instanceSelector(),
    gridColor: instanceSelector(),
    gridStyleMask: instanceSelector(),

    indicatorImage: instanceSelector("indicatorImageInTableColumn:"),
    setIndicatorImage: instanceSelector("setIndicatorImage:inTableColumn:"),

    // Getting and Setting Row Size Styles
    effectiveRowSizeStyle: instanceSelector("effectiveRowSizeStyle"),
    rowSizeStyle: instanceSelector(),

    // Column Management
    addTableColumn: instanceSelector("addTableColumn:"),
    removeTableColumn: instanceSelector("removeTableColumn:"),
    moveColumn: instanceSelector("moveColumn:toColumn:"),
    tableColumns: instanceProperty({ set: null }),
    columnWithIdentifier: instanceSelector("columnWithIdentifier:"),
    tableColumnWithIdentifier: instanceSelector("tableColumnWithIdentifier:"),

    // Selecting Columns and Rows
    selectedColumn: instanceProperty({ set: null }),
    selectedColumnIndexes: instanceProperty({ set: null }),
    numberOfSelectedColumns: instanceProperty({ set: null }),
    selectedRow: instanceProperty({ set: null }),
    selectedRowIndexes: instanceProperty({ set: null }),
    numberOfSelectedRows: instanceProperty({ set: null }),
    selectColumnIndexes: instanceSelector("selectColumnIndexes:byExtendingSelection:"),
    deselectColumn: instanceSelector("deselectColumn:"),
    isColumnSelected: instanceSelector("isColumnSelected:"),
    selectRowIndexes: instanceSelector("selectRowIndexes:byExtendingSelection:"),
    deselectRow: instanceSelector("deselectRow:"),
    isRowSelected: instanceSelector("isRowSelected:"),
    selectAll: instanceSelector("selectAll:"),
    deselectAll: instanceSelector("deselectAll:"),

    // Enumerating Table Rows
    enumerateAvailableRowViewsUsingBlock: instanceSelector("enumerateAvailableRowViewsUsingBlock:"),

    // Managing Type Select
    allowsTypeSelect: instanceSelector("allowsTypeSelect"),
    setAllowsTypeSelect: instanceSelector("setAllowsTypeSelect:"),

    // Getting and Setting Column Focus
    focusedColumn: instanceSelector("focusedColumn"),
    setFocusedColumn: instanceSelector("setFocusedColumn:"),
    shouldFocusCell: instanceSelector("shouldFocusCell:atColumn:row:"),

    // Table Dimensions
    numberOfColumns: instanceSelector("numberOfColumns"),
    numberOfRows: instanceSelector("numberOfRows"),

    // Displaying Cell
    preparedCell: instanceSelector("preparedCellAtColumn:row:"),

    // Getting and Setting Floating Rows
    floatsGroupRows: instanceSelector("floatsGroupRows"),
    setFloatsGroupRows: instanceSelector("setFloatsGroupRows:"),

    // Editing Cells
    editColumn: instanceSelector("editColumn:row:withEvent:select:"),
    editedColumn: instanceSelector("editedColumn"),
    editedRow: instanceSelector("editedRow"),
    performClickOnCell: instanceSelector("performClickOnCellAtColumn:row:"),

    // Setting Auxiliary Views
    headerView: instanceSelector(),
    cornerView: instanceSelector(),

    // Layout Support
    rectOfColumn: instanceSelector("rectOfColumn:"),
    rectOfRow: instanceSelector("rectOfRow:"),
    rowsInRect: instanceSelector("rowsInRect:"),
    columnIndexesInRect: instanceSelector("columnIndexesInRect:"),
    columnAtPoint: instanceSelector("columnAtPoint:"),
    rowAtPoint: instanceSelector("rowAtPoint:"),
    frameOfCell: instanceSelector("frameOfCellAtColumn:row:"),
    columnAutoresizingStyle: instanceSelector(),
    sizeLastColumnToFit: instanceSelector("sizeLastColumnToFit"),
    noteNumberOfRowsChanged: instanceSelector("noteNumberOfRowsChanged"),
    tile: instanceSelector("tile"),
    sizeToFit: instanceSelector("sizeToFit"),
    noteHeightOfRowsWithIndexesChanged: instanceSelector("noteHeightOfRowsWithIndexesChanged:"),
    columnsInRect: instanceSelector("columnsInRect:"), // Deprecated in OS X v10.5

    // Drawing
    drawRow: instanceSelector("drawRow:clipRect:"),
    drawGrid: instanceSelector("drawGridInClipRect:"),
    highlightSelection: instanceSelector("highlightSelectionInClipRect:"),
    drawBackground: instanceSelector("drawBackgroundInClipRect:"),

    // Scrolling
    scrollRowToVisible: instanceSelector("scrollRowToVisible:"),
    scrollColumnToVisible: instanceSelector("scrollColumnToVisible:"),

    // Table Column State Persistence
    autosaveName: instanceSelector(),
    autosaveTableColumns: instanceSelector(),

    // Setting the Delegate
    delegate: autoboxProperty(NSTableViewDelegate),

    // Highlightable Column Headers
    highlightedTableColumn: instanceSelector(),

    // Dragging
    dragImageForRows: instanceSelector("dragImageForRowsWithIndexes:tableColumns:event:offset:"),
    canDragRows: instanceSelector("canDragRowsWithIndexes:atPoint:"),
    setDraggingSourceOperationMask: instanceSelector("setDraggingSourceOperationMask:forLocal:"),
    verticalMotionCanBeginDrag: instanceSelector(),
    draggingDestinationFeedbackStyle: instanceSelector(),
    setDropRow: instanceSelector("setDropRow:dropOperation:"),

    // Sorting
    sortDescriptors: instanceSelector(),

    // Text Delegate Methods
    textShouldBeginEditing: instanceSelector("textShouldBeginEditing:"),
    textDidBeginEditing: instanceSelector("textDidBeginEditing:"),
    textDidChange: instanceSelector("textDidChange:"),
    textShouldEndEditing: instanceSelector("textShouldEndEditing:"),
    textDidEndEditing: instanceSelector("textDidEndEditing:"),

    // Deprecated Methods
    drawsGrid: instanceSelector("drawsGrid"), // Deprecated in OS X v10.3
    selectColumn: instanceSelector("selectColumn:byExtendingSelection:"), // Deprecated in OS X v10.3
    selectedColumnEnumerator: instanceSelector("selectedColumnEnumerator"), // Deprecated in OS X v10.3
    selectedRowEnumerator: instanceSelector("selectedRowEnumerator"), // Deprecated in OS X v10.3
    selectRow: instanceSelector("selectRow:byExtendingSelection:"), // Deprecated in OS X v10.3
    setDrawsGrid: instanceSelector("setDrawsGrid:"), // Deprecated in OS X v10.3
    autoresizesAllColumnsToFit: instanceSelector("autoresizesAllColumnsToFit"), // Deprecated in OS X v10.4
    dragImage: instanceSelector("dragImageForRows:event:dragImageOffset:"), // Deprecated in OS X v10.4
    setAutoresizesAllColumnsToFit: instanceSelector("setAutoresizesAllColumnsToFit:"), // Deprecated in OS X v10.4
    writeRows: instanceSelector("tableView:writeRows:toPasteboard:")  // delegate method Deprecated in OS X v10.4
}));

NSTableView.newWithFrame = function(frame) {
  return NSTableView.newWith({ initWith: "Frame", args: [frame] });
};
