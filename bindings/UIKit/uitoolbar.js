// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, sig } from '../objc';
import { NSObject } from '../foundation';
import { UIView } from 'uiview';

//console.log("UIToolbar");
export let UIToolbar = UIView.extendClass ("UIToolbar", () => ({

    // Configuring the Toolbar
    barStyle: instanceProperty(),
    translucent: instanceProperty(),

    // Configuring Toolbar Items
    items: instanceProperty({ set: function(v) { return this.setItems (v, false); } }),
    setItems: instanceSelector("setItems:animated:").
                            returns( function() { return sig.Void; }).
			     params( function(v) { return [ NSObject, sig.Bool ]; }), // XXX param 1 is actually an array, we should have a sig.NSArray for that

    // Customizing Appearance
    backgroundImage:    instanceSelector("backgroundImageForToolbarPosition:barMetrics:"),
    setBackgroundImage: instanceSelector("setBackgroundImage:forToolbarPosition:barMetrics:"),
    tintColor: instanceProperty()

}));
