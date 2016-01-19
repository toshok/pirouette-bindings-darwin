// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKTurnBasedMatch;
_exports.GKTurnBasedMatch = GKTurnBasedMatch = foundation.NSObject.extendClass ("GKTurnBasedMatch", () => ({

    // Retrieving Existing Matches
    loadMatches: objc.staticSelector("loadMatchesWithCompletionHandler:"),

    // Creating a New Match
    findMatchForRequest: obj.staticSelector("findMatchForRequest:withCompletionHandler:"),

    // Retrieving Information About the Match
    creationDate:       objc.instanceProperty(),
    currentParticipant: objc.instanceProperty(),
    matchID:            objc.instanceProperty(),
    message:      	objc.instanceProperty(),
    participants: 	objc.instanceProperty(),
    status:       	objc.instanceProperty(),
    matchData:    	objc.instanceProperty(),

    // Retrieving the Match’s Custom Data
    loadMatchData: objc.instanceSelector("loadMatchDataWithCompletionHandler:"),

    // Handling the Current Player’s Turn
    endTurn: objc.instanceSelector("endTurnWithNextParticipant:matchData:completionHandler:"),

    // Leaving a Match
    participantQuitInTurnWithOutcome: objc.instanceSelector("participantQuitInTurnWithOutcome:nextParticipant:matchData:completionHandler:"),
    participantQuitOutOfTurnWithOutcome: objc.instanceSelector("participantQuitOutOfTurnWithOutcome:withCompletionHandler:"),

    // Ending a Match
    endMatchInTurn: objc.instanceSelector("endMatchInTurnWithMatchData:completionHandler:"),

    // Deleting a Match From Game Center
    remove: objc.instanceSelector("removeWithCompletionHandler:")

}));
