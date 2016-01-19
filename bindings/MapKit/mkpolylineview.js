// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKPolylineView;
_exports.MKPolylineView = MKPolylineView = MKOverlayPathView.extendClass ("MKPolylineView", () => ({

    // MethodGroup
    initWithPolyline: objc.instanceSelector("initWithPolyline:"),
    polyline: objc.instanceProperty()

}));
