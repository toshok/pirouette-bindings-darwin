// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("CALayerDelegate");
export let CALayerDelegate = Protocol.extendClass("CALayerDelegate", () => ({

    // Providing Layer Content
    displayLayer:   optionalMethod("displayLayer"),
    drawLayer:      optionalMethod("drawLayer:inContext:"),

    // Actions
    actionForLayer: optionalMethod("actionForLayer:forKey:")

}));
