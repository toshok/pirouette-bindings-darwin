// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UIViewController } from 'uiviewcontroller';
import { UINavigationControllerDelegate } from 'uinavigationcontrollerdelegate';

//console.log("UINavigationController");
export let UINavigationController = UIViewController.extendClass ("UINavigationController", () => ({

    // Creating Navigation Controllers
    initWithRootViewController: instanceSelector("initWithRootViewController:"),

    // Accessing Items on the Navigation Stack
    setViewControllers:     instanceSelector("setViewControllers:animated:"),
    topViewController:      instanceProperty(),
    visibleViewController:  instanceProperty(),
    viewControllers:        instanceProperty({ set: function(v) { return this.setViewControllers(v, false); } }),

    // Pushing and Popping Stack Items
    pushViewController:      instanceSelector("pushViewController:animated:"),
    popViewController:       instanceSelector("popViewControllerAnimated:"),
    popToRootViewController: instanceSelector("popToRootViewControllerAnimated:"),
    popToViewController:     instanceSelector("popToViewController:animated:"),

    // Configuring Navigation Bars
    navigationBar:       instanceProperty(),
    navigationBarHidden:       instanceProperty({ set: function(v) { return this.setNavigationBarHidden(v, false); } }),
    setNavigationBarHidden: instanceSelector("setNavigationBarHidden:animated:"),

    // Accessing the Delegate
    delegate: autoboxProperty(UINavigationControllerDelegate),

    // Configuring Custom Toolbars
    toolbar:       instanceProperty(),
    setToolbarHidden:       instanceSelector("setToolbarHidden:animated:"),
    toolbarHidden:       instanceProperty({ set: function (v) { return this.setToolbarHidden(v, false); } })

}));
