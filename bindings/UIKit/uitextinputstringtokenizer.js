// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log "UITextInputStringTokenizer"
export let UITextInputStringTokenizer = NSObject.extendClass ("UITextInputStringTokenizer", () => ({

    // Initializing a Tokenizer
    initWithTextInput: instanceSelector("initWithTextInput:")

}));
