// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKTurnBasedParticipant;
_exports.GKTurnBasedParticipant = GKTurnBasedParticipant = foundation.NSObject.extendClass ("GKTurnBasedParticipant", () => ({

    // Participant Information
    playerID: objc.instanceProperty(),
    lastTurnDate: objc.instanceProperty(),
    status: objc.instanceProperty(),

    // Setting the Match Outcome
    matchOutcome: objc.instanceProperty()

}));
