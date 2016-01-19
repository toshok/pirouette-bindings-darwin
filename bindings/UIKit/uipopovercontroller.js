// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { UIPopoverControllerDelegate } from 'uipopovercontrollerdelegate';

//console.log("UIPopoverController");
export let UIPopoverController = NSObject.extendClass ("UIPopoverController", () => ({

    // Initializing the Popover
    initWithContentViewController: instanceSelector("initWithContentViewController:"),

    // Configuring the Popover Attributes
    setContentViewController: instanceSelector("setContentViewController:animated:"),
    setPopoverContentSize:    instanceSelector("setPopoverContentSize:animated:"),
    contentViewController: instanceProperty({ set: function(v) { return this.setContentViewController(v, false); } }),
    popoverContentSize: instanceProperty({ set: function(v) { return this.setPopoverContentSize(v, false); } }),
    passthroughViews: instanceProperty(),
    delegate: autoboxProperty(UIPopoverControllerDelegate),

    // Getting the Popover Attributes
    popoverVisible: instanceProperty(),
    popoverArrowDirection: instanceProperty(),

    // Presenting and Dismissing the Popover
    presentPopoverFromRect:          instanceSelector("presentPopoverFromRect:inView:permittedArrowDirections:animated:"),
    presentPopoverFromBarButtonItem: instanceSelector("presentPopoverFromBarButtonItem:permittedArrowDirections:animated:"),
    dismissPopover:                  instanceSelector("dismissPopoverAnimated:"),

    // Customizing the Popover Appearance
    popoverLayoutMargins: instanceProperty(),
    popoverBackgroundViewClass: instanceProperty()

}));
