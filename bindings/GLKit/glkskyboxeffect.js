// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { GLKBaseEffect } from 'glkbaseeffect';

export let GLKSkyboxEffect = GLKBaseEffect.extendClass ("GLKSkyboxEffect", () => ({

    // Naming the Effect
    label: instanceProperty(),

    // Preparing the Effect for Rendering
    prepareToDraw: instanceSelector("prepareToDraw"),

    // Drawing the Skybox
    draw: instanceSelector("draw"),

    // Configuring the Skybox
    textureCubeMap: instanceProperty(),
    center: instanceProperty(),
    xSize: instanceProperty(),
    ySize: instanceProperty(),
    zSize: instanceProperty(),

    // Setting the Skybox Transform
    transform: instanceProperty()

}));
