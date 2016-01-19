// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

export let UIAcceleration = NSObject.extendClass ("UIAcceleration", () => ({

  // Accessing the Acceleration Values
  x: instanceProperty(),
  y: instanceProperty(),
  z: instanceProperty(),
  timestamp: instanceProperty()

}));
