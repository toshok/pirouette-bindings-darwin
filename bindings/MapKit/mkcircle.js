// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKCircle;
_exports.MKCircle = MKCircle = MKShape.extendClass ("MKCircle", () => ({

    // Creating a Circle Overlay
    circleWithCenterCoordinate: objc.staticSelector("circleWithCenterCoordinate:radius:"),
    circleWithMapRect: objc.staticSelector("circleWithMapRect:"),

    // Accessing the Overlay’s Attributes
    coordinate: objc.instanceProperty(),
    radius: objc.instanceProperty(),
    boundingMapRect: objc.instanceProperty()

}));
