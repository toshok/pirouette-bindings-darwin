// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CLGeocoder;
_exports.CLGeocoder = CLGeocoder = foundation.NSObject.extendClass("CLGeocoder", () => ({

    // Reverse Geocoding a Location
    reverseGeocodeLocation: objc.instanceSelector("reverseGeocodeLocation:completionHandler:"),

    // Geocoding an Address
    geocodeAddressDictionary: objc.instanceSelector("geocodeAddressDictionary:completionHandler:"),
    geocodeAddressString: objc.instanceSelector("geocodeAddressString:completionHandler:"),
    geocodeAddressStringInRegion: objc.instanceSelector("geocodeAddressString:inRegion:completionHandler:"),

    // Managing Geocoding Requests
    cancelGeocode: objc.instanceSelector("cancelGeocode"),
    geocoding: objc.instanceProperty()

}));
