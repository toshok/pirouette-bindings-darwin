// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

export let NSTableColumn = NSObject.extendClass("NSTableColumn", () => ({
    // Creating an NSTableColumn
    initWithIdentifier: instanceSelector("initWithIdentifier:"),

    // Setting the NSTableView
    tableView: instanceProperty(),

    // Controlling Size
    width: instanceProperty(),
    minWidth: instanceProperty(),
    maxWidth: instanceProperty(),
    resizingMask: instanceProperty(),
    sizeToFit: instanceSelector("sizeToFit"),

    // Setting Component Cells
    headerCell: instanceProperty(),
    dataCell: instanceProperty(),
    dataCellForRow: instanceSelector("dataCellForRow:"),

    // Setting the Identifier
    identifier: instanceProperty(),

    // Controlling Editability
    editable: instanceProperty({ get: "isEditable" }),

    // Sorting
    sortDescriptorPrototype: instanceProperty(),

    // Setting Column Visibility
    hidden: instanceProperty({ get: "isHidden" }),

    // Setting Tool Tips
    headerToolTip: instanceProperty(),

    // Deprecated Methods
    resizable: instanceProperty({ get: "isResizable" }) // Deprecated in OS X v10.4

}));

NSTableColumn.newWithIdentifier = function(identifier) {
  return NSTableColumn.newWith({ initWith: "Identifier", args: [identifier] });
};
