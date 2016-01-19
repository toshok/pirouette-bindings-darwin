// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { GLKBaseEffect } from 'glkbaseeffect';

export let GLKReflectionMapEffect = GLKBaseEffect.extendClass ("GLKReflectionMapEffect", () => ({

    // Preparing the Reflection Effect
    prepareToDraw: instanceSelector("prepareToDraw"),

    // Effect Properties
    textureCubeMap: instanceProperty(),
    matrix: instanceProperty()

}));
