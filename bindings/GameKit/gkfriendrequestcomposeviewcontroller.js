// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKFriendRequestComposeViewController;
_exports.GKFriendRequestComposeViewController = GKFriendRequestComposeViewController = ui.UINavigationController.extendClass ("GKFriendRequestComposeViewController", () => ({

    // Determining the Maximum Number of Recipients
    maxNumberOfRecipients: objc.staticSelector("maxNumberOfRecipients"),

    // Delegate
    composeViewDelegate: objc.autoboxProperty(GKFriendRequestComposeViewControllerDelegate),

    // Adding Recipients
    addRecipientsWithEmailAddresses: objc.instanceSelector("addRecipientsWithEmailAddresses:"),
    addRecipientsWithPlayerIDs: objc.instanceSelector("addRecipientsWithPlayerIDs:"),

    // Setting an Invitation Message
    setMessage: objc.instanceSelector("setMessage:")

}));
