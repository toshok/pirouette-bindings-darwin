// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKLeaderboard;

_exports.GKLeaderboard = GKLeaderboard = foundation.NSObject.extendClass ("GKLeaderboard", () => ({

    // Determining the Available Leaderboards to Display
    loadCategories: objc.staticSelector("loadCategoriesWithCompletionHandler:"),

    // Initialization
    init:              objc.instanceSelector("init"),
    initWithPlayerIDs: objc.instanceSelector("initWithPlayerIDs:"),

    // Customizing the Leaderboard Request
    playerScope: objc.instanceProperty(),
    range:       objc.instanceProperty(),
    timeScope:   objc.instanceProperty(),
    category:    objc.instanceProperty(),

    // Retrieving High Scores
    loadScores: objc.instanceSelector("loadScoresWithCompletionHandler:"),
    loading:          objc.instanceProperty(),
    title:            objc.instanceProperty(),
    scores:           objc.instanceProperty(),
    localPlayerScore: objc.instanceProperty(),
    maxRange:         objc.instanceProperty(),

    // Changing a Local Player’s Default Leaderboard
    setDefaultLeaderboard: objc.staticSelector("setDefaultLeaderboard:withCompletionHandler:")
}));
