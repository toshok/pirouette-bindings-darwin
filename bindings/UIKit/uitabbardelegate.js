// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod, requiredMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UITabBarDelegate");
export let UITabBarDelegate = Protocol.extendClass("UITabBarDelegate", () => ({

    // Customizing Tab Bars
    willBeginCustomizingItems: optionalMethod("tabBar:willBeginCustomizingItems:"),
    didBeginCustomizingItems:  optionalMethod("tabBar:didBeginCustomizingItems:"),
    willEndCustomizingItems:   optionalMethod("tabBar:willEndCustomizingItems:changed:"),
    didEndCustomizingItems:    optionalMethod("tabBar:didEndCustomizingItems:changed:"),
    didSelectItem:             requiredMethod("tabBar:didSelectItem:")

}));
