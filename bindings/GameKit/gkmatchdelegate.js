// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKMatchDelegate");
var GKMatchDelegate;

_exports.GKMatchDelegate = GKMatchDelegate = foundation.Protocol.extendClass ("GKMatchDelegate", () => ({
    // Receiving Data from Other Players
    didReceiveData:             objc.requiredMethod("match:didReceiveData:fromPlayer:"),

    // Receiving State Notifications About Other Players
    playerDidChangeState:       objc.optionalMethod("match:player:didChangeState:"),

    // Handling Errors
    connectionWithPlayerFailed: objc.optionalMethod("match:connectionWithPlayerFailed:withError:"),
    didFail:                    objc.optionalMethod("match:didFailWithError:"),

    // Reinviting a Player
    shouldReinvitePlayer:       objc.optionalMethod("match:shouldReinvitePlayer:")
}));
