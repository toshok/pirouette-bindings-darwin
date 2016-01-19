// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIMenuController");
var UIMenuController;
export let UIMenuController = NSObject.extendClass ("UIMenuController", () => ({

    // Getting the Menu Controller Instance
    sharedMenuController: staticSelector("sharedMenuController"),

    // Showing and Hiding the Menu
    menuVisible:    instanceProperty(),
    setMenuVisible: instanceSelector("setMenuVisible:animated:"),

    // Positioning the Menu
    setTargetRect:    instanceSelector("setTargetRect:inView:"),
    menuFrame:        instanceProperty(),
    arrowDirection:   instanceProperty(),

    // Updating the Menu
    update:           instanceSelector("update"),

    // Customizing Menu Items
    menuItems: instanceProperty()

}));
