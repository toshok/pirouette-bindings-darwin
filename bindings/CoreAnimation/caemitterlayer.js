// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CAEmitterLayer = CALayer.extendClass("CAEmitterLayer", () => ({

    // Specifying Particle Emitter Cells
    emitterCells: instanceProperty(),

    // Emitter Geometry
    renderMode: instanceProperty(),
    emitterPosition: instanceProperty(),
    emitterShape: instanceProperty(),
    emitterZPosition: instanceProperty(),
    emitterDepth: instanceProperty(),
    emitterSize: instanceProperty(),

    // Emitter Cell Attribute Multipliers
    scale: instanceProperty(),
    seed: instanceProperty(),
    spin: instanceProperty(),
    velocity: instanceProperty(),
    birthRate: instanceProperty(),
    emitterMode: instanceProperty(),
    lifetime: instanceProperty(),
    preservesDepth: instanceProperty()

}));
