// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CAShapeLayer = CALayer.extendClass("CAShapeLayer", () => ({

    // Specifying the Shape Path
    path: instanceProperty(),

    // Accessing Shape Style Properties
    fillColor: instanceProperty(),
    fillRule: instanceProperty(),
    lineCap: instanceProperty(),
    lineDashPattern: instanceProperty(),
    lineDashPhase: instanceProperty(),
    lineJoin: instanceProperty(),
    lineWidth: instanceProperty(),
    miterLimit: instanceProperty(),
    strokeColor: instanceProperty(),
    strokeStart: instanceProperty(),
    strokeEnd: instanceProperty()

}));
