// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("CAAnimationDelegate");

export let CAAnimationDelegate = Protocol.extendClass("CAAnimationDelegate", () => ({

    // Animation Progress
    animationDidStart: optionalMethod("animationDidStart"),
    animationDidStop:  optionalMethod("animationDidStop")

}));
