// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';

export let NSAnimation = NSObject.extendClass("NSAnimation", () => ({
    // Initializing an NSAnimation Object
    //
    initWithDuration: instanceSelector("initWithDuration:animationCurve:"),

    // Configuring an Animation
    //
    animationBlockingMode:    instanceProperty(),
    runLoopModesForAnimating: instanceProperty({ set: null }),
    animationCurve:           instanceProperty(),
    duration:                 instanceProperty(),
    frameRate:                instanceProperty(),

    // Managing the Delegate
    //
    delegate: autoboxProperty(NSObject /* XXX should be NSAnimationDelegate*/),

    // Controlling and Monitoring an Animation
    //
    startAnimation:  instanceSelector("startAnimation"),
    stopAnimation:   instanceSelector("stopAnimation"),
    isAnimating:     instanceProperty({ set: null }),
    currentProgress: instanceProperty(),
    currentValue:    instanceProperty({ set: null }),

    // Managing Progress Marks
    //
    addProgressMark:    instanceSelector("addProgressMark:"),
    removeProgressMark: instanceSelector("removeProgressMark:"),
    progressMarks:      instanceProperty(),

    // Linking Animations Together
    //
    startWhenAnimationReachesProgress: instanceSelector("startWhenAnimation:reachesProgress:"),
    stopWhenAnimationReachesProgress:  instanceSelector("stopWhenAnimation:reachesProgress:"),
    clearStartAnimation:               instanceSelector("clearStartAnimation"),
    clearStopAnimation:                instanceSelector("clearStopAnimation")
}));
