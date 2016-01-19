// This file is part of Pirouette.  for licensing information, see the LICENSE file

var CLLocationManager;
_exports.CLLocationManager = CLLocationManager = foundation.NSObject.extendClass("CLLocationManager", () => ({

    // Accessing the Delegate
    delgate: objc.autoboxProperty(CLLocationManagerDelegate),

    // Determining the Availability of Services
    authorizationStatus: objc.staticSelector("authorizationStatus"),
    locationServicesEnabled: objc.staticSelector("locationServicesEnabled"),
    significantLocationChangeMonitoringAvailable: objc.staticSelector("significantLocationChangeMonitoringAvailable"),
    headingAvailable: objc.staticSelector("headingAvailable"),
    regionMonitoringAvailable: objc.staticSelector("regionMonitoringAvailable"),
    regionMonitoringEnabled: objc.staticSelector("regionMonitoringEnabled"),
    headingAvailable: objc.instanceProperty(), // Deprecated in iOS 4.0
    locationServicesEnabled: objc.instanceProperty(), // Deprecated in iOS 4.0

    // Initiating Standard Location Updates
    startUpdatingLocation: objc.instanceSelector("startUpdatingLocation"),
    stopUpdatingLocation: objc.instanceSelector("stopUpdatingLocation"),
    distanceFilter: objc.instanceProperty(),
    desiredAccuracy: objc.instanceProperty(),

    // Initiating Significant Location Updates
    startMonitoringSignificantLocationChanges: objc.instanceSelector("startMonitoringSignificantLocationChanges"),
    stopMonitoringSignificantLocationChanges: objc.instanceSelector("stopMonitoringSignificantLocationChanges"),

    // Initiating Heading Updates
    startUpdatingHeading: objc.instanceSelector("startUpdatingHeading"),
    stopUpdatingHeading: objc.instanceSelector("stopUpdatingHeading"),
    dismissHeadingCalibrationDisplay: objc.instanceSelector("dismissHeadingCalibrationDisplay"),
    headingFilter: objc.instanceProperty(),
    headingOrientation: objc.instanceProperty(),

    // Initiating Region Monitoring
    startMonitoringForRegion: objc.instanceSelector("startMonitoringForRegion:"),
    startMonitoringForRegionWithDesiredAccuracy: objc.instanceSelector("startMonitoringForRegion:desiredAccuracy:"),
    stopMonitoringForRegion: objc.instanceSelector("stopMonitoringForRegion:"),
    monitoredRegions: objc.instanceProperty(),
    maximumRegionMonitoringDistance: objc.instanceProperty(),

    // Getting Recently Retrieved Data
    location: objc.instanceProperty(),
    heading: objc.instanceProperty(),

    // Describing Your Application’s Services to the User
    purpose: objc.instanceProperty()
}));
