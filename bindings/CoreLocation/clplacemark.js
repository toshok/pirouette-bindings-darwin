// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CLPlacemark;
_exports.CLPlacemark = CLPlacemark = foundation.NSObject.extendClass("CLPlacemark", () => ({

    // Initializing a Placemark Object
    initWithPlacemark: objc.instanceSelector("initWithPlacemark:"),

    // Accessing the Location Data
    location: objc.instanceProperty(),

    // Accessing the Placemark Attributes
    name: objc.instanceProperty(),
    addressDictionary: objc.instanceProperty(),
    ISOcountryCode: objc.instanceProperty(),
    country: objc.instanceProperty(),
    postalCode: objc.instanceProperty(),
    administrativeArea: objc.instanceProperty(),
    subAdministrativeArea: objc.instanceProperty(),
    locality: objc.instanceProperty(),
    subLocality: objc.instanceProperty(),
    thoroughfare: objc.instanceProperty(),
    subThoroughfare: objc.instanceProperty(),
    region: objc.instanceProperty(),

    // Accessing Geographic Information
    inlandWater: objc.instanceProperty(),
    ocean: objc.instanceProperty(),

    // Accessing Landmark Information
    areasOfInterest: objc.instanceProperty()

}));
