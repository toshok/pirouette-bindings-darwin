// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { requiredMethod } from '../objc';
import { Protocol } from '../foundation';

export let GLKViewDelegate = Protocol.extendClass("GLKViewDelegate", () => ({

    // Drawing the View’s Contents
    drawInRect:  requiredMethod("glkView:drawInRect:", {sig: "v@:@{CGRect={CGPoint=ff}{CGSize=ff}}" })

}));
