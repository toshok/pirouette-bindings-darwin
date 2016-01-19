// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log "UIStoryboard"
export let UIStoryboard = NSObject.extendClass ("UIStoryboard", () => ({

    // Getting a Storyboard Object
    storyboardWithName:                      instanceSelector("storyboardWithName:bundle:"),

    // Instantiating Storyboard View Controllers
    instantiateInitialViewController:        instanceSelector("instantiateInitialViewController"),
    instantiateViewControllerWithIdentifier: instanceSelector("instantiateViewControllerWithIdentifier:")

}));
