// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKTurnBasedEventHandlerDelegate");
var GKTurnBasedEventHandlerDelegate;
_exports.GKTurnBasedEventHandlerDelegate = GKTurnBasedEventHandlerDelegate = foundation.Protocol.extendClass ("GKTurnBasedEventHandlerDelegate", () => ({

    // Receiving Turn-based Events
    handleInviteFromGameCenter: objc.optionalMethod ("handleInviteFromGameCenter:"),
    handleTurnEventForMatch:    objc.optionalMethod ("handleTurnEventForMatch:"),
    handleMatchEnded:           objc.optionalMethod ("handleMatchEnded:")

}));
