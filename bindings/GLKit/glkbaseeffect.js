// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

export let GLKBaseEffect = NSObject.extendClass("GLKBaseEffect", () => ({

    // XXX ES6-port
    // @mixinProtocol GLKNamedEffect

    // Naming the Effect
    label: instanceProperty(),

    // Configuring the Modelview Transform
    transform: instanceProperty(),

    // Configuring Lights
    lightingType: instanceProperty(),
    lightModelTwoSided: instanceProperty(),
    material: instanceProperty(),
    lightModelAmbientColor: instanceProperty(),
    light0: instanceProperty(),
    light1: instanceProperty(),
    light2: instanceProperty(),

    // Configuring Textures
    texturingEnabled: instanceProperty(),
    texture2d0: instanceProperty(),
    texture2d1: instanceProperty(),
    textureOrder: instanceProperty(),

    // Configuring Fog
    fog: instanceProperty(),

    // Configuring Color Information
    colorMaterialEnabled: instanceProperty(),
    useConstantColor: instanceProperty(),
    constantColor: instanceProperty(),

    // Preparing the Effect for Drawing
    prepareToDraw: instanceSelector()
}));
