// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKSession;
_exports.GKSession = GKSession = foundation.NSObject.extendClass ("GKSession", () => ({

    // Creating a Session
    init: objc.instanceSelector("initWithSessionID:displayName:sessionMode:"),

    // Setting and Getting the Delegate
    delegate: objc.autoboxProperty(GKSessionDelegate),

    // Searching for Other Peers
    available: objc.instanceProperty(),

    // Obtaining Information About Other Peers
    peersWithConnectionState: objc.instanceSelector("peersWithConnectionState:"),
    displayNameForPeer: objc.instanceSelector("displayNameForPeer:"),

    // Connecting to a Remote Peer
    connectToPeer: objc.instanceSelector("connectToPeer:withTimeout:"),
    cancelConnectToPeer: objc.instanceSelector("cancelConnectToPeer:"),

    // Receiving Connections from a Remote Peer
    acceptConnectionFromPeer: objc.instanceSelector("acceptConnectionFromPeer:error:"),
    denyConnectionFromPeer: objc.instanceSelector("denyConnectionFromPeer:"),

    // Working with Connected Peers
    setDataReceiveHandler: objc.instanceSelector("setDataReceiveHandler:withContext:"),
    sendDataToPeers: objc.instanceSelector("sendData:toPeers:withDataMode:error:"),
    sendDataToAllPeers: objc.instanceSelector("sendDataToAllPeers:withDataMode:error:"),
    disconnectTimeout: objc.instanceProperty(),
    disconnectFromAllPeers: objc.instanceSelector("disconnectFromAllPeers"),
    disconnectPeerFromAllPeers: objc.instanceSelector("disconnectPeerFromAllPeers:"),

    // Information About the Session
    displayName: objc.instanceProperty(),
    peerID: objc.instanceProperty(),
    sessionID: objc.instanceProperty(),
    sessionMode: objc.instanceProperty()

}));
