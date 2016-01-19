// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CLRegion;
_exports.CLRegion = CLRegion = foundation.NSObject.extendClass("CLRegion", () => ({

    // Initializing a Circular Region
    initCircularRegion: objc.instanceSelector("initCircularRegionWithCenter:radius:identifier:"),

    // Accessing a Region’s Attributes
    identifier: objc.instanceProperty(),
    center: objc.instanceProperty(),
    radius: objc.instanceProperty(),

    // Hit-Testing in a Region
    containsCoordinate: objc.instanceSelector("containsCoordinate:")
}));
