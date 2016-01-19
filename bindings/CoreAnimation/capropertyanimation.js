// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, staticSelector } from '../objc';
import { CAAnimation } from 'caanimation';

export let CAPropertyAnimation = CAAnimation.extendClass("CAPropertyAnimation", () => ({

    // Animated Key Path
    keyPath: instanceProperty(),

    // Property Value Calculation Behavior
    cumulative: instanceProperty(),
    additive: instanceProperty(),
    valueFunction: instanceProperty(),

    // Creating an Animation
    animationWithKeyPath: staticSelector("animationWithKeyPath:")

}));
