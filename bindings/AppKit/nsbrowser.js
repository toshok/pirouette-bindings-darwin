import { instanceProperty, autoboxProperty, staticProperty, instanceSelector, staticSelector } from '../objc';
import { NSControl } from 'nscontrol';
import { NSObject } from '../foundation';

export let NSBrowser = NSControl.extendClass("NSBrowser", () => ({

    // Configuring Browsers
    //
    reusesColumns:                instanceProperty(),
    maxVisibleColumns:            instanceProperty(),
    autohidesScroller:            instanceProperty(),
    backgroundColor:              instanceProperty(),
    minColumnWidth:               instanceProperty(),
    separatesColumns:             instanceProperty(),
    takesTitleFromPreviousColumn: instanceProperty(),
    tile:                         instanceProperty({ set: null }),
    delegate:                     autoboxProperty(NSObject /* XXX should be NSBrowserDelegate*/),
    acceptsArrowKeys:             instanceProperty(),

    // Getting Browser Information
    //
    isOpaque: instanceProperty({ set: null }),

    // Managing Component Types
    //
    cellClass:     staticProperty(),
    cellPrototype: instanceProperty(),
    matrixClass:   instanceProperty(),

    // Managing Selection Behavior
    //
    allowsBranchSelection:      instanceProperty(),
    allowsEmptySelection:       instanceProperty(),
    allowsMultipleSelection:    instanceProperty(),
    selectedRowIndexesInColumn: instanceSelector("selectedRowIndexesInColumn:"),
    selectRowIndexesInColumn:   instanceSelector("selectRowIndexes:inColumn:"),
    allowsTypeSelect:           instanceProperty(),

    // Managing Selection
    //
    selectedCell:         instanceProperty({ set: null }),
    selectedCellInColumn: instanceSelector("selectedCellInColumn:"),
    selectedCells:        instanceProperty({ set: null }),
    selectAll:            instanceSelector("selectAll:"),
    selectedRowInColumn:  instanceSelector("selectedRowInColumn:"),
    selectRowInColumn:    instanceSelector("selectRow:inColumn:"),
    selectionIndexPath:   instanceProperty(),
    selectionIndexPaths:  instanceProperty(),

    // Accessing Components
    //
    loadedCellAtRowColumn:  instanceSelector("loadedCellAtRow:column:"),
    matrixInColumn:         instanceSelector("matrixInColumn:"),
    editItemAtIndexPath:    instanceSelector("editItemAtIndexPath:withEvent:select:"),
    itemAtIndexPath:        instanceSelector("itemAtIndexPath:"),
    itemAtRowColumn:        instanceSelector("itemAtRow:inColumn:"),
    indexPathForColumn:     instanceSelector("indexPathForColumn:"),
    isLeafItem:             instanceSelector("isLeafItem:"),
    parentForItemsInColumn: instanceSelector("parentForItemsInColumn:"),

    // Managing the Path
    //
    path:          instanceProperty(),
    pathToColumn:  instanceSelector("pathToColumn:"),
    pathSeparator: instanceProperty(),

    // Managing Columns
    //
    addColumn:              instanceSelector(),
    columnOfMatrix:         instanceSelector("columnOfMatrix:"),
    selectedColumn:         instanceProperty({ set: null }),
    lastColumn:             instanceProperty(),
    firstVisibleColumn:     instanceProperty({ set: null }),
    numberOfVisibleColumns: instanceProperty({ set: null }),
    lastVisibleColumn:      instanceProperty({ set: null }),
    validateVisibleColumns: instanceSelector(),
    isLoaded:               instanceProperty({ set: null }),
    loadColumnZero:         instanceSelector(),
    reloadColumn:           instanceSelector("reloadColumn:"),

    // Accessing Column Titles
    //
    titleOfColumn:      instanceSelector("titleOfColumn:"),
    setTitleOfColumn:   instanceSelector("setTitle:ofColumn:"),
    isTitled:           instanceProperty({ set: "setTitled:" }),
    drawTitleOfColumn:  instanceSelector("drawTitleOfColumn:inRect:"),
    titleHeight:        instanceSelector(),
    titleFrameOfColumn: instanceSelector("titleFrameOfColumn:"),

    // Updating Browsers
    //
    noteHeightOfRowsWithIndexesChanged: instanceSelector("noteHeightOfRowsWithIndexesChanged:inColumn:"),
    reloadData:                         instanceSelector("reloadDataForRowIndexes:inColumn:"),

    // Scrolling
    //
    hasHorizontalScroller: instanceProperty(),
    scrollColumnToVisible: instanceSelector("scrollColumnToVisible:"),
    scrollColumnsLeftBy:   instanceSelector("scrollColumnsLeftBy:"),
    scrollColumnsRightBy:  instanceSelector("scrollColumnsRightBy:"),
    scrollRowToVisible:    instanceSelector("scrollRowToVisible:inColumn:"),

    // Dragging
    //
    draggingSourceOperationMask:              instanceSelector("draggingSourceOperationMaskForLocal:"),
    setDraggingSourceOperationMask:           instanceSelector("setDraggingSourceOperationMask:forLocal:"),
    canDragRows:                              instanceSelector("canDragRowsWithIndexes:inColumn:withEvent:"),
    draggingImageForRows:                     instanceSelector("draggingImageForRowsWithIndexes:inColumn:withEvent:offset:"),
    namesOfPromisedFilesDroppedAtDestination: instanceSelector("namesOfPromisedFilesDroppedAtDestination:"),

    // Getting Column Frames
    //
    frameOfColumn:         instanceSelector("frameOfColumn:"),
    frameOfInsideOfColumn: instanceSelector("frameOfInsideOfColumn:"),

    // Getting Row Frames
    //
    frameOfRowInColumn: instanceSelector("frameOfRow:inColumn:"),
    getRowAndColumn:    instanceSelector("getRow:column:forPoint:"),

    // Managing Actions
    //
    doubleAction:           instanceProperty(),
    sendsActionOnArrowKeys: instanceProperty(),
    sendAction:             instanceSelector(),

    // Handling Mouse-Click Events
    //
    doClick:       instanceSelector("doClick:"),
    doDoubleClick: instanceSelector("doDoubleClick:"),
    clickedColumn: instanceProperty({ set: null }),
    clickedRow:    instanceProperty({ set: null }),

    // Sizing
    //
    removeSavedColumnsWithAutosaveName: staticSelector("removeSavedColumnsWithAutosaveName:"),
    columnsAutosaveName:                instanceProperty(),
    columnContentWidthForColumnWidth:   instanceSelector("columnContentWidthForColumnWidth:"),
    columnWidthForColumnContentWidth:   instanceSelector("columnWidthForColumnContentWidth:"),
    columnResizingType:                 instanceProperty(),
    prefersAllColumnUserResizing:       instanceProperty(),
    widthOfColumn:                      instanceSelector("widthOfColumn:"),
    setWidthOfColumn:                   instanceSelector("setWidth:ofColumn:"),
    defaultColumnWidth:                 instanceProperty(),
    rowHeight:                          instanceProperty()
}));
