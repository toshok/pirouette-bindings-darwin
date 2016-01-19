// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("GKPeerPickerControllerDelegate");

var GKPeerPickerControllerDelegate;
_exports.GKPeerPickerControllerDelegate = GKPeerPickerControllerDelegate = foundation.Protocol.extendClass ("GKPeerPickerControllerDelegate", () => ({

    // Creating a Session for the Peer Picker
    didSelectConnectionType:  objc.optionalMethod("peerPickerController:didSelectConnectionType:"),
    sessionForConnectionType: objc.optionalMethod("peerPickerController:sessionForConnectionType:"),

    // Responding to Connection Messages
    didConnectPeer:           objc.optionalMethod("peerPickerController:didConnectPeer:toSession:"),

    // Responding When the User Cancels the Connection Attempt
    didCancel:                objc.optionalMethod("peerPickerControllerDidCancel:")

}));
