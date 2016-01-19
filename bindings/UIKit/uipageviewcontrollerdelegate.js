// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIPageViewControllerDelegate");
export let UIPageViewControllerDelegate = Protocol.extendClass("UIPageViewControllerDelegate", () => ({

    // Responding to Page View Controller Events
    didFinishAnimating:                   optionalMethod("pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:"),
    spineLocationForInterfaceOrientation: optionalMethod("pageViewController:spineLocationForInterfaceOrientation:")

}));
