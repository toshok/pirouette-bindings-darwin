// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector } from '../objc';
import { CALayer } from 'calayer';

export let CAScrollLayer = CALayer.extendClass("CAScrollLayer", () => ({

    // Scrolling Constraints
    scrollMode: instanceSelector(),

    // Scrolling the Layer
    scrollToPoint: instanceSelector("scrollToPoint:"),
    scrollToRect: instanceSelector("scrollToRect:")

}));
