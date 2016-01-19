// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKTurnBasedEventHandler;
_exports.GKTurnBasedEventHandler = GKTurnBasedEventHandler = foundation.NSObject.extendClass ("GKTurnBasedEventHandler", () => ({

    // Retrieving the Shared Instance
    sharedTurnBasedEventHandler: objc.staticSelector("sharedTurnBasedEventHandler"),

    // Getting and Setting the Delegate
    delegate: objc.autoboxProperty(GKTurnBasedEventHandlerDelegate)

}));
