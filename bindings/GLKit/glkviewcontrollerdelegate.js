// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { requiredMethod, optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let GLKViewControllerDelegate = Protocol.extendClass ("GLKViewControllerDelegate", () => ({

    // Handling an Update Event
    update:    requiredMethod("glkViewControllerUpdate:", {sig: "v@:@"}),

    // Pause and Resume Notifications
    willPause: optionalMethod("glkViewController:willPause:" , {sig: "v@:@B"})

}));
