// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol';

//console.log("UISlider");
export let UISlider = UIControl.extendClass ("UISlider", () => ({

    // Accessing the Slider’s Value
    value: instanceProperty({ set: function(v) { return this.setValue(v, false); } }),
    setValue: instanceSelector("setValue:animated:"),

    // Accessing the Slider’s Value Limits
    minimumValue: instanceProperty(),
    maximumValue: instanceProperty(),

    // Modifying the Slider’s Behavior
    continuous: instanceProperty(),

    // Changing the Slider’s Appearance
    minimumTrackImage:    instanceSelector("minimumTrackImageForState:"),
    setMinimumTrackImage: instanceSelector("setMinimumTrackImage:forState:"),
    maximumTrackImage:    instanceSelector("maximumTrackImageForState:"),
    setMaximumTrackImage: instanceSelector("setMaximumTrackImage:forState:"),
    thumbImage:           instanceSelector("thumbImageForState:"),
    setThumbImage:        instanceSelector("setThumbImage:forState:"),
    currentMaximumTrackImage: instanceProperty(),
    currentThumbImage: instanceProperty(),
    minimumValueImage: instanceProperty(),
    maximumValueImage: instanceProperty(),
    currentMinimumTrackImage: instanceProperty(),
    minimumTrackTintColor: instanceProperty().makeUIAppearance(),
    maximumTrackTintColor: instanceProperty().makeUIAppearance(),
    thumbTintColor: instanceProperty().makeUIAppearance(),

    // Overrides for Subclasses
    maximumValueImageRect: instanceSelector("maximumValueImageRectForBounds:"),
    minimumValueImageRect: instanceSelector("minimumValueImageRectForBounds:"),
    trackRect:             instanceSelector("trackRectForBounds:"),
    thumbRect:             instanceSelector("thumbRectForBounds:trackRect:value:")

}));
