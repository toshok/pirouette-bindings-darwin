// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod, sig } from '../objc';
import { Protocol, NSObject } from '../foundation';

//console.log("UITableViewDelegate");
export let UITableViewDelegate = Protocol.extendClass("UITableViewDelegate", () => ({

    // Configuring Rows for the Table View
    heightForRowAtIndexPath:  optionalMethod("tableView:heightForRowAtIndexPath:"),
    indentationLevelForRow:   optionalMethod("tableView:indentationLevelForRowAtIndexPath:"),
    willDisplayCellForRow:    optionalMethod("tableView:willDisplayCell:forRowAtIndexPath:"),

    // Managing Accessory Views
    accessoryButtonTappedForRow:    optionalMethod("tableView:accessoryButtonTappedForRowWithIndexPath:"),
    accessoryTypeForRow:            optionalMethod("tableView:accessoryTypeForRowWithIndexPath:"), // Deprecated in iOS 3.0

    // Managing Selections
    willSelectRow:    optionalMethod("tableView:willSelectRowAtIndexPath:", { sig: "@@:@@" }),
    didSelectRow:     optionalMethod("tableView:didSelectRowAtIndexPath:"/*, { sig: "v@:@@" }*/).
					returns (function() { return sig.Void; }).
					params (function() { return [ NSObject, NSObject ]; }),
    willDeselectRow:  optionalMethod("tableView:willDeselectRowAtIndexPath:", { sig: "@@:@@" }),
    didDeselectRow:   optionalMethod("tableView:didDeselectRowAtIndexPath:", { sig: "v@:@@" }),

    // Modifying the Header and Footer of Sections
    viewForHeader:    optionalMethod("tableView:viewForHeaderInSection:"),
    viewForFooter:    optionalMethod("tableView:viewForFooterInSection:"),
    heightForHeader:  optionalMethod("tableView:heightForHeaderInSection:"),
    heightForFooter:  optionalMethod("tableView:heightForFooterInSection:"),

    // Editing Table Rows
    willBeginEditingRow:                    optionalMethod("tableView:willBeginEditingRowAtIndexPath:"),
    didEndEditingRow:                       optionalMethod("tableView:didEndEditingRowAtIndexPath:"),
    editingStyleForRow:                     optionalMethod("tableView:editingStyleForRowAtIndexPath:"),
    titleForDeleteConfirmationButtonForRow: optionalMethod("tableView:titleForDeleteConfirmationButtonForRowAtIndexPath:"),
    shouldIndentWhileEditingRow:            optionalMethod("tableView:shouldIndentWhileEditingRowAtIndexPath:"),

    // Reordering Table Rows
    targetIndexPathForMoveFromRow:     optionalMethod("tableView:targetIndexPathForMoveFromRowAtIndexPath:toProposedIndexPath:"),

    // Copying and Pasting Row Content
    shouldShowMenuForRow:              optionalMethod("tableView:shouldShowMenuForRowAtIndexPath:"),
    canPerformActionForRow:            optionalMethod("tableView:canPerformAction:forRowAtIndexPath:withSender:"),
    performActionForRow:               optionalMethod("tableView:performAction:forRowAtIndexPath:withSender:")

}));
