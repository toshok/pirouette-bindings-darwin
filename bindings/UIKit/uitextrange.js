// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UITextRange");
export let UITextRange = NSObject.extendClass ("UITextRange", () => ({

    // Defining Ranges of Text
    start: instanceProperty(),
    end:   instanceProperty(),
    empty: instanceProperty()

}));
