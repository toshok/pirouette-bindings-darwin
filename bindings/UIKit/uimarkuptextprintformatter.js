// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIPrintFormatter } from 'uiprintformatter';

//console.log("UIMarkupTextPrintFormatter");
export let UIMarkupTextPrintFormatter = UIPrintFormatter.extendClass ("UIMarkupTextPrintFormatter", () => ({

    // Creating a Markup-Text Print Formatter
    initWithMarkupText: instanceSelector("initWithMarkupText:"),

    // Getting and Setting the Markup Text
    markupText: instanceProperty()

}));
