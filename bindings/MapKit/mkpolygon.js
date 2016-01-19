// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKPolygon;
_exports.MKPolygon = MKPolygon = MKMultiPoint.extendClass ("MKPolygon", () => ({

    // Creating a Polygon Overlay
    polygonWithPoints: objc.staticSelector("polygonWithPoints:count:"),
    polygonWithPointsAndInteriorPolygons: objc.staticSelector("polygonWithPoints:count:interiorPolygons:"),
    polygonWithCoordinates: objc.staticSelector("polygonWithCoordinates:count:"),
    polygonWithCoordinatesAndinteriorPolygons: objc.staticSelector("polygonWithCoordinates:count:interiorPolygons:"),

    // Accessing the Interior Polygons
    interiorPolygons: objc.instanceProperty()

}));
