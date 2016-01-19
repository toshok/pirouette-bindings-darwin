// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { GLKEffectProperty } from 'glkeffectproperty';

export let GLKEffectPropertyTexture = GLKEffectProperty.extendClass ("GLKEffectPropertyTexture", () => ({

    // Configuring Texture Properties
    enabled: instanceProperty(),
    envMode: instanceProperty(),
    glName: instanceProperty(),
    target: instanceProperty()
}));
