// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UINavigationBarDelegate");

export let UINavigationBarDelegate = Protocol.extendClass("UINavigationBarDelegate", () => ({

    // Pushing Items
    shouldPushItem: optionalMethod("navigationBar:shouldPushItem:"),
    didPushItem:    optionalMethod("navigationBar:didPushItem:"),

    // Popping Items
    shouldPopItem:  optionalMethod("navigationBar:shouldPopItem:"),
    didPopItem:     optionalMethod("navigationBar:didPopItem:")

}));
