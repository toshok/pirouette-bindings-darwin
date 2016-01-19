// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

console.log("UIPopoverControllerDelegate");

export let UIPopoverControllerDelegate = Protocol.extendClass("UIPopoverControllerDelegate", () => ({

    // Managing the Popover’s Dismissal
    shouldDismissPopover: optionalMethod("popoverControllerShouldDismissPopover:"),
    didDismissPopover:    optionalMethod("popoverControllerDidDismissPopover:")

}));
