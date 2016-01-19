// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let EAGLContext = NSObject.extendClass ("EAGLContext", () => ({

    // Creating EAGL Contexts
    initWithAPI: instanceSelector("initWithAPI:"),
    initWithAPIAndSharegroup: instanceSelector("initWithAPI:sharegroup:"),

    // Setting the Current EAGL Context
    setCurrentContext: staticSelector("setCurrentContext:"),

    // Attaching Storage to a Renderbuffer
    renderbufferStorage: instanceSelector("renderbufferStorage:fromDrawable:"),

    // Displaying a Renderbuffer
    presentRenderbuffer: instanceSelector("presentRenderbuffer:"),

    // Getting EAGL Context Information
    API: instanceProperty(),
    sharegroup: instanceProperty(),
    currentContext: staticSelector("currentContext")

}));
