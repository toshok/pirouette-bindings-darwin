// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log "GKMatchmakerViewControllerDelegate"
var GKMatchmakerViewControllerDelegate;
_exports.GKMatchmakerViewControllerDelegate = GKMatchmakerViewControllerDelegate = foundation.Protocol.extendClass ("GKMatchmakerViewControllerDelegate", () => ({

    // Completing a Match Request
    didFindMatch:                     objc.optionalMethod ("matchmakerViewController:didFindMatch:"),
    didFindPlayers:                   objc.optionalMethod ("matchmakerViewController:didFindPlayers:"),

    // Handling Cancellations
    wasCancelled:                     objc.requiredMethod ("matchmakerViewControllerWasCancelled:"),

    // Handling Errors
    didFail:                          objc.requiredMethod ("matchmakerViewController:didFailWithError:"),

    // Hosted Matches
    didReceiveAcceptFromHostedPlayer: objc.optionalMethod ("matchmakerViewController:didReceiveAcceptFromHostedPlayer:")
}));
