
import { staticSelector, instanceSelector, staticProperty, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

export let NSBezierPath = NSObject.extendClass("NSBezierPath", () => ({

    // Creating an NSBezierPath Object
    //
    bezierPath:                 staticSelector(),
    bezierPathWithOvalInRect:   staticSelector("bezierPathWithOvalInRect:"),
    bezierPathWithRect:         staticSelector("bezierPathWithRect:"),
    bezierPathWithRoundedRect:  staticSelector("bezierPathWithRoundedRect:xRadius:yRadius:"),
    bezierPathByFlatteningPath: instanceSelector("bezierPathByFlatteningPath"),
    bezierPathByReversingPath:  instanceSelector("bezierPathByReversingPath"),

    // Constructing Paths
    //
    moveToPoint:          instanceSelector("moveToPoint:"),
    lineToPoint:          instanceSelector("lineToPoint:"),
    curveToPoint:         instanceSelector("curveToPoint:controlPoint1:controlPoint2:"),
    closePath:            instanceSelector(),
    relativeMoveToPoint:  instanceSelector("relativeMoveToPoint:"),
    relativeLineToPoint:  instanceSelector("relativeLineToPoint:"),
    relativeCurveToPoint: instanceSelector("relativeCurveToPoint:controlPoint1:controlPoint2:"),

    // Appending Common Shapes to a Path
    //
    appendBezierPath:                           instanceSelector("appendBezierPath:"),
    appendBezierPathWithPoints:                 instanceSelector("appendBezierPathWithPoints:count:"),
    appendBezierPathWithOvalInRect:             instanceSelector("appendBezierPathWithOvalInRect:"),
    appendBezierPathWithArcFromPoint:           instanceSelector("appendBezierPathWithArcFromPoint:toPoint:radius:"),
    appendBezierPathWithArcWithCenter:          instanceSelector("appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:"),
    appendBezierPathWithClockwiseArcWithCenter: instanceSelector("appendBezierPathWithArcWithCenter:radius:startAngle:endAngle:clockwise:"),
    appendBezierPathWithGlyph:                  instanceSelector("appendBezierPathWithGlyph:inFont:"),
    appendBezierPathWithGlyphs:                 instanceSelector("appendBezierPathWithGlyphs:count:inFont:"),
    appendBezierPathWithPackedGlyphs:           instanceSelector("appendBezierPathWithPackedGlyphs:"),
    appendBezierPathWithRect:                   instanceSelector("appendBezierPathWithRect:"),
    appendBezierPathWithRoundedRect:            instanceSelector("appendBezierPathWithRoundedRect:xRadius:yRadius:"),

    // Accessing Path Attributes
    //
    defaultWindingRule:   staticProperty(),
    windingRule:          instanceProperty(),
    defaultLineCapStyle:  staticProperty(),
    lineCapStyle:         instanceProperty(),
    defaultLineJoinStyle: staticProperty(),
    lineJoinStyle:        instanceProperty(),
    defaultLineWidth:     staticProperty(),
    lineWidth:            instanceProperty(),
    defaultMiterLimit:    staticProperty(),
    miterLimit:           instanceProperty(),
    defaultFlatness:      staticProperty(),
    flatness:             instanceProperty(),
    getLineDash:          instanceSelector ("getLineDash:count:phase:"),
    setLineDash:          instanceSelector ("setLineDash:count:phase:"),

    // Drawing Paths
    //
    stroke:           instanceSelector(),
    fill:             instanceSelector(),
    fillRect:         staticSelector("fillRect:"),
    strokeRect:       staticSelector("strokeRect:"),
    strokeLine:       staticSelector("strokeLineFromPoint:toPoint:"),
    drawPackedGlyphs: staticSelector("drawPackedGlyphs:atPoint:"),

    // Clipping Paths
    //
    addClip:  instanceSelector(),
    setClip:  instanceSelector(),
    clipRect: staticSelector("clipRect:"),

    // Hit Detection
    //
    containsPoint: instanceSelector("containsPoint:"),

    // Querying Paths
    //
    bounds:             instanceProperty({ set: null }), // read-only
    controlPointBounds: instanceProperty({ set: null }), // read-only
    currentPoint:       instanceProperty({ set: null }), // read-only
    isEmpty:            instanceProperty({ set: null }), // read-only

    // Applying Transformations
    //
    transform: instanceSelector("transformUsingAffineTransform:"),

    // Accessing Elements of a Path
    //
    elementCount:                      instanceProperty({ set: null }), // read-only
    elementAtIndex:                    instanceSelector("elementAtIndex:"),
    elementAtIndexAndAssociatedPoints: instanceSelector("elementAtIndex:associatedPoints:"),
    removeAllPoints:                   instanceSelector(),
    setAssociatedPoints:               instanceSelector("setAssociatedPoints:atIndex:")
}));
