// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKMultiPoint;
_exports.MKMultiPoint = MKMultiPoint = MKShape.extendClass ("MKMultiPoint", () => ({

  // Accessing the Points in the Shape
  points: objc.instanceProperty(),
  pointCount: objc.instanceProperty(),

  // Getting Coordinate Values
  getCoordinates: objc.instanceSelector("getCoordinates:range:")

}));
