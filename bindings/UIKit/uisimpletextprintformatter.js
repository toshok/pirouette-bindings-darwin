// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIPrintFormatter } from 'uiprintformatter';

//console.log("UISimpleTextPrintFormatter");
export let UISimpleTextPrintFormatter = UIPrintFormatter.extendClass ("UISimpleTextPrintFormatter", () => ({
    // Creating a Simple-Text Print Formatter
    initWithText:     instanceSelector("initWithText:"),

    // Getting and Setting the Text
    text: instanceProperty(),

    // Text Attributes for Printed Content
    font: instanceProperty(),
    color: instanceProperty(),
    lineBreakMode: instanceProperty(),
    textAlignment: instanceProperty()

}));
