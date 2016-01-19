// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKCircleView;
_exports.MKCircleView = MKCircleView = MKOverlayPathView.extendClass ("MKCircleView", () => ({

    // MethodGroup
    initWithCircle: objc.instanceSelector("initWithCircle:"),
    circle: objc.instanceProperty()

}));
