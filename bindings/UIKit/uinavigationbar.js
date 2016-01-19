// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UINavigationBarDelegate } from 'uinavigationbardelegate';
import { UIView } from 'uiview';

//console.log("UINavigationBar");
export let UINavigationBar = UIView.extendClass ("UINavigationBar", () => ({

    // Configuring Navigation Bars
    barStyle: instanceProperty(),
    translucent: instanceProperty(),

    // Assigning the Delegate
    delegate: autoboxProperty(UINavigationBarDelegate),

    // Pushing and Popping Items
    pushNavigationItem: instanceSelector("pushNavigationItem:animated:"),
    popNavigationItem:  instanceSelector("popNavigationItemAnimated:"),
    setItems:           instanceSelector("setItems:animated:"),
    items: instanceProperty({ set: function(v) { return this.setItems(v, false); } }),
    topItem: instanceProperty(),
    backItem: instanceProperty(),

    // Customizing the Bar Appearance
    backgroundImage:                    instanceSelector("backgroundImageForBarMetrics:"),
    setBackgroundImage:                 instanceSelector("setBackgroundImage:forBarMetrics:"),
    titleVerticalPositionAdjustment:    instanceSelector("titleVerticalPositionAdjustmentForBarMetrics:"),
    setTitleVerticalPositionAdjustment: instanceSelector("setTitleVerticalPositionAdjustment:forBarMetrics:"),
    tintColor: instanceProperty(),
    titleTextAttributes: instanceProperty()

}));
