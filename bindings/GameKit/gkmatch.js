// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKMatch;
_exports.GKMatch = GKMatch = foundation.NSObject.extendClass ("GKMatch", () => ({

    // Getting and Setting the Delegate
    delegate: objc.autoboxProperty(GKMatchDelegate),

    // Working with Other Players
    playerIDs: objc.instanceProperty(),
    expectedPlayerCount: objc.instanceProperty(),

    // Sending Data to Other Players
    sendDataToPlayers: objc.instanceSelector("sendData:toPlayers:withDataMode:error:"),
    sendDataToAllPlayers: objc.instanceSelector("sendDataToAllPlayers:withDataMode:error:"),

    // Joining a Voice Chat
    voiceChatWithName: objc.instanceSelector("voiceChatWithName:"),

    // Finishing the Match
    disconnect: objc.instanceSelector("disconnect")
}));
