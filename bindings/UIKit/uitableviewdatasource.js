// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod, requiredMethod, sig } from '../objc';
import { Protocol, NSObject } from '../foundation';

//console.log("UITableViewDataSource");
export let UITableViewDataSource = Protocol.extendClass("UITableViewDataSource", () => ({

    // Configuring a Table View
    cellForRow:                  requiredMethod("tableView:cellForRowAtIndexPath:").
					returns (function() { return NSObject; }).
				        params (function() { return [ NSObject, NSObject ]; }),
    numberOfSections:            optionalMethod("numberOfSectionsInTableView:", { sig: "i@:@" }).
					returns (function() { return sig.Int; }).
					params (function() { return [ NSObject ]; }),
    numberOfRowsInSection:       requiredMethod("tableView:numberOfRowsInSection:", { sig: "i@:@i" }).
					returns (function() { return sig.Int; }).
					params (function() { return [ NSObject, sig.Int ]; }),
    sectionIndexTitles:          optionalMethod("sectionIndexTitlesForTableView:"),
    sectionForSectionIndexTitle: optionalMethod("tableView:sectionForSectionIndexTitle:atIndex:"),
    titleForHeaderInSection:     optionalMethod("tableView:titleForHeaderInSection:", { sig: "@@:@i" }).
					returns (function() { return sig.NSString; }).
					params (function() { return [ NSObject, sig.Int ]; }),
    titleForFooterInSection:     optionalMethod("tableView:titleForFooterInSection:").
					returns (function() { return sig.NSString; }).
					params (function() { return [ NSObject, sig.Int ]; }),

    // Inserting or Deleting Table Rows
    commitEditingStyle:          optionalMethod("tableView:commitEditingStyle:forRowAtIndexPath:"),
    canEditRow:                  optionalMethod("tableView:canEditRowAtIndexPath:"),

    // Reordering Table Rows
    canMoveRow:                  optionalMethod("tableView:canMoveRowAtIndexPath:"),
    moveRow:                     optionalMethod("tableView:moveRowAtIndexPath:toIndexPath:")

}));
