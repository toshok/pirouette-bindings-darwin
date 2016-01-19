// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKMatchRequest;
_exports.GKMatchRequest = GKMatchRequest = foundation.NSObject.extendClass ("GKMatchRequest", () => ({

    // Restricting the Number of Players
    maxPlayers: objc.instanceProperty(),
    minPlayers: objc.instanceProperty(),

    // Creating Subsets of Players
    playerGroup: objc.instanceProperty(),
    playerAttributes: objc.instanceProperty(),

    // Inviting an Initial Group of Players
    playersToInvite: objc.instanceProperty()

}));
