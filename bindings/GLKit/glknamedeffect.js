// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { requiredMethod } from '../objc';
import { Protocol } from '../foundation';

export let GLKNamedEffect = Protocol.extendClass("GLKNamedEffect", () => ({

    // Binding the Shader Program
    prepareToDraw:  requiredMethod("prepareToDraw")

}));
