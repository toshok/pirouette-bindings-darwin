// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CLLocation;
_exports.CLLocation = CLLocation = foundation.NSObject.extendClass("CLLocation", () => ({

    // Initializing a Location Object
    initWithLatitudeAndlongitude: objc.instanceSelector("initWithLatitude:longitude:"),
    initWithCoordinate: objc.instanceSelector("initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:"),
    initWithCoordinateAndSpeed: objc.instanceSelector("initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:"),

    // Location Attributes
    coordinate: objc.instanceProperty(),
    altitude: objc.instanceProperty(),
    horizontalAccuracy: objc.instanceProperty(),
    verticalAccuracy: objc.instanceProperty(),
    timestamp: objc.instanceProperty(),
    description: objc.instanceSelector("description"),

    // Measuring the Distance Between Coordinates
    distanceFromLocation: objc.instanceSelector("distanceFromLocation:"),
    getDistanceFrom: objc.instanceSelector("getDistanceFrom:"),            // Deprecated in iOS 3.2

    // Getting Speed and Course Information
    speed: objc.instanceProperty(),
    course: objc.instanceProperty()

}));
