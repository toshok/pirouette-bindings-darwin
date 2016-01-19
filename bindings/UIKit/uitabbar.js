// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';
import { UITabBarDelegate } from 'uitabbardelegate';

//console.log("UITabBar");
export let UITabBar = UIView.extendClass ("UITabBar", () => ({

    // Getting and Setting Properties
    delegate: autoboxProperty(UITabBarDelegate),

    // Configuring Items
    setItems: instanceSelector("setItems:animated:"),
    items: instanceProperty({ set: function (v) { return this.setItems (v, false); } }),
    selectedItem: instanceProperty(),

    // Customizing Tab Bars
    beginCustomizingItems: instanceSelector("beginCustomizingItems:"),
    endCustomizing:        instanceSelector("endCustomizingAnimated:"),
    isCustomizing:         instanceSelector("isCustomizing"),

    // Customizing Appearance
    backgroundImage: instanceProperty(),
    selectedImageTintColor: instanceProperty(),
    selectionIndicatorImage: instanceProperty(),
    tintColor: instanceProperty()

}));
