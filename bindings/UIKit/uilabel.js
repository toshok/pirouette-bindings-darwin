// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';

//console.log("UILabel");
export let UILabel = UIView.extendClass ("UILabel", () => ({

    // Accessing the Text Attributes
    text: instanceProperty(),
    font: instanceProperty(),
    textColor: instanceProperty(),
    textAlignment: instanceProperty(),
    lineBreakMode: instanceProperty(),
    enabled: instanceProperty(),

    // Sizing the Label’s Text
    adjustsFontSizeToFitWidth: instanceProperty(),
    baselineAdjustment: instanceProperty(),
    minimumFontSize: instanceProperty(),
    numberOfLines: instanceProperty(),

    // Managing Highlight Values
    highlightedTextColor: instanceProperty(),
    highlighted: instanceProperty(),

    // Drawing a Shadow
    shadowColor: instanceProperty(),
    shadowOffset: instanceProperty(),

    // Drawing and Positioning Overrides
    textRect:       instanceSelector("textRectForBounds:limitedToNumberOfLines:"),
    drawTextInRect: instanceSelector("drawTextInRect:"),

    // Setting and Getting Attributes
    userInteractionEnabled: instanceProperty()

}));
