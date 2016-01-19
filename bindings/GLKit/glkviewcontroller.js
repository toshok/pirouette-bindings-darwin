// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, autoboxProperty } from '../objc';
import { UIViewController } from '../uikit';
import { GLKViewControllerDelegate } from 'glkviewcontrollerdelegate';

export let GLKViewController = UIViewController.extendClass ("GLKViewController", () => ({

    // Configuring the Frame Rate
    preferredFramesPerSecond: instanceProperty(),
    framesPerSecond: instanceProperty(),

    // Configuring the Delegate
    delegate: autoboxProperty(GLKViewControllerDelegate),

    // Controlling Frame Updates
    paused: instanceProperty({ get: "isPaused" }),
    pauseOnWillResignActive: instanceProperty(),
    resumeOnDidBecomeActive: instanceProperty(),

    // Obtaining Information About View Updates
    framesDisplayed: instanceProperty(),
    timeSinceFirstResume: instanceProperty(),
    timeSinceLastResume: instanceProperty(),
    timeSinceLastUpdate: instanceProperty(),
    timeSinceLastDraw: instanceProperty()

}));
