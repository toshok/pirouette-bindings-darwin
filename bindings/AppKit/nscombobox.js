// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { NSTextField } from 'nstextfield';

export let NSComboBox = NSTextField.extendClass("NSComboBox", () => ({

    // Setting display attributes
    hasVerticalScroller: instanceProperty(),
    intercellSpacing: instanceProperty(),
    itemHeight: instanceProperty(),
    numberOfVisibleItems: instanceProperty(),
    buttonBordered: instanceProperty({ get: "isButtonBordered", set: "setButtonBordered" }),

    // Working with an internal list
    //addItemsWithObjectValues: instanceSelector("addItemsWithObjectValues:"),
    addItemWithObjectValue: instanceSelector("addItemWithObjectValue:"),
    insertItemWithObjectValue: instanceSelector("insertItemWithObjectValue:atIndex:"),
    //objectValues: instanceProperty({ set: null }),
    removeAllItems: instanceSelector(),
    removeItemAtIndex: instanceSelector("removeItemAtIndex:"),
    removeItemWithObjectValue: instanceSelector("removeItemWithObjectValue:"),
    numberOfItems: instanceProperty({ set: null }),

    // Manipulating the displayed list
    indexOfItemWithObjectValue: instanceSelector("indexOfItemWithObjectValue:"),
    itemObjectValueAtIndex: instanceSelector("itemObjectValueAtIndex:"),
    noteNumberOfItemsChanged: instanceSelector(),
    reloadData: instanceSelector(),
    scrollItemAtIndexToTop: instanceSelector("scrollItemAtIndexToTop:"),
    scrollItemAtIndexToVisible: instanceSelector("scrollItemAtIndexToVisible:"),

    // Manipulating the selection
    deselectItemAtIndex: instanceSelector("deselectItemAtIndex:"),
    indexOfSelectedItem: instanceProperty({ set: null }),
    objectValueOfSelectedItem: instanceProperty({ set: null }),
    selectItemAtIndex: instanceSelector("selectItemAtIndex:"),
    selectItemWithObjectValue: instanceSelector("selectItemWithObjectValue:"),

    // Completing the textfield
    completes: instanceProperty(),

}));

NSComboBox.newWithFrame = function(frame) {
    return NSComboBox.newWith({ initWith: "Frame", args: [frame] });
};

