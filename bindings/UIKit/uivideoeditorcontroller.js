// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, staticSelector } from '../objc';
import { UINavigationController } from 'uinavigationcontroller';
import { UIVideoEditorControllerDelegate } from 'uivideoeditorcontrollerdelegate';

//console.log("UIVideoEditorController");
export let UIVideoEditorController = UINavigationController.extendClass ("UIVideoEditorController", () => ({

    // Determining Editing Availability
    canEditVideoAtPath: staticSelector("canEditVideoAtPath:"),

    // Configuring the Editor
    delegate: autoboxProperty(UIVideoEditorControllerDelegate),
    videoMaximumDuration: instanceProperty(),
    videoPath: instanceProperty(),
    videoQuality: instanceProperty()

}));
