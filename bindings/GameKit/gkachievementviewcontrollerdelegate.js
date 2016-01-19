// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKAchievementViewControllerDelegate");
var GKAchievementViewControllerDelegate;
_exports.GKAchievementViewControllerDelegate = GKAchievementViewControllerDelegate = foundation.Protocol.extendClass ("GKAchievementViewControllerDelegate", () => ({

    // Responding to a Dismiss Action
    didFinish: objc.requiredMethod ("achievementViewControllerDidFinish:")

}));
