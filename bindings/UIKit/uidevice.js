// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { NSObject } from '../foundation';
import { staticProperty, instanceProperty, instanceSelector } from '../objc';

//console.log("UIDevice");
export let UIDevice = NSObject.extendClass ("UIDevice", () => ({

    // Getting the Shared Device Instance
    currentDevice:                                staticProperty({ set: null }),

    // Determining the Available Features
    multitaskingSupported:                              instanceProperty(),

    // Identifying the Device and Operating System
    name:                              instanceProperty(),
    systemName:                              instanceProperty(),
    systemVersion:                              instanceProperty(),
    model:                              instanceProperty(),
    localizedModel:                              instanceProperty(),
    userInterfaceIdiom:                              instanceProperty(),
    uniqueIdentifier:                              instanceProperty(), // Deprecated in iOS 5.0

    // Getting the Device Orientation
    orientation:                              instanceProperty(),
    generatesDeviceOrientationNotifications:                              instanceProperty(),
    beginGeneratingDeviceOrientationNotifications: instanceSelector("beginGeneratingDeviceOrientationNotifications"),
    endGeneratingDeviceOrientationNotifications:   instanceSelector("endGeneratingDeviceOrientationNotifications"),

    // Getting the Device Battery State
    batteryLevel:                              instanceProperty(),
    batteryMonitoringEnabled:                              instanceProperty(),
    batteryState:                              instanceProperty(),

    // Using the Proximity Sensor
    proximityMonitoringEnabled:                              instanceProperty(),
    proximityState:                              instanceProperty(),

    // Playing Input Clicks
    playInputClick:                                instanceSelector("playInputClick")

}));
