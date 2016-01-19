// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("MKReverseGeocoderDelegate");
var MKReverseGeocoderDelegate;
_exports.MKReverseGeocoderDelegate = MKReverseGeocoderDelegate = foundation.Protocol.extendClass ("MKReverseGeocoderDelegate", () => ({

    // Processing Placemark Searches
    didFail:            objc.optionalMethod("reverseGeocoder:didFailWithError:"), // Deprecated in iOS 5.0
    didFindPlacemark:   objc.optionalMethod("reverseGeocoder:didFindPlacemark:") // Deprecated in iOS 5.0

}));
