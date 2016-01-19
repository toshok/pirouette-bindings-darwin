// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKReverseGeocoder;
_exports.MKReverseGeocoder = MKReverseGeocoder = foundation.NSObject.extendClass ("MKReverseGeocoder", () => ({

    // Initializing the Reverse Geocoder
    initWithCoordinate: objc.instanceSelector("initWithCoordinate:"), // Deprecated in iOS 5.0

    // Accessing Reverse Geocoder Attributes
    coordinate: objc.instanceProperty(), // Deprecated in iOS 5.0
    delegate: objc.autoboxProperty(MKReverseGeocoderDelegate), // Deprecated in iOS 5.0
    placemark: objc.instanceProperty(), // Deprecated in iOS 5.0

    // Managing the Search
    querying: objc.instanceProperty(), // Deprecated in iOS 5.0
    cancel: objc.instanceSelector("cancel"), // Deprecated in iOS 5.0
    start: objc.instanceSelector("start") // Deprecated in iOS 5.0

}));
