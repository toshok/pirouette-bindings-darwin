// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIImagePickerControllerDelegate");
export let UIImagePickerControllerDelegate = Protocol.extendClass("UIImagePickerControllerDelegate", () => ({

    // Closing the Picker
    didFinishPickingMediaWithInfo: optionalMethod("imagePickerController:didFinishPickingMediaWithInfo:"),
    didCancel:                     optionalMethod("imagePickerControllerDidCancel:"),
    didFinishPickingImage:         optionalMethod("imagePickerController:didFinishPickingImage:editingInfo:") // Deprecated in iOS 3.0

}));
