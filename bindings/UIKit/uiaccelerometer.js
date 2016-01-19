// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, staticProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { UIAccelerometerDelegate } from 'uiaccelerometerdelegate';

export let UIAccelerometer = NSObject.extendClass ("UIAccelerometer", () => ({

  // Getting the Shared Accelerometer Object
  sharedAccelerometer: staticProperty(),

  // Accessing the Accelerometer Properties
  updateInterval: instanceProperty(),
  delegate:       autoboxProperty (UIAccelerometerDelegate)
}));
