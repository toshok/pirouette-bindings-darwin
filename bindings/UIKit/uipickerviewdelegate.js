// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIPickerViewDelegate");
export let UIPickerViewDelegate = Protocol.extendClass("UIPickerViewDelegate", () => ({

    // Setting the Dimensions of the Picker View
    rowHeightForComponent: optionalMethod("pickerView:rowHeightForComponent:"),
    widthForComponent:     optionalMethod("pickerView:widthForComponent:"),

    // Setting the Content of Component Rows

    // The methods in this group are marked optional. However, to use a picker view, you must implement either the titleForRow or the viewForRow method to provide the content of component rows.

    titleForRow:           optionalMethod("pickerView:titleForRow:forComponent:"),
    viewForRow:            optionalMethod("pickerView:viewForRow:forComponent:reusingView:"),

    // Responding to Row Selection
    didSelectRow:          optionalMethod("pickerView:didSelectRow:inComponent:")

}));
