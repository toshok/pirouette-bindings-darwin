// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIImage");
export let UIImage = NSObject.extendClass ("UIImage", () => ({

    // Cached Image Loading Routines
    imageNamed: staticSelector("imageNamed:"),

    // Creating New Images
    imageWithContentsOfFile:          staticSelector("imageWithContentsOfFile:"),
    imageWithData:                    staticSelector("imageWithData:"),
    imageWithCGImage:                 staticSelector("imageWithCGImage:"),
    imageWithCGImageScaleOrientation: staticSelector("imageWithCGImage:scale:orientation:"),
    imageWithCIImage:                 staticSelector("imageWithCIImage:"),
    animatedImageNamed:               staticSelector("animatedImageNamed:duration:"),
    animatedImageWithImages:          staticSelector("animatedImageWithImages:duration:"),
    animatedResizableImageNamed:      staticSelector("animatedResizableImageNamed:capInsets:duration:"),
    resizableImage:                   instanceSelector("resizableImageWithCapInsets:"),
    stretchableImage:                 instanceSelector("stretchableImageWithLeftCapWidth:topCapHeight:"), // Deprecated in iOS 5.0

    // Initializing Images
    initWithContentsOfFile:          instanceSelector("initWithContentsOfFile:"),
    initWithData:                    instanceSelector("initWithData:"),
    initWithCGImage:                 instanceSelector("initWithCGImage:"),
    initWithCGImageScaleOrientation: instanceSelector("initWithCGImage:scale:orientation:"),
    initWithCIImage:                 instanceSelector("initWithCIImage:"),

    // Image Attributes
    imageOrientation: instanceProperty(),
    size: instanceProperty(),
    scale: instanceProperty(),
    CGImage: instanceProperty(),
    CIImage: instanceProperty(),
    images: instanceProperty(),
    duration: instanceProperty(),
    capInsets: instanceProperty(),
    leftCapWidth: instanceProperty(), // Deprecated in iOS 5.0
    topCapHeight: instanceProperty(), // Deprecated in iOS 5.0

    // Drawing Images
    drawAtPoint:          instanceSelector("drawAtPoint:"),
    drawAtPointWithBlend: instanceSelector("drawAtPoint:blendMode:alpha:"),
    drawInRect:           instanceSelector("drawInRect:"),
    drawInRectWithBlend:  instanceSelector("drawInRect:blendMode:alpha:"),
    drawAsPatternInRect:  instanceSelector("drawAsPatternInRect:")

}));
