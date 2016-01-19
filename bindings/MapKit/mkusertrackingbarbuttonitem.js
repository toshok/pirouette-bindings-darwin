// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKUserTrackingBarButtonItem;
_exports.MKUserTrackingBarButtonItem = MKUserTrackingBarButtonItem = ui.UIBarButtonItem.extendClass ("MKUserTrackingBarButtonItem", () => ({

    // Initializing
    initWithMapView: objc.instanceSelector("initWithMapView:"),

    // Accessing Properties
    mapView: objc.instanceProperty()

}));
