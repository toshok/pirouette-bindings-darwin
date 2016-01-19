// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CAAnimation } from 'caanimation';

export let CAAnimationGroup = CAAnimation.extendClass("CAAnimationGroup", () => ({

    // Grouped Animations
    animations: instanceProperty()

}));
