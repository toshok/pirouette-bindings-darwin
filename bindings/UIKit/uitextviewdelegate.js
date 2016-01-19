// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

console.log("UITextViewDelegate");
export let UITextViewDelegate = Protocol.extendClass("UITextViewDelegate", () => ({

    // Responding to Editing Notifications
    shouldBeginEditing: optionalMethod("textViewShouldBeginEditing:"),
    didBeginEditing:    optionalMethod("textViewDidBeginEditing:"),
    shouldEndEditing:   optionalMethod("textViewShouldEndEditing:"),
    didEndEditing:      optionalMethod("textViewDidEndEditing:"),

    // Responding to Text Changes
    shouldChangeText:   optionalMethod("textView:shouldChangeTextInRange:replacementText:"),
    didChangeText:      optionalMethod("textViewDidChange:"),

    // Responding to Selection Changes
    didChangeSelection: optionalMethod("textViewDidChangeSelection:")

}));
