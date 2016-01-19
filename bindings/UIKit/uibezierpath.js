// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIBezierPath");
export let UIBezierPath = NSObject.extendClass ("UIBezierPath", () => ({

    // Creating a UIBezierPath Object
    bezierPath:                                 instanceSelector("bezierPath"),
    bezierPathWithRect:                         instanceSelector("bezierPathWithRect:"),
    bezierPathWithOvalInRect:                   instanceSelector("bezierPathWithOvalInRect:"),
    bezierPathWithRoundedRect:                  instanceSelector("bezierPathWithRoundedRect:cornerRadius:"),
    bezierPathWithRoundedRectByRoundingCorners: instanceSelector("bezierPathWithRoundedRect:byRoundingCorners:cornerRadii:"),
    bezierPathWithArc:                          instanceSelector("bezierPathWithArcCenter:radius:startAngle:endAngle:clockwise:"),
    bezierPathWithCGPath:                       instanceSelector("bezierPathWithCGPath:"),

    // Constructing a Path
    moveToPoint:      instanceSelector("moveToPoint:"),
    addLineToPoint:   instanceSelector("addLineToPoint:"),
    addArc:           instanceSelector("addArcWithCenter:radius:startAngle:endAngle:clockwise:"),
    addCurve:         instanceSelector("addCurveToPoint:controlPoint1:controlPoint2:"),
    addQuadCurve:     instanceSelector("addQuadCurveToPoint:controlPoint:"),
    closePath:        instanceSelector("closePath"),
    removeAllPoints:  instanceSelector("removeAllPoints"),
    appendPath:       instanceSelector("appendPath:"),
    CGPath: instanceProperty(),
    currentPoint: instanceProperty(),

    // Accessing Drawing Properties
    lineWidth: instanceProperty(),
    lineCapStyle: instanceProperty(),
    lineJoinStyle: instanceProperty(),
    miterLimit: instanceProperty(),
    flatness: instanceProperty(),
    usesEvenOddFillRule: instanceProperty(),
    setLineDash:      instanceSelector("setLineDash:count:phase:"),
    getLineDash:      instanceSelector("getLineDash:count:phase:"),

    // Drawing Paths
    fill:                instanceSelector("fill"),
    fillWithBlendMode:   instanceSelector("fillWithBlendMode:alpha:"),
    stroke:              instanceSelector("stroke"),
    strokeWithBlendMode: instanceSelector("strokeWithBlendMode:alpha:"),

    // Clipping Paths
    addClip:             instanceSelector("addClip"),

    // Hit Detection
    containsPoint:    instanceSelector("containsPoint:"),
    empty: instanceProperty(),
    bounds: instanceProperty(),

    // Applying Transformations
    applyTransform:   instanceSelector("applyTransform:")

}));
