// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceProperty } from '../objc';
import { UIView } from 'uiview';

//console.log("UIPopoverBackgroundView");
export let UIPopoverBackgroundView = UIView.extendClass ("UIPopoverBackgroundView", () => ({

    // Returning the Content View Insets
    contentViewInsets: staticSelector("contentViewInsets"),

    // Accessing the Arrow Metrics
    arrowOffset:    instanceProperty(),
    arrowDirection: instanceProperty(),

    arrowHeight: staticSelector("arrowHeight"),
    arrowBase:   staticSelector("arrowBase")

}));
