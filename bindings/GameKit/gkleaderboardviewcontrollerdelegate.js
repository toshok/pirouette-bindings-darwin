// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKLeaderboardViewControllerDelegate")

var GKLeaderboardViewControllerDelegate;
_exports.GKLeaderboardViewControllerDelegate = GKLeaderboardViewControllerDelegate = foundation.Protocol.extendClass ("GKLeaderboardViewControllerDelegate", () => ({

    // Handling User Actions
    didFinish: objc.requiredMethod ("leaderboardViewControllerDidFinish:")

}));
