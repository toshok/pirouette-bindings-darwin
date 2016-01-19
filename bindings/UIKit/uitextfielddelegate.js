// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UITextFieldDelegate");
export let UITextFieldDelegate = Protocol.extendClass("UITextFieldDelegate", () => ({

    // Managing Editing
    shouldBeginEditing: optionalMethod("textFieldShouldBeginEditing:"),
    didBeginEditing:    optionalMethod("textFieldDidBeginEditing:"),
    shouldEndEditing:   optionalMethod("textFieldShouldEndEditing:"),
    didEndEditing:      optionalMethod("textFieldDidEndEditing:"),

    // Editing the Text Field’s Text
    shouldChangeCharactersInRange: optionalMethod("textField:shouldChangeCharactersInRange:replacementString:"),
    ShouldClear:                   optionalMethod("textFieldShouldClear:"),
    ShouldReturn:                  optionalMethod("textFieldShouldReturn:")

}));
