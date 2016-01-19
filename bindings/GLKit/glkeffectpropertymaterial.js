// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { GLKEffectProperty } from 'glkeffectproperty';

export let GLKEffectPropertyMaterial = GLKEffectProperty.extendClass ("GLKEffectPropertyMaterial", () => ({

    // Material Properties
    ambientColor: instanceProperty(),
    diffuseColor: instanceProperty(),
    emissiveColor: instanceProperty(),
    shininess: instanceProperty(),
    specularColor: instanceProperty()

}));
