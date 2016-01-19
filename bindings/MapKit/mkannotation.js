// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("MKAnnotation");
var MKAnnotation;
_exports.MKAnnotation = MKAnnotation = foundation.Protocol.extendClass ("MKAnnotation", () => ({
    // Position Attributes
    coordinate:     objc.optionalProperty("coordinate"),
    setCoordinate:  objc.optionalMethod("setCoordinate:"),

    // Title Attributes
    title:          objc.optionalProperty("title"),
    subtitle:       objc.optionalProperty("subtitle")

}));
