// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { requiredProperty } from '../objc';
import { Protocol } from '../foundation';

//console.log("UITextInputTraits");
export let UITextInputTraits = Protocol.extendClass("UITextInputTraits", () => ({

    // we don't want NSObjectProtocol, I'm pretty sure..  too much underlying stuff we don't want to expose.
    // so let's leave it at that.
    // @mixinProtocol foundation.NSObjectProtocol

    // Managing the Keyboard Behavior
    autocapitalizationType:        requiredProperty("autocapitalizationType"),
    autocorrectionType:            requiredProperty("autocorrectionType"),
    spellCheckingType:             requiredProperty("spellCheckingType"),
    enablesReturnKeyAutomatically: requiredProperty("enablesReturnKeyAutomatically"),
    keyboardAppearance:            requiredProperty("keyboardAppearance"),
    keyboardType:                  requiredProperty("keyboardType"),
    returnKeyType:                 requiredProperty("returnKeyType"),
    secureTextEntry:               requiredProperty("secureTextEntry")

}));
