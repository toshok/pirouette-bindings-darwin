// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { GLKEffectProperty } from 'glkeffectproperty';

export let GLKEffectPropertyLight = GLKEffectProperty.extendClass ("GLKEffectPropertyLight", () => ({

    // Configuring Common Lighting Properties
    enabled: instanceProperty(),
    position: instanceProperty(),
    transform: instanceProperty(),

    // Configuring Light Colors
    ambientColor: instanceProperty(),
    diffuseColor: instanceProperty(),
    specularColor: instanceProperty(),

    // Configuring Lighting Attenuation
    constantAttenuation: instanceProperty(),
    linearAttenuation: instanceProperty(),
    quadraticAttenuation: instanceProperty(),

    // Configuring Spotlight Properties
    spotCutoff: instanceProperty(),
    spotDirection: instanceProperty(),
    spotExponent: instanceProperty()

}));
