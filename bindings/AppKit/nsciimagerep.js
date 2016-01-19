// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector } from '../objc';
import { NSImageRep } from 'nsimagerep';

export let NSCIImageRep = NSImageRep.extendClass("NSCIImageRep", () => ({

    // Initialization
    //
    imageRepWithCIImage: staticSelector("imageRepWithCIImage:"),
    initWithCIImage: instanceSelector("initWithCIImage:"),

    // Returning an Image
    //
    CIImage: instanceSelector()

}));
