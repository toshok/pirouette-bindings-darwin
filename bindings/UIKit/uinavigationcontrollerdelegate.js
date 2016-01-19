// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UINavigationControllerDelegate");
export let UINavigationControllerDelegate = Protocol.extendClass("UINavigationControllerDelegate", () => ({

    // Customizing Behavior
    willShowViewController: optionalMethod("navigationController:willShowViewController:animated:"),
    didShowViewController:  optionalMethod("navigationController:didShowViewController:animated:")

}));
