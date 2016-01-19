// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UINib");
export let UINib = NSObject.extendClass ("UINib", () => ({

    // Creating a Nib Object
    nibWithNibName: staticSelector("nibWithNibName:bundle:"),
    nibWithData:    staticSelector("nibWithData:bundle:"),

    // Instantiating a Nib
    instantiateWithOwner: instanceSelector("instantiateWithOwner:options:")

}));
