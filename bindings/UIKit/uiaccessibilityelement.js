// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

console.log("UIAccessibilityElement");

export let UIAccessibilityElement = NSObject.extendClass ("UIAccessibilityElement", () => ({
  // Creating an Accessibility Element
  initWithAccessibilityContainer: instanceSelector("initWithAccessibilityContainer:"),

  // Accessing the Containing View
  accessibilityContainer: instanceProperty(),

  // Determining Accessibility
  isAccessibilityElement: instanceProperty(),

  // Accessing the Attributes of an Accessibility Element
  accessibilityLabel: instanceProperty(),
  accessibilityHint: instanceProperty(),
  accessibilityValue: instanceProperty(),
  accessibilityFrame: instanceProperty(),
  accessibilityTraits: instanceProperty()

}));
