// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol';
import { UITextFieldDelegate } from 'uitextfielddelegate';

//console.log("UITextField");
export let UITextField = UIControl.extendClass ("UITextField", () => ({

    // Accessing the Text Attributes
    text: instanceProperty(),
    placeholder: instanceProperty(),
    font: instanceProperty(),
    textColor: instanceProperty(),
    textAlignment: instanceProperty(),

    // Sizing the Text Field’s Text
    adjustsFontSizeToFitWidth: instanceProperty(),
    minimumFontSize: instanceProperty(),

    // Managing the Editing Behavior
    editing: instanceProperty(),
    clearsOnBeginEditing: instanceProperty(),

    // Setting the View’s Background Appearance
    borderStyle: instanceProperty(),
    background: instanceProperty(),
    disabledBackground: instanceProperty(),

    // Managing Overlay Views
    clearButtonMode: instanceProperty(),
    leftView: instanceProperty(),
    leftViewMode: instanceProperty(),
    rightView: instanceProperty(),
    rightViewMode: instanceProperty(),

    // Accessing the Delegate
    delegate: autoboxProperty(UITextFieldDelegate),

    // Drawing and Positioning Overrides
    textRect:              instanceSelector("textRectForBounds:"),
    drawTextInRect:        instanceSelector("drawTextInRect:"),
    placeholderRect:       instanceSelector("placeholderRectForBounds:"),
    drawPlaceholderInRect: instanceSelector("drawPlaceholderInRect:"),
    borderRect:            instanceSelector("borderRectForBounds:"),
    editingRect:           instanceSelector("editingRectForBounds:"),
    clearButtonRect:       instanceSelector("clearButtonRectForBounds:"),
    leftViewRect:          instanceSelector("leftViewRectForBounds:"),
    rightViewRect:         instanceSelector("rightViewRectForBounds:"),

    // Replacing the System Input Views
    inputView: instanceProperty(),
    inputAccessoryView: instanceProperty(),

    // UITextInputTraits Protocol
    // Managing the Keyboard Behavior
    autocapitalizationType: instanceProperty(),
    autocorrectionType: instanceProperty(),
    spellCheckingType: instanceProperty(),
    enablesReturnKeyAutomatically: instanceProperty(),
    keyboardAppearance: instanceProperty(),
    keyboardType: instanceProperty(),
    returnKeyType: instanceProperty(),
    secureTextEntry: instanceProperty()
    // end UITextInputTraits Protocol

}));
