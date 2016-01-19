// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKPolyline;
_exports.MKPolyline = MKPolyline = MKMultiPoint.extendClass ("MKPolyline", () => ({

    // Creating a Polyline Overlay
    polylineWithPoints: objc.staticSelector("polylineWithPoints:count:"),
    polylineWithCoordinates: objc.staticSelector("polylineWithCoordinates:count:")

}));
