// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';

//console.log("UIProgressView");
export let UIProgressView = UIView.extendClass ("UIProgressView", () => ({

    // Initializing the UIProgressView Object
    initWithProgressViewStyle: instanceSelector("initWithProgressViewStyle:"),

    // Managing the Progress Bar
    progress: instanceProperty({ set: function (v) { return this.setProgress(v, false); } }),
    setProgress: instanceSelector("setProgress:animated:"),

    // Configuring the Progress Bar
    progressViewStyle: instanceProperty(),
    progressTintColor: instanceProperty(),
    progressImage: instanceProperty(),
    trackTintColor: instanceProperty(),
    trackImage: instanceProperty()

}));
