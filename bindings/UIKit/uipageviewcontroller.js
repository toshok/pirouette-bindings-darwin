// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { UIViewController } from 'uiviewcontroller';
import { UIPageViewControllerDelegate } from 'uipageviewcontrollerdelegate';

//console.log("UIPageViewController");
export let UIPageViewController = UIViewController.extendClass ("UIPageViewController", () => ({

    // Creating Page View Controllers
    initWithTransitionStyle: instanceSelector("initWithTransitionStyle:navigationOrientation:options:"),
    dataSource: instanceProperty(),
    delegate: autoboxProperty(UIPageViewControllerDelegate),

    // Providing Content
    setViewControllers: instanceSelector("setViewControllers:direction:animated:completion:"),
    viewControllers: instanceProperty({ set: function(v) { return this.setViewControllers(v, false, null); } }),
    gestureRecognizers: instanceProperty(),

    // Display Options
    navigationOrientation: instanceProperty(),
    spineLocation: instanceProperty(),
    transitionStyle: instanceProperty(),
    doubleSided: instanceProperty()

}));
