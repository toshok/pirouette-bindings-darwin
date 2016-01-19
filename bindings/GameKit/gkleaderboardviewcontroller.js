// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKLeaderboardViewController;
_exports.GKLeaderboardViewController = GKLeaderboardViewController = ui.UINavigationController.extendClass ("GKLeaderboardViewController", () => ({

    // Configuring the Leaderboard View Controller
    category:            objc.instanceProperty(),
    leaderboardDelegate: objc.autoboxProperty(GKLeaderboardViewControllerDelegate),
    timeScope:           objc.instanceProperty()

}));
