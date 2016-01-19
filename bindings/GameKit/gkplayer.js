// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKPlayer;
_exports.GKPlayer = GKPlayer = foundation.NSObject.extendClass ("GKPlayer", () => ({

    // Loading Player Details
    loadPlayersForIdentifiers: objc.staticSelector("loadPlayersForIdentifiers:withCompletionHandler:"),

    // Identifying the Player
    playerID: objc.instanceProperty(),

    // Player Details
    alias: objc.instanceProperty(),
    isFriend: objc.instanceProperty(),

    // Player Photos
    loadPhotoForSize: objc.instanceSelector("loadPhotoForSize:withCompletionHandler:")

}));
