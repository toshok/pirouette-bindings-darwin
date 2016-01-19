// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("MKMapViewDelgate");
var MKMapViewDelegate;
_exports.MKMapViewDelegate = MKMapViewDelegate = foundation.Protocol.extendClass ("MKMapViewDelegate", () => ({

    // Responding to Map Position Changes
    regionWillChange:                 objc.optionalMethod("mapView:regionWillChangeAnimated:"),
    regionDidChange:                  objc.optionalMethod("mapView:regionDidChangeAnimated:"),

    // Loading the Map Data
    willStartLoading:                 objc.optionalMethod("mapViewWillStartLoadingMap:"),
    didFinishLoading:                 objc.optionalMethod("mapViewDidFinishLoadingMap:"),
    didFailLoadingMap:                objc.optionalMethod("mapViewDidFailLoadingMap:withError:"),

    // Tracking the User Location
    willStartLocatingUser:            objc.optionalMethod("mapViewWillStartLocatingUser:"),
    didStartLocatingUser:             objc.optionalMethod("mapViewDidStopLocatingUser:"),
    didUpdateUserLocation:            objc.optionalMethod("mapView:didUpdateUserLocation:"),
    didFailToLocateUser:              objc.optionalMethod("mapView:didFailToLocateUserWithError:"),
    didChangeUserTrackingMode:        objc.requiredMethod("mapView:didChangeUserTrackingMode:animated:"),

    // Managing Annotation Views
    viewForAnnotation:                objc.optionalMethod("mapView:viewForAnnotation:"),
    didAddAnnotationViews:            objc.optionalMethod("mapView:didAddAnnotationViews:"),
    calloutAccessoryControlTapped:    objc.optionalMethod("mapView:annotationView:calloutAccessoryControlTapped:"),

    // Dragging an Annotation View
    didChangeDragState:               objc.optionalMethod("mapView:annotationView:didChangeDragState:fromOldState:"),

    // Selecting Annotation Views
    didSelectAnnotationView:          objc.optionalMethod("mapView:didSelectAnnotationView:"),
    didDeselectAnnotationView:        objc.optionalMethod("mapView:didDeselectAnnotationView:"),

    // Managing Overlay Views
    viewForOverlay:                   objc.optionalMethod("mapView:viewForOverlay:"),
    didAddOverlayViews:               objc.optionalMethod("mapView:didAddOverlayViews:")

}));
