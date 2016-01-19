// This file is part of Pirouette.  for licensing information, see the LICENSE file

import * as objc_internal from '@objc_internal';

import { instanceProperty, staticProperty, autoboxProperty, instanceSelector, staticSelector } from '../objc';
import { NSResponder } from '../foundation';
import { NSApplicationDelegate } from 'nsapplicationdelegate';

console.log("NSApplication");

export let NSApplication = NSResponder.extendClass("NSApplication", () => ({
    // Getting the Application
    //
    sharedApplication: staticProperty({ get: () => new NSApplication(objc_internal.staticCall("NSApplication", "sharedApplication")) }),

    // Configuring Applications
    //
    applicationIconImage: instanceProperty(),

    delegate: autoboxProperty(NSApplicationDelegate),

    // Launching Applications
    //
    finishLaunching: instanceSelector(),

    // Terminating Applications
    //
    terminate:                         instanceSelector("terminate:"),
    replyToApplicationShouldTerminate: instanceSelector("replyToApplicationShouldTerminate:"),

    // Managing Active Status
    //
    isActive:                  instanceProperty({set: null}), // read-only
    activateIgnoringOtherApps: instanceSelector("activateIgnoringOtherApps:"),
    deactivate:                instanceSelector(),

    // Window Restoration
    //
    extendStateRestoration:   instanceSelector(),
    completeStateRestoration: instanceSelector(),
    restoreWindow:            instanceSelector("restoreWindowWithIdentifier:state:completionHandler:"),

    // Hiding Applications
    //
    hideOtherApplications: instanceSelector("hideOtherApplications:"),
    unhideAllApplications: instanceSelector("unhideAllApplications:"),

    // Managing the Event Loop
    //
    isRunning:         instanceProperty({ set: null }), // read-only
    run:               instanceSelector("run"),
    stop:              instanceSelector("stop:"),
    runModal:          instanceSelector("runModalForWindow:"),
    stopModal:         instanceSelector("stopModal"),
    stopModalWithCode: instanceSelector("stopModalWithCode:"),
    abortModal:        instanceSelector("abortModal"),
    beginModalSession: instanceSelector("beginModalSessionForWindow:"),
    runModalSession:   instanceSelector("runModalSession:"),
    modalWindow:       instanceProperty({ set: null }), // read-only
    endModalSession:   instanceSelector("endModalSession:"),
    sendEvent:         instanceSelector("sendEvent:"),

    // Handling Events
    //
    currentEvent:  instanceSelector("currentEvent"),
    nextEvent:     instanceSelector("nextEventMatchingMask:untilDate:inMode:dequeue:"),
    discardEvents: instanceSelector("discardEventsMatchingMask:beforeEvent:"),

    // Posting Events
    //
    postEvent: instanceSelector("postEvent:atStart:"),

    // Managing Sheets
    //
    beginSheet:             instanceSelector("beginSheet:modalForWindow:modalDelegate:didEndSelector:contextInfo:"),
    endSheet:               instanceSelector("endSheet:"),
    endSheetWithReturnCode: instanceSelector("endSheet:returnCode:"),

    // Managing Windows
    //
    keyWindow:              instanceProperty({ set: null }), // read-only
    mainWindow:             instanceProperty({ set: null }), // read-only
    windowWithWindowNumber: instanceSelector("windowWithWindowNumber:"),
    windows:                instanceProperty({ set: null }), // read-only
    makeWindowsPerform:     instanceSelector("makeWindowsPerform:inOrder:"),

    // Minimizing Windows
    //
    miniaturizeAll: instanceSelector("miniaturizeAll:"),

    // User Interface Layout Direction
    //
    userInterfaceLayoutDirection: instanceSelector("userInterfaceLayoutDirection"),

    // Hiding Windows
    //
    isHidden:                instanceProperty({ set: null }), // read-only
    hide:                    instanceSelector("hide:"),
    unhide:                  instanceSelector("unhide:"),
    unhideWithoutActivation: instanceSelector(),

    // Updating Windows
    //
    updateWindows:        instanceSelector(),
    setWindowsNeedUpdate: instanceSelector("setWindowsNeedUpdate:"),

    // Managing Window Layers
    //
    preventWindowOrdering: instanceSelector(),
    arrangeInFront:        instanceSelector("arrangeInFront:"),

    // Accessing the Main Menu
    //
    mainMenu:    instanceProperty(),

    // Managing the Window Menu
    //
    windowsMenu:       instanceProperty(),
    addWindowsItem:    instanceSelector("addWindowsItem:title:filename:"),
    changeWindowsItem: instanceSelector("changeWindowsItem:title:filename:"),
    removeWindowsItem: instanceSelector("removeWindowsItem:"),
    updateWindowsItem: instanceSelector("updateWindowsItem:"),

    // Accessing the Dock Tile
    //
    dockTile: instanceSelector(),

    // Managing the Services Menu
    //
    registerServicesMenu: instanceSelector("registerServicesMenuSendTypes:returnTypes:"),
    servicesMenu:         instanceProperty(),

    // Providing Services
    //
    validRequestor:      instanceSelector("validRequestorForSendType:returnType:"),
    servicesProvider:    instanceProperty(),

    // Managing Panels
    //
    orderFrontColorPanel:                    instanceSelector("orderFrontColorPanel:"),
    orderFrontStandardAboutPanel:            instanceSelector("orderFrontStandardAboutPanel:"),
    orderFrontStandardAboutPanelWithOptions: instanceSelector("orderFrontStandardAboutPanelWithOptions:"),
    orderFrontCharacterPalette:              instanceSelector("orderFrontCharacterPalette:"),
    runPageLayout:                           instanceSelector("runPageLayout:"),

    // Displaying Help
    //
    showHelp:                instanceSelector("showHelp:"),
    activateContextHelpMode: instanceSelector("activateContextHelpMode:"),
    helpMenu:                instanceProperty(),

    // Managing Threads
    //
    detachDrawingThread: staticSelector("detachDrawingThread:toTarget:withObject:"),

    // Posting Actions
    //
    tryToPerform:          instanceSelector("tryToPerform:with:"),
    sendAction:            instanceSelector("sendAction:to:from:"),
    targetForAction:       instanceSelector("targetForAction:"),
    targetForActionToFrom: instanceSelector("targetForAction:to:from:"),

    // Drawing Windows
    //
    context: instanceSelector(),

    // Logging Exceptions
    //
    reportException: instanceSelector("reportException:"),

    // Scripting
    //
    // FIXME application:delegateHandlesKey:: instanceSelector("application:delegateHandlesKey:" // delegate method
    orderedDocuments: instanceSelector(),
    orderedWindows:   instanceSelector(),

    // Managing User Attention Requests
    //
    requestUserAttention:       instanceSelector("requestUserAttention:"),
    cancelUserAttentionRequest: instanceSelector("cancelUserAttentionRequest:"),
    replyToOpenOrPrint:         instanceSelector("replyToOpenOrPrint:"),

    // Keyboard Accessibility
    //
    isFullKeyboardAccessEnabled: instanceSelector(),

    // Presentation Options
    //
    currentSystemPresentationOptions: instanceProperty({ set: null }), // read-only
    presentationOptions:              instanceProperty(),

    // Activation Policy
    //
    activationPolicy: instanceProperty(),

    // Spotlight for Help
    //
    registerUserInterfaceItemSearchHandler:   instanceSelector("registerUserInterfaceItemSearchHandler:"),
    unregisterUserInterfaceItemSearchHandler: instanceSelector("unregisterUserInterfaceItemSearchHandler:"),
    searchString:                             instanceSelector("searchString:inUserInterfaceItemString:searchRange:foundRange:"),

    // Managing Relaunch on Login
    //
    disableRelaunchOnLogin: instanceSelector(),
    enableRelaunchOnLogin:  instanceSelector(),

    // Managing Remote Notifications
    //
    enabledRemoteNotificationTypes:     instanceProperty({ set: null }), // read-only
    registerForRemoteNotificationTypes: instanceSelector("registerForRemoteNotificationTypes:"),
    unregisterForRemoteNotifications:   instanceSelector("unregisterForRemoteNotifications"),

    // Accessing Occlusion State
    occlusionState: instanceProperty({ set: null }), // read-only
}));
console.log("<NSApplication");

// use this instead of NSApplicationMain
NSApplication.main = function (args) {
  return objc_internal.NSApplicationMain (args);
};
