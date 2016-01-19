// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKAchievement;
_exports.GKAchievement = GKAchievement = foundation.NSObject.extendClass ("GKAchievement", () => ({

    // Retrieving Achievement Progress from Game Center
    loadAchievementsWithCompletionHandler: objc.staticSelector("loadAchievementsWithCompletionHandler:"),

    // Initializing an Achievement Object
    initWithIdentifier: objc.instanceSelector("initWithIdentifier:"),

    // Configuring an Achievement
    identifier:       objc.instanceProperty(),
    percentComplete:  objc.instanceProperty(),

    // Reading the State of an Achievement
    completed:        objc.instanceProperty(),
    lastReportedDate: objc.instanceProperty(),
    hidden:           objc.instanceProperty(),

    // Reporting Progress on an Achievement
    reportAchievement: objc.instanceSelector("reportAchievementWithCompletionHandler:"),

    // Displaying a Notification Banner For an Achievement
    showsCompletionBanner: objc.instanceProperty(),

    // Resetting the Player’s Progress on Achievements
    resetAchievements: objc.staticSelector("resetAchievementsWithCompletionHandler:")

}));
