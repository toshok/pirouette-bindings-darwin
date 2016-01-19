// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKSessionDelegate");
var GKSessionDelegate;
_exports.GKSessionDelegate = GKSessionDelegate = foundation.Protocol.extendClass ("GKSessionDelegate", () => ({

    // Observing Changes to Peers
    didChangeState: objc.requiredMethod ("session:peer:didChangeState:"),

    // Connection Requests from Other Peers
    didReceiveConnectionRequestFromPeer: objc.requiredMethod ("session:didReceiveConnectionRequestFromPeer:"),

    // Connection Errors
    connectionWithPeerFailed: objc.requiredMethod ("session:connectionWithPeerFailed:withError:"),
    didFailWithError: objc.requiredMethod ("session:didFailWithError:")

}));
