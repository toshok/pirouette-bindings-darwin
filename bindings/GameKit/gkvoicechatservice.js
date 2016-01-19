// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKVoiceChatService;
_exports.GKVoiceChatService = GKVoiceChatService = foundation.NSObject.extendClass ("GKVoiceChatService",
  function GKVoiceChatService () {
    return GKVoiceChatService.__super__.constructor.apply(this, arguments);
  }, () => ({

    // Determining Whether Voice Chat Is Available
    isVoIPAllowed: objc.staticSelector("isVoIPAllowed"),

    // Getting the Shared Voice Chat Service
    defaultVoiceChatService: objc.staticSelector("defaultVoiceChatService"),

    // Setting the Service
    client: objc.instanceProperty(),

    // Establishing a Voice Chat
    startVoiceChatWithParticipantID: objc.instanceSelector("startVoiceChatWithParticipantID:error:"),

    // Adjusting Audio Properties
    microphoneMuted: objc.instanceProperty(),
    remoteParticipantVolume: objc.instanceProperty(),

    // Monitoring the Audio Level
    inputMeteringEnabled: objc.instanceProperty(),
    inputMeterLevel: objc.instanceProperty(),
    outputMeteringEnabled: objc.instanceProperty(),
    outputMeterLevel: objc.instanceProperty(),

    // Ending a Voice Chat
    stopVoiceChatWithParticipantID: objc.instanceSelector("stopVoiceChatWithParticipantID:"),

    // Methods Called by the Service
    acceptCallID: objc.instanceSelector("acceptCallID:error:"),
    denyCallID: objc.instanceSelector("denyCallID:"),
    receivedData: objc.instanceSelector("receivedData:fromParticipantID:"),
    receivedRealTimeData: objc.instanceSelector("receivedRealTimeData:fromParticipantID:")
}));
