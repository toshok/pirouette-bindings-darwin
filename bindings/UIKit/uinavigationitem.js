// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { NSObject } from '../foundation';
import { instanceProperty, instanceSelector } from '../objc';

//console.log("UINavigationItem");
export let UINavigationItem = NSObject.extendClass ("UINavigationItem", () => ({

    // Initializing an Item
    initWithTitle: instanceSelector("initWithTitle:"),

    // Getting and Setting Properties
    title:   instanceProperty(),
    prompt:   instanceProperty(),
    backBarButtonItem:   instanceProperty(),
    hidesBackButton:   instanceProperty({ set: function(v) { return this.setHidesBackButton(v, false); } }),
    setHidesBackButton: instanceSelector("setHidesBackButton:animated:"),
    leftItemsSupplementBackButton:   instanceProperty(),

    // Customizing Views
    titleView:       instanceProperty(),
    leftBarButtonItems:       instanceProperty({ set: function(v) { return this.setLeftBarButtonItems(v, false); } }),
    leftBarButtonItem:       instanceProperty({ set: function(v) { return this.setLeftBarButtonItem(v, false); } }),
    rightBarButtonItems:       instanceProperty({ set: function(v) { return this.setRightBarButtonItems(v, false); } }),
    rightBarButtonItem:       instanceProperty({ set: function(v) { return this.setRightBarButtonItem(v, false); } }),
    setLeftBarButtonItems:  instanceSelector("setLeftBarButtonItems:animated:"),
    setLeftBarButtonItem:   instanceSelector("setLeftBarButtonItem:animated:"),
    setRightBarButtonItems: instanceSelector("setRightBarButtonItems:animated:"),
    setRightBarButtonItem:  instanceSelector("setRightBarButtonItem:animated:")

}));
