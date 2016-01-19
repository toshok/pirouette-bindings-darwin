// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { UIPickerViewDelegate } from 'uipickerviewdelegate';
import { UIView } from 'uiview';

//console.log("UIPickerView");
export let UIPickerView = UIView.extendClass ("UIPickerView", () => ({

    // Getting the Dimensions of the View Picker
    numberOfRowsInComponent: instanceSelector("numberOfRowsInComponent:"),
    rowSizeForComponent:     instanceSelector("rowSizeForComponent:"),
    numberOfComponents: instanceProperty(),

    // Reloading the View Picker
    reloadAllComponents:     instanceSelector("reloadAllComponents"),
    reloadComponent:         instanceSelector("reloadComponent:"),

    // Selecting Rows in the View Picker
    selectRow:               instanceSelector("selectRow:inComponent:animated:"),
    selectedRow:             instanceSelector("selectedRowInComponent:"),

    // Returning the View for a Row and Component
    viewForRowInComponent:   instanceSelector("viewForRow:forComponent:"),

    // Specifying the Delegate
    delegate: autoboxProperty(UIPickerViewDelegate),

    // Specifying the Data Source
    dataSource: instanceProperty(),

    // Managing the Appearance of the Picker View
    showsSelectionIndicator: instanceProperty()

}));
