// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIScreenMode");
export let UIScreenMode = NSObject.extendClass ("UIScreenMode", () => ({

    // Accessing the Screen Mode Attributes
    size: instanceProperty(),
    pixelAspectRatio: instanceProperty()

}));
