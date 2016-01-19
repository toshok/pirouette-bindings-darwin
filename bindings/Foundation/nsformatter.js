// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector } from '../objc';
import { NSObject } from 'nsobject';

export let NSFormatter = NSObject.extendClass("NSFormatter", {

    // Textual representation of cell content
    stringForObjectValue: instanceSelector("stringForObjectValue:"),
    attributedStringForObjectValue: instanceSelector("attributedStringForObjectValue:withDefaultAttributes:"),
    editingStringForObjectValue: instanceSelector("editingStringForObjectValue:"),

    // Object equivalent to textual representation
    //getObjectValue: instanceSelector("getObjectValue:"),
    

    // Dynamic cell editing
    //isPartialStringValid: instanceSelector("isPartialStringValid:newEditingString:errorDescription:"),
    //isPartialStringValidForRange: instanceSelector("isPartialStringValid:proposedSelectedRange:originalString:originalSelectedRange:errorDescription:"),
});

