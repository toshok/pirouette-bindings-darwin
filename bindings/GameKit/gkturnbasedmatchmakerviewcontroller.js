// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKTurnBasedMatchmakerViewController;
_exports.GKTurnBasedMatchmakerViewController = GKTurnBasedMatchmakerViewController = ui.UINavigationController.extendClass ("GKTurnBasedMatchmakerViewController", () => ({

    // Displaying a UI For Turn-Based Matches
    initWithMatchRequest: objc.instanceSelector("initWithMatchRequest:"),
    turnBasedMatchmakerDelegate: objc.autoboxProperty(GKTurnBasedMatchmakerViewControllerDelegate),
    showExistingMatches: objc.instanceProperty()

}));
