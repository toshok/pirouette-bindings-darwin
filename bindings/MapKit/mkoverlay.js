// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("MKOverlay");
var MKOverlay;
_exports.MKOverlay = MKOverlay = foundation.Protocol.extendClass ("MKOverlay", () => ({
    // Describing the Overlay Geometry
    coordinate:          objc.optionalProperty("coordinate"),
    boundingMapRect:     objc.optionalProperty("boundingMapRect"),

    // Determining Map Intersections
    intersectsMapRect:   objc.optionalMethod("intersectsMapRect:")
}));
