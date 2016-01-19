// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIMenuItem");
export let UIMenuItem = NSObject.extendClass ("UIMenuItem", () => ({

    // Creating a Menu Item
    initWithTitle: instanceSelector("initWithTitle:action:"),

    // Accessing Menu-Item Attributes
    title: instanceProperty(),
    action: instanceProperty()

}));
