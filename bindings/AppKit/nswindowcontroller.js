// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, chainCtor } from '../objc';
import { NSResponder } from '../foundation';

export let NSWindowController = NSResponder.extendClass("NSWindowController", () => ({
  constructor: function (handle, arg2) {
    if (typeof (handle) === 'string') {
      chainCtor (NSWindowController, this, []);
      this.initWithWindowNibName (arg2);
    }
    else {
      chainCtor (NSWindowController, this, arguments);
    }
  },

  window: instanceProperty(),

  initWithWindow: instanceSelector("initWithWindow:"),
  initWithWindowNibName: instanceSelector("initWithWindowNibName:")

}));
