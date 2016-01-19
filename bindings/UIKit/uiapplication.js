// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticProperty, selectorInvoker, autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIResponder } from 'uiresponder';
import { UIApplicationDelegate } from 'uiapplicationdelegate';
import * as objc_internal from '@objc_internal';

//console.log("UIApplication");
export let UIApplication = UIResponder.extendClass ("UIApplication", () => ({

    // Getting the Application Instance

    sharedApplication: staticProperty({ set: null, get: function () { return selectorInvoker("sharedApplication").call(UIApplication); } }),

    // Setting and Getting the Delegate
    delegate: autoboxProperty(UIApplicationDelegate),

    // Getting Application Windows
    keyWindow: instanceProperty({ set: null }), // readonly
    windows: instanceProperty({ set: null }), // readonly

    // Controlling and Handling Events
    sendEvent:                      instanceSelector("sendEvent:"),
    sendAction:                     instanceSelector("sendAction:to:from:forEvent:"),
    beginIgnoringInteractionEvents: instanceSelector("beginIgnoringInteractionEvents"),
    endIgnoringInteractionEvents:   instanceSelector("endIgnoringInteractionEvents"),

    isIgnoringInteractionEvents: instanceProperty({ set: null }), // readonly

    applicationSupportsShakeToEdit: instanceProperty(),
    proximitySensingEnabled: instanceProperty({ get: "isProximitySensingEnabled" }), //  property Deprecated in iOS 3.0

    // Opening a URL Resource
    openURL:    instanceSelector("openURL:"),
    canOpenURL: instanceSelector("canOpenURL:"),

    // Registering for Remote Notifications
    registerForRemoteNotificationTypes: instanceSelector("registerForRemoteNotificationTypes:"),
    unregisterForRemoteNotifications:   instanceSelector("unregisterForRemoteNotifications"),
    enableRemoteNotificationTypes:      instanceSelector("enableRemoteNotificationTypes"),

    // Managing Application Activity
    idleTimerDisabled: instanceProperty({ get: "isIdleTimerDisabled" }),

    // Managing Background Execution
    applicationState: instanceProperty({ set: null }), // readonly
    backgroundTimeRemaining: instanceProperty({ set: null }),

    beginBackgroundTaskWithExpirationHandler: instanceSelector("beginBackgroundTaskWithExpirationHandler:"),
    endBackgroundTask:                        instanceSelector("endBackgroundTask:"),
    setKeepAliveTimeoutWithHandler:           instanceSelector("setKeepAliveTimeout:handler:"),
    clearKeepAliveTimeout:                    instanceSelector("clearKeepAliveTimeout"),

    // Registering for Local Notifications
    scheduleLocalNotification:   instanceSelector("scheduleLocalNotification:"),
    presentLocalNotificationNow: instanceSelector("presentLocalNotificationNow:"),
    cancelLocalNotification:     instanceSelector("cancelLocalNotification:"),
    cancelAllLocalNotification:  instanceSelector("cancelAllLocalNotification:"),

    scheduledLocalNotifications: instanceProperty(),

    // Determining the Availability of Protected Content
    protectedDataAvailable: instanceProperty({ get: "isProtectedDataAvailable", set: null }), // readonly

    // Registering for Remote Control Events
    beginReceivingRemoteControlEvents: instanceSelector("beginReceivingRemoteControlEvents"),
    endReceivingRemoteControlEvents: instanceSelector("endReceivingRemoteControlEvents"),

    // Managing Status Bar Orientation

    setStatusBarOrientation: instanceSelector("setStatusBarOrientation:animated:"),
    statusBarOrientation:        instanceProperty({ set: function (v) { return this.setStatusBarOrientation(v, false); } }),
    statusBarOrientationAnimationDuration:        instanceProperty({ set: null }), // readonly

    // Controlling Application Appearance
    setStatusBarHidden: instanceSelector("setStatusBarHidden:withAnimation:"),
    statusBarHidden:   instanceProperty({ get: "isStatusBarHidden", set: function (v) { return this.setStatusBarHidden(v, false); } }),

    setStatusBarStyle: instanceSelector("setStatusBarStyle:withAnimation:"),
    statusBarStyle:  instanceProperty({ set: function (v) { return this.setStatusBarStyle(v, false); } }),
    statusBarFrame:  instanceProperty({ set: null }),

    networkActivityIndicatorVisible: instanceProperty({ get: "isNetworkActivityIndicatorVisible" }),
    applicationIconBadgeNumber: instanceProperty(),
    userInterfaceLayoutDirection: instanceProperty({ set: null }), // readonly

    // Setting the Icon of a Newsstand Application
    setNewsstandIconImage: instanceSelector("setNewsstandIconImage:")

}));

UIApplication.main = function (args, principalClassName, delegateClassName) {
  return objc_internal.UIApplicationMain(args, principalClassName, delegateClassName);
};
