// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { NSControl, NSControlProxy } from 'nscontrol';

export let NSTextField = NSControl.extendClass("NSTextField", () => ({

    // Controlling Selection and Editing
    //
    editable: instanceProperty({ get: "isEditable" }),
    selectable: instanceProperty({ get: "isSelectable" }),

    // Controlling Rich Text Behavior
    //
    allowsEditingTextAttributes: instanceProperty(),
    importsGraphics: instanceProperty(),

    // Setting the Text Color
    //
    textColor: instanceProperty(),

    // Autolayout Sizing
    //
    preferredMaxLayoutWidth: instanceProperty(),

    // Controlling the Background
    //
    backgroundColor: instanceProperty(),
    drawsBackground: instanceProperty(),

    // Setting a Border
    //
    bezeled: instanceProperty({ get: "isBezeled" }),
    bezelStyle: instanceProperty(),
    bordered: instanceProperty({ get: "isBordered" }),

    // Selecting the Text
    //
    selectText: instanceSelector("selectText:"),

    // Working with the Responder Chain
    //
    acceptsFirstResponder: instanceSelector(),
    nextText: instanceProperty(),         // Available in OS X v10.0 through OS X v10.1
    previousText: instanceProperty(),     // Available in OS X v10.0 through OS X v10.1

    // Using Keyboard Interface Control
    //
    setTitleWithMnemonic: instanceSelector("setTitleWithMnemonic:"), // Deprecated in OS X v10.8

    // Setting the Delegate
    //
    delegate: autoboxProperty(NSObject), // XXX NSTextFieldDelegate

    // NSText Delegate Method Implementations
    //
    textShouldBeginEditing: instanceSelector("textShouldBeginEditing:"),
    textDidBeginEditing: instanceSelector("textDidBeginEditing:"),
    textDidChange: instanceSelector("textDidChange:"),
    textShouldEndEditing: instanceSelector("textShouldEndEditing:"),
    textDidEndEditing: instanceSelector("textDidEndEditing:"),

    textChanged: instanceProperty({
      set: function (v) {
        if (v) {
          this.proxy = new NSControlProxy(v);
          this.target = this.proxy;
          this.action = this.proxy.proxyAction;
        }
        else {
          this.proxy = null;
          this.target = null;
          this.action = null;
        }
      },
      get: null // TODO
    })

}));

NSTextField.newWithFrame = function (frame) {
  return NSTextField.newWith({ initWith: "Frame", args: [frame] });
};
