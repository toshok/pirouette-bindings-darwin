// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { GLKEffectProperty } from 'glkeffectproperty';

export let GLKEffectPropertyFog = GLKEffectProperty.extendClass ("GLKEffectPropertyFog", () => ({
    // Enabling Fog
    enabled: instanceProperty(),

    // Choosing the Fog Mode
    mode: instanceProperty(),

    // Fog Properties
    color: instanceProperty(),
    density: instanceProperty(),
    start: instanceProperty(),
    end: instanceProperty()
}));
