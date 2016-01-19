// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKVoiceChatClient");
var GKVoiceChatClient;
_exports.GKVoiceChatClient = GKVoiceChatClient = foundation.Protocol.extendClass ("GKVoiceChatClient", () => ({

    // Getting Information About the Participant
    participantID:        objc.requiredMethod("participantID"),

    // Sending Data to Other Participants
    sendData:             objc.requiredMethod("voiceChatService:sendData:toParticipantID:"),
    sendRealTimeData:     objc.optionalMethod("voiceChatService:sendRealTimeData:toParticipantID:"),

    // Accepting Invitations from Remote Participants
    didReceiveInvitation: objc.optionalMethod("voiceChatService:didReceiveInvitationFromParticipantID:callID:"),

    // Responding to Changes in Other Participants
    didStart:             objc.optionalMethod("voiceChatService:didStartWithParticipantID:"),
    didNotStart:          objc.optionalMethod("voiceChatService:didNotStartWithParticipantID:error:"),
    didStop:              objc.optionalMethod("voiceChatService:didStopWithParticipantID:error:")
}));
