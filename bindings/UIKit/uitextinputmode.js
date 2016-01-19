// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UITextInputMode");
export let UITextInputMode = NSObject.extendClass ("UITextInputMode", () => ({

    // Getting the Current and Active Text-Input Modes
    currentInputMode: staticSelector("currentInputMode"),
    activeInputModes: staticSelector("activeInputModes"),

    // Getting the Primary Language
    primaryLanguage: instanceProperty()

}));
