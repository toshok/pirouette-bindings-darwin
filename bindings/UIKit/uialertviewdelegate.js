// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

console.log("UIAlertViewDelegate");
export let UIAlertViewDelegate = Protocol.extendClass("UIAlertViewDelegate", () => ({

  // Responding to Actions
  clickedButton:                optionalMethod("alertView:clickedButtonAtIndex:"),

  // Customizing Behavior
  shouldEnableFirstOtherButton: optionalMethod("alertViewShouldEnableFirstOtherButton:"),
  willPresent:                  optionalMethod("willPresentAlertView:"),
  didPresent:                   optionalMethod("didPresentAlertView:"),
  willDismiss:                  optionalMethod("alertView:willDismissWithButtonIndex:"),
  didDismiss:                   optionalMethod("alertView:didDismissWithButtonIndex:"),

  // Canceling
  cancel:                       optionalMethod("alertViewCancel:")

}));
