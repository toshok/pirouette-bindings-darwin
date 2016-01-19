// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CATiledLayer = CALayer.extendClass("CATiledLayer", () => ({

    // Visual Fade
    fadeDuration: staticSelector("fadeDuration"),

    // Levels of Detail
    levelsOfDetail: instanceProperty(),
    levelsOfDetailBias: instanceProperty(),

    // Layer Tile Size
    tileSize: instanceProperty()
}));
