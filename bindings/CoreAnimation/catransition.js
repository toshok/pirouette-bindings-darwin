// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

export let CATransition = NSObject.extendClass("CATransition", () => ({

  // Transition Start and End Point
  startProgress: instanceProperty(),
  endProgress: instanceProperty(),

  // Transition Properties
  type: instanceProperty(),
  subtype: instanceProperty(),

  // Custom Transition Filter
  filter: instanceProperty()

}));
