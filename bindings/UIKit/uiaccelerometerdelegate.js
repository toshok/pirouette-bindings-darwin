// This file is part of Pirouette.  for licensing information, see the LICENSE file

console.log("UIAccelerometerDelegate");

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let UIAccelerometerDelegate = Protocol.extendClass("UIAccelerometerDelegate", () => ({

  didAccelerate:  optionalMethod("accelerometer:didAccelerate:")  // Deprecated in iOS 5.0

}));
