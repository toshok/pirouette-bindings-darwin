// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { requiredMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIKeyInput");
export let UIKeyInput = Protocol.extendClass("UIKeyInput", () => ({

    // XXX ES6-port
    // @mixinProtocol UITextInputTraits

    // Inserting and Deleting Text
    insertText:     requiredMethod("insertText:"),
    deleteBackward: requiredMethod("deleteBackward"),
    hasText:        requiredMethod("hasText")

}));
