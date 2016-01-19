// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let UIActionSheetDelegate = Protocol.extendClass("UIActionSheetDelegate", () => ({
  // Responding to Actions
  clickedButton:  optionalMethod("actionSheet:clickedButtonAtIndex:"),

  // Customizing Behavior
  willPresent: optionalMethod("willPresentActionSheet:"),
  didPresent:  optionalMethod("didPresentActionSheet:"),
  willDismiss: optionalMethod("actionSheet:willDismissWithButtonIndex:"),
  didDismiss:  optionalMethod("actionSheet:didDismissWithButtonIndex:"),

  // Canceling
  cancel:      optionalMethod("actionSheetCancel:")
}));
