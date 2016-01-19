// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CAEAGLLayer = CALayer.extendClass("CAEAGLLayer", () => ({
    // Accessing the Layer Properties
    drawableProperties: instanceProperty()
}));
