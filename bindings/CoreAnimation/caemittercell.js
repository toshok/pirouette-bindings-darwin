// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CAEmitterCell = NSObject.extendClass("CAEmitterCell", () => ({

    // Creating and Initializing an Emitter Cell
    emitterCell: staticSelector(),

    // Providing Emitter Cell Content
    contents: instanceProperty(),
    contentsRect: instanceProperty(),
    emitterCells: instanceProperty(),

    // Setting Emitter Cell Visual Attributes
    enabled: instanceProperty(),
    color: instanceProperty(),
    redRange: instanceProperty(),
    greenRange: instanceProperty(),
    blueRange: instanceProperty(),
    alphaRange: instanceProperty(),
    redSpeed: instanceProperty(),
    greenSpeed: instanceProperty(),
    blueSpeed: instanceProperty(),
    alphaSpeed: instanceProperty(),
    magnificationFilter: instanceProperty(),
    minificationFilter: instanceProperty(),
    minificationFilterBias: instanceProperty(),
    scale: instanceProperty(),
    scaleRange: instanceProperty(),
    name: instanceProperty(),
    style: instanceProperty(),

    // Emitter Cell Motion Attributes
    spin: instanceProperty(),
    spinRange: instanceProperty(),
    emissionLatitude: instanceProperty(),
    emissionLongitude: instanceProperty(),
    emissionRange: instanceProperty(),

    // Emission Cell Temporal Attributes
    lifetime: instanceProperty(),
    lifetimeRange: instanceProperty(),
    birthRate: instanceProperty(),
    scaleSpeed: instanceProperty(),
    velocity: instanceProperty(),
    velocityRange: instanceProperty(),
    xAcceleration: instanceProperty(),
    yAcceleration: instanceProperty(),
    zAcceleration: instanceProperty(),

    // Key-Value Coding Extensions
    defaultValueForKey: staticSelector("defaultValueForKey:"),
    shouldArchiveValueForKey: instanceSelector("shouldArchiveValueForKey:")
}));
