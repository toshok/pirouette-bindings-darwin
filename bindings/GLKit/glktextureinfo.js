// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

export let GLKTextureInfo = NSObject.extendClass ("GLKTextureInfo", () => ({

    // Reading Texture Information
    glName: instanceProperty(),
    glTarget: instanceProperty(),
    height: instanceProperty(),
    width: instanceProperty(),
    textureOrigin: instanceProperty(),
    alphaState: instanceProperty(),
    containsMipmaps: instanceProperty()

}));
