// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIStoryboardSegue");
export let UIStoryboardSegue = NSObject.extendClass ("UIStoryboardSegue", () => ({

    // Initializing a Storyboard Segue
    initWithIdentifier: instanceSelector("initWithIdentifier:source:destination:"),

    // Accessing the Segue Attributes
    sourceViewController: instanceProperty(),
    destinationViewController: instanceProperty(),
    identifier: instanceProperty(),

    // Performing the Segue
    perform: instanceSelector("perform")

}));
