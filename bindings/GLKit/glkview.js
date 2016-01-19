// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UIView } from '../uikit';
import { GLKViewDelegate } from 'glkviewdelegate';

export let GLKView = UIView.extendClass ("GLKView", () => ({

    // Initializing the View
    initWithFrameAndContext: instanceSelector("initWithFrame:context:"),

    // Delegate
    delegate: autoboxProperty(GLKViewDelegate),

    // Configuring the Framebuffer Object
    drawableColorFormat: instanceProperty(),
    drawableDepthFormat: instanceProperty(),
    drawableStencilFormat: instanceProperty(),
    drawableMultisample: instanceProperty(),

    // Read-only Framebuffer Properties
    drawableHeight: instanceProperty(),
    drawableWidth: instanceProperty(),

    // Drawing Your View’s Contents
    context: instanceProperty(),
    bindDrawable: instanceSelector("bindDrawable"),
    enableSetNeedsDisplay: instanceProperty(),
    display: instanceSelector("display"),
    snapshot: instanceSelector("snapshot"),

    // Deleting the View’s Underlying Framebuffer Object
    deleteDrawable: instanceSelector("deleteDrawable")

}));
