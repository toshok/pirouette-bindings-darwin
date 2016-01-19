// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIViewController } from 'uiviewcontroller';
import { UITabBarControllerDelegate } from 'uitabbarcontrollerdelegate';

//console.log("UITabBarController");
export let UITabBarController = UIViewController.extendClass ("UITabBarController", () => ({

    // Accessing the Tab Bar Controller Properties
    delegate: autoboxProperty(UITabBarControllerDelegate),
    tabBar: instanceProperty(),

    // Managing the View Controllers
    setViewControllers: instanceSelector("setViewControllers:animated:"),
    viewControllers:   instanceProperty({ set: function (v) { return this.setViewControllers(v, false); } }),
    customizableViewControllers:   instanceProperty(),
    moreNavigationController:   instanceProperty(),

    // Managing the Selected Tab
    selectedViewController:   instanceProperty(),
    selectedIndex:   instanceProperty()

}));
