// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIPrintFormatter } from 'uiprintformatter';

//console.log("UIViewPrintFormatter");
export let UIViewPrintFormatter = UIPrintFormatter.extendClass ("UIViewPrintFormatter", () => ({

    // Accessing the View
    view: instanceProperty()

}));
