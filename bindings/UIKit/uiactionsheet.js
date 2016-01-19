// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { UIActionSheetDelegate } from 'uiactionsheetdelegate';
import { UIView } from 'uiview';

//console.log("UIActionSheet");
export let UIActionSheet = UIView.extendClass ("UIActionSheet", () => ({
  // Creating Action Sheets
  init: instanceSelector("initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:"),

  // Setting Properties
  delegate: autoboxProperty(UIActionSheetDelegate),
  title: instanceProperty(),
  visible: instanceProperty({ set: null, get: "isVisible" }),
  property: instanceProperty(),

  // Configuring Buttons
  addButton:        	  instanceSelector("addButtonWithTitle:"),
  buttonTitle:      	  instanceSelector("buttonTitleAtIndex:"),
  numberOfButtons:        instanceProperty(),
  cancelButtonIndex:      instanceProperty(),
  destructiveButtonIndex: instanceProperty(),
  firstOtherButtonIndex:  instanceProperty(),

  // Presenting the Action Sheet
  showFromTabBar:        instanceSelector("showFromTabBar:"),
  showFromToolbar:       instanceSelector("showFromToolbar:"),
  showInView:            instanceSelector("showInView:"),
  showFromBarButtonItem: instanceSelector("showFromBarButtonItem:animated:"),
  showFromRect:          instanceSelector("showFromRect:inView:animated:"),

  // Dismissing the Action Sheet
  dismissWithClickedButtonIndexAnimated: instanceSelector("dismissWithClickedButtonIndex:animated:")
}));
