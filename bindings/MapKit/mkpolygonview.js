// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKPolygonView;
_exports.MKPolygonView = MKPolygonView = MKOverlayPathView.extendClass ("MKPolygonView", () => ({

    // MethodGroup
    initWithPolygon: objc.instanceSelector("initWithPolygon:"),
    polygon: objc.instanceProperty()

}));
