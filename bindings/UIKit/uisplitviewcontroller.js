// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, autoboxProperty } from '../objc';
import { UIViewController } from 'uiviewcontroller';
//import { UISplitViewControllerDelegate } from 'uisplitviewcontrollerdelegate';

//console.log("UISplitViewController");
export let UISplitViewController = UIViewController.extendClass ("UISplitViewController", () => ({

    // Managing the Child View Controllers
    viewControllers: instanceProperty(),

    // Accessing the Delegate Object
    //delegate: autoboxProperty(UISplitViewControllerDelegate)

}));
