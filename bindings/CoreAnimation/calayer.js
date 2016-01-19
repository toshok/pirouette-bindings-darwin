// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { CALayerDelegate } from 'calayerdelegate';

export let CALayer = NSObject.extendClass ("CALayer", () => ({

    // Creating a Layer
    layer: staticSelector("layer"),
    init: instanceSelector("init"),
    initWithLayer: instanceSelector("initWithLayer:"),

    // Accessing the Presentation Layer
    presentationLayer: instanceSelector("presentationLayer"),
    modelLayer: instanceSelector("modelLayer"),

    // Modifying the Layer Geometry
    frame: instanceProperty(),
    bounds: instanceProperty(),
    position: instanceProperty(),
    zPosition: instanceProperty(),
    anchorPointZ: instanceProperty(),
    anchorPoint: instanceProperty(),
    contentsScale: instanceProperty(),
    affineTransform: instanceProperty(),
    transform: instanceProperty(),
    sublayerTransform: instanceProperty(),

    // Providing Layer Content
    contents: instanceProperty(),
    contentsRect: instanceProperty(),
    contentsCenter: instanceProperty(),
    display: instanceSelector("display"),
    drawInContext: instanceSelector("drawInContext:"),
    opaque: instanceProperty(),
    edgeAntialiasingMask: instanceProperty(),
    contentsAreFlipped: instanceSelector("contentsAreFlipped"),
    geometryFlipped: instanceProperty(),

    // Style Attributes
    contentsGravity: instanceProperty(),
    opacity: instanceProperty(),
    hidden: instanceProperty(),
    masksToBounds: instanceProperty(),
    doubleSided: instanceProperty(),
    mask: instanceProperty(),
    cornerRadius: instanceProperty(),
    borderWidth: instanceProperty(),
    borderColor: instanceProperty(),
    backgroundColor: instanceProperty(),
    backgroundFilters: instanceProperty(),
    shadowOpacity: instanceProperty(),
    shadowRadius: instanceProperty(),
    shadowOffset: instanceProperty(),
    shadowColor: instanceProperty(),
    shadowPath: instanceProperty(),
    filters: instanceProperty(),
    compositingFilter: instanceProperty(),
    style: instanceProperty(),
    minificationFilter: instanceProperty(),
    minificationFilterBias: instanceProperty(),
    magnificationFilter: instanceProperty(),

    // Managing the Layer Hierarchy
    sublayers: instanceProperty(),
    superlayer: instanceProperty(),
    addSublayer: instanceSelector("addSublayer:"),

    removeFromSuperlayer: instanceSelector("removeFromSuperlayer"),

    insertSublayerAtIndex: instanceSelector("insertSublayer:atIndex:"),
    insertSublayerBelow: instanceSelector("insertSublayer:below:"),
    insertSublayerAbove: instanceSelector("insertSublayer:above:"),
    replaceSublayerWith: instanceSelector("replaceSublayer:with:"),

    // Updating Layer Display
    needsDisplay: instanceProperty(),
    needsDisplayOnBoundsChange: instanceProperty(),
    needsDisplayForKey: staticSelector("needsDisplayForKey:"),
    setNeedsDisplayInRect: instanceSelector("setNeedsDisplayInRect:"),
    displayIfNeeded: instanceSelector("displayIfNeeded"),

    // Layer Animations
    addAnimation: instanceSelector("addAnimation:forKey:"),

    animation: instanceSelector("animationForKey:"),

    removeAllAnimations: instanceSelector("removeAllAnimations"),

    removeAnimation: instanceSelector("removeAnimationForKey:"),

    animationKeys: instanceProperty({ set: null }),

    // Managing Layer Resizing and Layout
    layoutManager: instanceProperty(),
    needsLayout: instanceProperty(),
    //constraints: instanceProperty(),                   XXX osx only
    name: instanceProperty(),
    autoresizingMask: instanceProperty(),
    //addConstraint: instanceSelector("addConstraint:"),   XXX osx only
    //resizeWithOldSuperlayerSize: instanceSelector("resizeWithOldSuperlayerSize:"),  XXX osx only
    //resizeSublayersWithOldSize: instanceSelector("resizeSublayersWithOldSize:"),    XXX osx only
    preferredFrameSize: instanceSelector("preferredFrameSize"),
    layoutIfNeeded: instanceSelector("layoutIfNeeded"),
    layoutSublayers: instanceSelector("layoutSublayers"),

    // Actions
    actions: instanceProperty(),
    defaultActionForKey: staticSelector("defaultActionForKey:"),
    actionForKey: instanceSelector("actionForKey:"),

    // Mapping Between Coordinate and Time Spaces
    convertPointFromLayer: instanceSelector("convertPoint:fromLayer:"),
    convertPointToLayer: instanceSelector("convertPoint:toLayer:"),
    convertRectFromLayer: instanceSelector("convertRect:fromLayer:"),
    convertRectToLayer: instanceSelector("convertRect:toLayer:"),
    convertTimeFromLayer: instanceSelector("convertTime:fromLayer:"),
    convertTimeToLayer: instanceSelector("convertTime:toLayer:"),

    // Hit Testing
    hitTest: instanceSelector("hitTest:"),
    containsPoint: instanceSelector("containsPoint:"),

    // Rendering
    renderInContext: instanceSelector("renderInContext:"),
    shouldRasterize: instanceProperty(),
    rasterizationScale: instanceProperty(),

    // Scrolling
    visibleRect: instanceProperty(),
    scrollPoint: instanceSelector("scrollPoint:"),
    scrollRectToVisible: instanceSelector("scrollRectToVisible:"),

    // Modifying the Delegate
    delegate: autoboxProperty(CALayerDelegate),

    // Key-Value Coding Extensions
    shouldArchiveValueForKey: instanceSelector("shouldArchiveValueForKey:"),
    defaultValueForKey: staticSelector("defaultValueForKey:")

}));
