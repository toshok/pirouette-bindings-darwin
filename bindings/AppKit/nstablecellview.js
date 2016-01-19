// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSView } from 'nsview';

export let NSTableCellView = NSView.extendClass("NSTableCellView", () => ({
  // Represented Object
  objectValue: instanceProperty(),

  // Displayed Items
  imageView: instanceProperty(),
  textField: instanceProperty(),

  // Getting and Setting the Background Style
  backgroundStyle: instanceProperty(),

  // Getting and Setting the Row Size Style
  rowSizeStyle: instanceProperty(),

  // Dragging Images
  draggingImageComponents: instanceProperty({ set: null })

}));
