// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKOverlayView;
_exports.MKOverlayView = MKOverlayView = ui.UIView.extendClass ("MKOverlayView", () => ({

    // Initializing an Overlay View
    initWithOverlay: objc.instanceSelector("initWithOverlay:"),

    // Attributes of the Overlay
    overlay: objc.instanceSelector(),

    // Converting Points on the Map
    pointForMapPoint: objc.instanceSelector("pointForMapPoint:"),
    mapPointForPoint: objc.instanceSelector("mapPointForPoint:"),
    rectForMapRect: objc.instanceSelector("rectForMapRect:"),
    mapRectForRect: objc.instanceSelector("mapRectForRect:"),

    // Drawing the Overlay
    canDrawMapRect: objc.instanceSelector("canDrawMapRect:zoomScale:"),
    drawMapRect: objc.instanceSelector("drawMapRect:zoomScale:inContext:"),
    setNeedsDisplay: objc.instanceSelector("setNeedsDisplayInMapRect:"),
    setNeedsDisplayAtZoomScale: objc.instanceSelector("setNeedsDisplayInMapRect:zoomScale:")

}));
