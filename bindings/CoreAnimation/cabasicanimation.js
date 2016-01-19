// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CAAnimation } from 'caanimation';

export let CABasicAnimation = CAAnimation.extendClass("CABasicAnimation", () => ({

    // Interpolation Values
    fromValue: instanceProperty(),
    toValue: instanceProperty(),
    byValue: instanceProperty()

}));
