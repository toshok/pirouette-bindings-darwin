// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIBarItem } from 'uibaritem';

//console.log("UITabBarItem");
export let UITabBarItem = UIBarItem.extendClass ("UITabBarItem", () => ({

    // Initializing a Item
    initWithTabBarSystemItem: instanceSelector("initWithTabBarSystemItem:tag:"),
    initWithTitle:            instanceSelector("initWithTitle:image:tag:"),

    // Getting and Setting Properties
    badgeValue: instanceProperty(),

    // Managing the Finished Selected Image
    finishedSelectedImage:    instanceSelector("finishedSelectedImage"),
    finishedUnselectedImage:  instanceSelector("finishedUnselectedImage"),
    setFinishedSelectedImage: instanceSelector("setFinishedSelectedImage:withFinishedUnselectedImage:"),

    // Customizing Appearance
    titlePositionAdjustment:    instanceSelector("titlePositionAdjustment"),
    setTitlePositionAdjustment: instanceSelector("setTitlePositionAdjustment:")

}));
