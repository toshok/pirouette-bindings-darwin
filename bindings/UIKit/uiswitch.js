// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol';

//console.log("UISwitch");
export let UISwitch = UIControl.extendClass ("UISwitch", () => ({

    // Initializing the Switch Object
    initWithFrame: instanceSelector("initWithFrame:"),

    // Setting the Off/On State
    on: instanceProperty({ set: function (v) { return this.setOn(v, false); } }),
    setOn: instanceSelector("setOn:animated:"),

    // Customizing the Appearance of the Switch
    onTintColor: instanceProperty()

}));
