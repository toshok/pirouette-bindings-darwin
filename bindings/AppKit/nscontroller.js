// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector } from '../objc';
import { NSObject } from "../foundation";

export let NSController = NSObject.extendClass("NSController", () => ({
  // Managing Editing
  objectDidBeginEditing: instanceSelector("objectDidBeginEditing:"),
  objectDidEndEditing: instanceSelector("objectDidEndEditing:"),
  commitEditing: instanceSelector("commitEditing"),
  commitEditingWithDelegate: instanceSelector("commitEditingWithDelegate:didCommitSelector:contextInfo:"),
  discardEditing: instanceSelector("discardEditing"),
  isEditing: instanceSelector("isEditing")

}));
