// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIVideoEditorControllerDelegate");
export let UIVideoEditorControllerDelegate = Protocol.extendClass("UIVideoEditorControllerDelegate", () => ({

    // Closing the Video Editor
    didSaveEditedVideoToPath: optionalMethod("videoEditorController:didSaveEditedVideoToPath:"),
    didCancel:                optionalMethod("videoEditorControllerDidCancel:"),

    // Handling Errors
    didFailWithError:         optionalMethod("videoEditorController:didFailWithError:")

}));
