// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { NSObject, Protocol } from '../foundation';
import { optionalMethod, sig } from '../objc';

export let NSApplicationDelegate = Protocol.extendClass ("NSApplicationDelegate", () => ({

  // Launching Applications
  willFinishLaunching: optionalMethod("applicationWillFinishLaunching:").returns(sig.Void).params([NSObject/*should be NSDictionary*/]),
  didFinishLaunching: optionalMethod("applicationDidFinishLaunching:").returns(sig.Void).params([NSObject/*should be NSDictionary*/]),

  // Terminating Applications
  shouldTerminate: optionalMethod("applicationShouldTerminate:"),
  shouldTerminateAfterLastWindowClosed: optionalMethod("applicationShouldTerminateAfterLastWindowClosed:").returns(sig.Bool),
  willTerminate: optionalMethod("applicationWillTerminate:"),

  // Managing Active Status
  willBecomeActive: optionalMethod("applicationWillBecomeActive:"),
  didBecomeActive: optionalMethod("applicationDidBecomeActive:"),
  willResignActive: optionalMethod("applicationWillResignActive:"),
  didResignActive: optionalMethod("applicationDidResignActive:"),

  // Hiding Applications
  willHide: optionalMethod("applicationWillHide:"),
  didHide: optionalMethod("applicationDidHide:"),
  willUnhide: optionalMethod("applicationWillUnhide:"),
  didUnhide: optionalMethod("applicationDidUnhide:"),

  // Managing Windows
  willUpdate: optionalMethod("applicationWillUpdate:"),
  didUpdate: optionalMethod("applicationDidUpdate:"),
  shouldHandleReopen: optionalMethod("applicationShouldHandleReopen:hasVisibleWindows:"),

  // Managing the Dock Menu
  dockMenu: optionalMethod("applicationDockMenu:"),

  // Displaying Errors
  willPresentError: optionalMethod("application:willPresentError:"),

  // Managing the Screen
  didChangeScreenParameters: optionalMethod("applicationDidChangeScreenParameters:"),

  // Opening Files
  openFile: optionalMethod("application:openFile:"),
  openFileWithoutUI: optionalMethod("application:openFileWithoutUI:"),
  openTempFile: optionalMethod("application:openTempFile:"),
  openFiles: optionalMethod("application:openFiles:"),
  openUntitledFile: optionalMethod("applicationOpenUntitledFile:"),
  shouldOpenUntitledFile: optionalMethod("applicationShouldOpenUntitledFile:"),

  // Printing
  printFile: optionalMethod("application:printFile:"),
  printFilesWithSettings: optionalMethod("application:printFiles:withSettings:showPrintPanels:"),

  // Handling Push Notifications
  didRegisterForRemoteNotificationsWithDeviceToken: optionalMethod("application:didRegisterForRemoteNotificationsWithDeviceToken:"),
  didFailToRegisterForRemoteNotificationsWithError: optionalMethod("application:didFailToRegisterForRemoteNotificationsWithError:"),
  didReceiveRemoteNotification: optionalMethod("application:didReceiveRemoteNotification:"),

  // Application Restorable State
  didDecodeRestorableState: optionalMethod("application:didDecodeRestorableState:"),
  willEncodeRestorableState: optionalMethod("application:willEncodeRestorableState:")
}));
