// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';

//console.log("UIBarItem");
export let UIBarItem = UIView.extendClass ("UIBarItem", () => ({

    // Getting and Setting Properties
    enabled: instanceProperty(),
    image: instanceProperty(),
    landscapeImagePhone: instanceProperty(),
    imageInsets: instanceProperty(),
    landscapeImagePhoneInsets: instanceProperty(),
    title: instanceProperty(),
    tag: instanceProperty(),

    // Customizing Appearance
    setTitleTextAttributes: instanceSelector("setTitleTextAttributes:forState:"),
    getTitleTextAttributes: instanceSelector("titleTextAttributesForState:")

}));
