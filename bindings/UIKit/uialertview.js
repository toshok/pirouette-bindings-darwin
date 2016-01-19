// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UIView } from 'uiview';
import { UIAlertViewDelegate } from 'uialertviewdelegate';

console.log("UIAlertView");
export let UIAlertView = UIView.extendClass ("UIAlertView", () => ({

  // Creating Alert Views
  init: instanceSelector("initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:"),

  // Setting Properties
  delegate:       autoboxProperty(UIAlertViewDelegate),
  alertViewStyle: instanceProperty(),
  title:          instanceProperty(),
  message:        instanceProperty(),
  visible:        instanceProperty(),

  // Configuring Buttons
  addButtonWithTitle:    instanceSelector("addButtonWithTitle:"),
  buttonTitleAtIndex:    instanceSelector("buttonTitleAtIndex:"),
  textFieldAtIndex:      instanceSelector("textFieldAtIndex:"),
  numberOfButtons:       instanceProperty(),
  cancelButtonIndex:     instanceProperty(),
  firstOtherButtonIndex: instanceProperty(),

  // Displaying
  show: instanceSelector("show"),

  // Dismissing
  dismissWithClickedButtonIndex: instanceSelector("dismissWithClickedButtonIndex:animated:")

}));
