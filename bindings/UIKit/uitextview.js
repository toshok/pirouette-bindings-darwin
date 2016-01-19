// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIScrollView } from 'uiscrollview';
import { UITextViewDelegate } from 'uitextviewdelegate';

//console.log("UITextView");
export let UITextView = UIScrollView.extendClass ("UITextView", () => ({

    // Initialization
    initWithFrame:  instanceSelector("initWithFrame:textContainer:"),

    // Configuring the Text Attributes
    text: instanceProperty(),
    font: instanceProperty(),
    textColor: instanceProperty(),
    editable: instanceProperty(),
    dataDetectorTypes: instanceProperty(),
    textAlignment: instanceProperty(),
    hasText: instanceSelector("hasText"),

    // Working with the Selection
    selectedRange: instanceProperty(),
    scrollRangeToVisible: instanceSelector("scrollRangeToVisible:"),

    // Accessing the Delegate
    delegate: autoboxProperty(UITextViewDelegate),

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

    // XXX ES6-port
    //@conformsToProtocol UITextInput

}));
