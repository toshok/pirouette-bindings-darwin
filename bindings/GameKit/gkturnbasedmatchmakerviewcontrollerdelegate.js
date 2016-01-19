// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKTurnBasedMatchmakerViewControllerDelegate");
var GKTurnBasedMatchmakerViewControllerDelegate;
_exports.GKTurnBasedMatchmakerViewControllerDelegate = GKTurnBasedMatchmakerViewControllerDelegate = foundation.Protocol.extendClass ("GKTurnBasedMatchmakerViewControllerDelegate", () => ({

    // Events
    didFindMatch:       objc.requiredMethod ("turnBasedMatchmakerViewController:didFindMatch:"),
    playerQuitForMatch: objc.requiredMethod ("turnBasedMatchmakerViewController:playerQuitForMatch:"),
    didFailWithError:   objc.requiredMethod ("turnBasedMatchmakerViewController:didFailWithError:"),
    wasCancelled:       objc.requiredMethod ("turnBasedMatchmakerViewControllerWasCancelled:")

}));
