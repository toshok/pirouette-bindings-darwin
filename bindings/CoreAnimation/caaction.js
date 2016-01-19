// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let CAAction = Protocol.extendClass("CAAction", () => ({

    runAction:  optionalMethod("runActionForKey:object:arguments:")

}));
