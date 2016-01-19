// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CAReplicatorLayer = CALayer.extendClass("CAReplicatorLayer", () => ({

    // Setting Instance Display Properties
    instanceCount: instanceProperty(),
    instanceDelay: instanceProperty(),
    instanceTransform: instanceProperty(),

    // Modifying Instance Layer Geometry
    preservesDepth: instanceProperty(),

    // Accessing Instance Color Values
    instanceColor: instanceProperty(),
    instanceRedOffset: instanceProperty(),
    instanceGreenOffset: instanceProperty(),
    instanceBlueOffset: instanceProperty(),
    instanceAlphaOffset: instanceProperty()

}));
