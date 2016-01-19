// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CARenderer = NSObject.extendClass("CARenderer", () => ({

    // Rendered Layer
    layer: instanceProperty(),

    // Renderer Geometry
    bounds: instanceProperty(),

    // Create a New Renderer
    rendererWithCGLContext: staticSelector("rendererWithCGLContext:options:"),

    // Render a Frame
    beginFrameAtTime: instanceSelector("beginFrameAtTime:timeStamp:"),

    updateBounds: instanceSelector("updateBounds"),
    addUpdateRect: instanceSelector("addUpdateRect:"),

    render: instanceSelector("render"),
    nextFrameTime: instanceSelector("nextFrameTime"),
    endFrame: instanceSelector("endFrame")

}));
