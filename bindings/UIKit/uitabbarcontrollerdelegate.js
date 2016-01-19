// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UITabBarControllerDelegate");
export let UITabBarControllerDelegate = Protocol.extendClass("UITabBarControllerDelegate", () => ({

    // Managing Tab Bar Selections
    shouldSelectViewController:          optionalMethod("tabBarController:shouldSelectViewController:"),
    didSelectViewController:             optionalMethod("tabBarController:didSelectViewController:"),

    // Managing Tab Bar Customizations
    willBeginCustomizingViewControllers: optionalMethod("tabBarController:willBeginCustomizingViewControllers:"),
    willEndCustomizingViewControllers:   optionalMethod("tabBarController:willEndCustomizingViewControllers:changed:"),
    didEndCustomizingViewControllers:    optionalMethod("tabBarController:didEndCustomizingViewControllers:changed:")

}));
