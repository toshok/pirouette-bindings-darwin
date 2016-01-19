// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CAGradientLayer = CALayer.extendClass("CAGradientLayer", () => ({

    // Gradient Style Properties
    colors: instanceProperty(),
    locations: instanceProperty(),
    endPoint: instanceProperty(),
    startPoint: instanceProperty(),
    type: instanceProperty()

}));
