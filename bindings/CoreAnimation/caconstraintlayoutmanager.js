// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let CAConstraintLayoutManager = NSObject.extendClass("CAConstraintLayoutManager", () => ({

    // Creating the Layout Manager
    layoutManager: staticSelector("layoutManager")

}));
