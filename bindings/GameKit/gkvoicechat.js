// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKVoiceChat;
_exports.GKVoiceChat = GKVoiceChat = foundation.NSObject.extendClass ("GKVoiceChat", () => ({

    // Determining Whether Voice Chat Is Available
    isVoIPAllowed: objc.staticSelector("isVoIPAllowed"),

    // Starting and Stopping Voice Chat
    start: objc.instanceSelector("start"),
    stop: objc.instanceSelector("stop"),

    // Transmitting to Other Players
    active: objc.instanceProperty(),

    // Receiving Updates About Other Participants
    playerStateUpdateHandler: objc.instanceProperty(),

    // Controlling Chat Volume
    setMute: objc.instanceSelector("setMute:forPlayer:"),
    volume: objc.instanceProperty(),

    // Channel Properties
    name: objc.instanceProperty(),
    playerIDs: objc.instanceProperty()

}));
