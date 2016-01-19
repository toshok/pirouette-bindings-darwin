// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIResponder");
export let UIResponder = NSObject.extendClass ("UIResponder", () => ({

    // Managing the Responder Chain
    nextResponder:           instanceProperty(),
    isFirstResponder:        instanceProperty(),
    canBecomeFirstResponder: instanceProperty(),
    becomeFirstResponder:    instanceSelector(),
    canResignFirstResponder: instanceProperty(),
    resignFirstResponder:    instanceSelector(),

    // Managing Input Views
    inputView: instanceProperty(),
    inputAccessoryView: instanceProperty(),
    reloadInputViews: instanceSelector(),

    // Responding to Touch Events
    touchesBegan:     instanceSelector("touchesBegan:withEvent:"),
    touchesMoved:     instanceSelector("touchesMoved:withEvent:"),
    touchesEnded:     instanceSelector("touchesEnded:withEvent:"),
    touchesCancelled: instanceSelector("touchesCancelled:withEvent:"),

    // Responding to Motion Events
    motionBegan:     instanceSelector("motionBegan:withEvent:"),
    motionEnded:     instanceSelector("motionEnded:withEvent:"),
    motionCancelled: instanceSelector("motionCancelled:withEvent:"),

    // Responding to Remote-Control Events
    remoteControlReceived: instanceSelector("remoteControlReceivedWithEvent:"),

    // Getting the Undo Manager
    undoManager: instanceProperty(),

    // Validating Commands
    canPerformAction: instanceSelector("canPerformAction:withSender:")

}));
