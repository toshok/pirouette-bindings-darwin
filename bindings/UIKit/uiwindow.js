// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';

//console.log("UIWindow");
export let UIWindow = UIView.extendClass ("UIWindow", () => ({

    // Configuring Windows
    windowLevel: instanceProperty(),
    screen: instanceProperty(),
    rootViewController: instanceProperty(),

    // Making Windows Key
    keyWindow: instanceProperty(),
    makeKeyAndVisible: instanceSelector("makeKeyAndVisible"),
    becomeKeyWindow:   instanceSelector("becomeKeyWindow"),
    makeKeyWindow:     instanceSelector("makeKeyWindow"),
    resignKeyWindow:   instanceSelector("resignKeyWindow"),

    // Converting Coordinates
    convertPointToWindow:   instanceSelector("convertPoint:toWindow:"),
    convertPointFromWindow: instanceSelector("convertPoint:fromWindow:"),
    convertRectToWindow:    instanceSelector("convertRect:toWindow:"),
    convertRectFromWindow:  instanceSelector("convertRect:fromWindow:"),

    // Sending Events
    sendEvent:              instanceSelector("sendEvent:")

}));
