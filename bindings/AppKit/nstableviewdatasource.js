// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod, sig } from '../objc';
import { Protocol, NSObject } from '../foundation';
import { NSTableColumn } from "nstablecolumn";

export let NSTableViewDataSource = Protocol.extendClass("NSTableViewDataSource", () => ({

    // Getting Values
    numberOfRows: optionalMethod ("numberOfRowsInTableView:").
	returns (function() { return sig.NSInteger; }).
	params (function() { return [ NSObject ]; }),

    objectValueFor: optionalMethod ("tableView:objectValueForTableColumn:row:").
	returns (function() { return NSObject; }).
	params (function() { return [ NSTableColumn, sig.NSInteger ]; }),

    // Setting Values
    setObjectValue: optionalMethod ("tableView:setObjectValue:forTableColumn:row:"),

    // Implementing Pasteboard Support
    pasteboardWriterForRow: optionalMethod ("tableView:pasteboardWriterForRow:"),

    // Drag and Drop
    acceptDrop: optionalMethod ("tableView:acceptDrop:row:dropOperation:"),
    namesOfPromisedFilesDroppedAtDestination: optionalMethod ("tableView:namesOfPromisedFilesDroppedAtDestination:forDraggedRowsWithIndexes:"),
    validateDrop: optionalMethod ("tableView:validateDrop:proposedRow:proposedDropOperation:"),
    writeRows: optionalMethod ("tableView:writeRowsWithIndexes:toPasteboard:"),
    draggingSessionWillBegin: optionalMethod ("tableView:draggingSession:willBeginAtPoint:forRowIndexes:"),
    updateDraggingItems: optionalMethod ("tableView:updateDraggingItemsForDrag:"),
    draggingSessionEnded: optionalMethod ("tableView:draggingSession:endedAtPoint:operation:"),

    // Sorting
    sortDescriptorsChanged: optionalMethod ("tableView:sortDescriptorsDidChange:")

}));
