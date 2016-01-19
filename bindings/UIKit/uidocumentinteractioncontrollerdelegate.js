// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIDocumentInteractionControllerDelegate");
export let UIDocumentInteractionControllerDelegate = Protocol.extendClass("UIDocumentInteractionControllerDelegate", () => ({

    // Configuring the Parent View Controller
    viewControllerForPreview: optionalMethod("documentInteractionControllerViewControllerForPreview:"),
    viewForPreview:           optionalMethod("documentInteractionControllerViewForPreview:"),
    rectForPreview:           optionalMethod("documentInteractionControllerRectForPreview:"),

    // Presenting the User Interface
    willBeginPreview:         optionalMethod("documentInteractionControllerWillBeginPreview:"),
    didEndPreview:            optionalMethod("documentInteractionControllerDidEndPreview:"),
    willPresentOptionsMenu:   optionalMethod("documentInteractionControllerWillPresentOptionsMenu:"),
    didDismissOptionsMenu:    optionalMethod("documentInteractionControllerDidDismissOptionsMenu:"),
    willPresentOpenInMenu:    optionalMethod("documentInteractionControllerWillPresentOpenInMenu:"),
    didDismissOpenInMenu:     optionalMethod("documentInteractionControllerDidDismissOpenInMenu:"),

    // Opening Files
    willBeginSendingToApplication: optionalMethod("documentInteractionController:willBeginSendingToApplication:"),
    didEndSendingToApplication:    optionalMethod("documentInteractionController:didEndSendingToApplication:"),

    // Managing Actions
    canPerformAction:         optionalMethod("documentInteractionController:canPerformAction:"),
    performAction:            optionalMethod("documentInteractionController:performAction:")

}));
