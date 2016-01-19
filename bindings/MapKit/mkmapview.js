// This file is part of Pirouette.  for licensing information, see the LICENSE file

var MKMapView;
_exports.MKMapView = MKMapView = ui.UIView.extendClass ("MKMapView", () => ({

    // Accessing Map Properties
    mapType:       objc.instanceProperty(),
    zoomEnabled:   objc.instanceProperty(),
    scrollEnabled: objc.instanceProperty(),

    // Accessing the Delegate
    delegate:      autoboxProperty(MKMapViewDelegate),

    // Manipulating the Visible Portion of the Map
    region:        objc.instanceProperty ({ set: function(v) { return this.setRegion(v, false); } }),
    setRegion: objc.instanceSelector("setRegion:animated:"),
    centerCoordinate: objc.instanceSelector({ set: function(v) { return this.setCenterCoordinate(v, false); } }),
    setCenterCoordinate: objc.instanceSelector("setCenterCoordinate:animated:"),
    visibleMapRect: objc.instanceProperty ({ set: function(v) { return this.setVisibleMapRect(v, false); } }),
    setVisibleMapRect: objc.instanceSelector("setVisibleMapRect:animated:"),
    setVisibleMapRectWithEdgePadding: objc.instanceSelector("setVisibleMapRect:edgePadding:animated:"),

    // Accessing the Device’s Current Location
    showsUserLocation: objc.instanceProperty(),
    userLocationVisible: objc.instanceProperty(),
    userLocation: objc.instanceProperty(),

    // Annotating the Map
    annotations: objc.instanceProperty(),
    addAnnotation: objc.instanceSelector("addAnnotation:"),
    addAnnotations: objc.instanceSelector("addAnnotations:"),
    removeAnnotation: objc.instanceSelector("removeAnnotation:"),
    removeAnnotations: objc.instanceSelector("removeAnnotations:"),
    viewForAnnotation: objc.instanceSelector("viewForAnnotation:"),
    annotationsInMapRect: objc.instanceSelector("annotationsInMapRect:"),
    annotationVisibleRect: objc.instanceProperty(),
    dequeueReusableAnnotationViewWithIdentifier: objc.instanceSelector("dequeueReusableAnnotationViewWithIdentifier:"),

    // Managing Annotation Selections
    selectedAnnotations: objc.instanceProperty(),
    selectAnnotation: objc.instanceSelector("selectAnnotation:animated:"),
    deselectAnnotation: objc.instanceSelector("deselectAnnotation:animated:"),

    // Adding and Removing Overlays
    overlays: objc.instanceProperty(),
    addOverlay: objc.instanceSelector("addOverlay:"),
    addOverlays: objc.instanceSelector("addOverlays:"),
    removeOverlay: objc.instanceSelector("removeOverlay:"),
    removeOverlays: objc.instanceSelector("removeOverlays:"),
    insertOverlayAtIndex: objc.instanceSelector("insertOverlay:atIndex:"),
    exchangeOverlayAtIndex: objc.instanceSelector("exchangeOverlayAtIndex:withOverlayAtIndex:"),
    insertOverlayAboveOverlay: objc.instanceSelector("insertOverlay:aboveOverlay:"),
    insertOverlayBelowOverlay: objc.instanceSelector("insertOverlay:belowOverlay:"),
    viewForOverlay: objc.instanceSelector("viewForOverlay:"),

    // Converting Map Coordinates
    convertCoordinateToPointToView: objc.instanceSelector("convertCoordinate:toPointToView:"),
    convertPointToCoordinateFromView: objc.instanceSelector("convertPoint:toCoordinateFromView:"),
    convertRegionToRectToView: objc.instanceSelector("convertRegion:toRectToView:"),
    convertRectToRegionFromView: objc.instanceSelector("convertRect:toRegionFromView:"),

    // Adjusting Map Regions and Rectangles
    regionThatFits: objc.instanceSelector("regionThatFits:"),
    mapRectThatFits: objc.instanceSelector("mapRectThatFits:"),
    mapRectThatFitsWithEdgePadding: objc.instanceSelector("mapRectThatFits:edgePadding:"),

    // Tracking the User Location
    setUserTrackingMode: objc.instanceSelector("setUserTrackingMode:animated:"),
    userTrackingMode: objc.instanceProperty({ set: function(v) { return this.setUserTrackingMode(v, false); } })
}));
