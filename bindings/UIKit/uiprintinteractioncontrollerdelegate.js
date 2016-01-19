// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { Protocol } from '../foundation';
import { optionalMethod } from '../objc';

console.log("UIPrintInteractionControllerDelegte");

export let UIPrintInteractionControllerDelegate = Protocol.extendClass("UIPrintInteractionControllerDelegate", () => ({

    // Returning a Parent View Controller
    parentViewController: optionalMethod("printInteractionControllerParentViewController:"),

    // Choosing a Paper Size for the Print Job
    choosePaper:          optionalMethod("printInteractionController:choosePaper:"),

    // Responding to the Presentation and Dismissal of the Printing Interface
    willPresentPrinterOptions: optionalMethod("printInteractionControllerWillPresentPrinterOptions:"),
    didPresentPrinterOptions:  optionalMethod("printInteractionControllerDidPresentPrinterOptions:"),
    willDismissPrinterOptions: optionalMethod("printInteractionControllerWillDismissPrinterOptions:"),
    didDismissPrinterOptions:  optionalMethod("printInteractionControllerDidDismissPrinterOptions:"),

    // Responding to the Start and End of a Print Job
    willStartJob: optionalMethod("printInteractionControllerWillStartJob:"),
    didFinishJob: optionalMethod("printInteractionControllerDidFinishJob:"),

}));
