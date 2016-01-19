// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CAAnimation } from 'caanimation';

export let CAKeyFrameAnimation = CAAnimation.extendClass("CAKeyFrameAnimation", () => ({

    // Providing Keyframe Values
    path: instanceProperty(),
    values: instanceProperty(),

    // Keyframe Timing
    keyTimes: instanceProperty(),
    timingFunctions: instanceProperty(),
    calculationMode: instanceProperty(),

    // Rotation Mode Attribute
    rotationMode: instanceProperty(),

    // Cubic Mode Attributes
    tensionValues: instanceProperty(),
    continuityValues: instanceProperty(),
    biasValues: instanceProperty()

}));
