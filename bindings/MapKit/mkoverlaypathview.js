// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKOverlayPathView;
_exports.MKOverlayPathView = MKOverlayPathView = MKOverlayView.extendClass ("MKOverlayPathView", () => ({

    // Accessing the Drawing Attributes
    fillColor: objc.instanceProperty(),
    strokeColor: objc.instanceProperty(),
    lineWidth: objc.instanceProperty(),
    lineJoin: objc.instanceProperty(),
    lineCap: objc.instanceProperty(),
    miterLimit: objc.instanceProperty(),
    lineDashPhase: objc.instanceProperty(),
    lineDashPattern: objc.instanceProperty(),

    // Creating and Managing the Path
    path: objc.instanceProperty(),
    createPath: objc.instanceSelector("createPath"),
    invalidatePath: objc.instanceSelector("invalidatePath"),

    // Drawing the Path
    applyStrokePropertiesToContext: objc.instanceSelector("applyStrokePropertiesToContext:atZoomScale:"),
    applyFillPropertiesToContext: objc.instanceSelector("applyFillPropertiesToContext:atZoomScale:"),
    strokePath: objc.instanceSelector("strokePath:inContext:"),
    fillPath: objc.instanceSelector("fillPath:inContext:")

}));
