// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { GLKEffectProperty } from 'glkeffectproperty';

export let GLKEffectPropertyTransform = GLKEffectProperty.extendClass ("GLKEffectPropertyTransform", () => ({

    // Configuring Modelview Properties
    modelviewMatrix: instanceProperty(),
    normalMatrix: instanceProperty(),

    // Configuring the Projection Matrix
    projectionMatrix: instanceProperty(),

    // Configuring the Transform Matrix
    transformMatrix: instanceProperty()
}));
