// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKPlacemark;

_exports.MKPlacemark = MKPlacemark = cl.CLPlacemark.extendClass ("MKPlacemark", () => ({

    // Initializing a Placemark Object
    initWithCoordinate: objc.instanceSelector("initWithCoordinate:addressDictionary:"),

    // Accessing the Placemark Attributes
    countryCode: objc.instanceProperty()

}));
