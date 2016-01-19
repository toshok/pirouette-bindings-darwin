// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { UIPrintInteractionControllerDelegate } from 'uiprintinteractioncontrollerdelegate';

//console.log("UIPrintInteractionController");
export let UIPrintInteractionController = NSObject.extendClass ("UIPrintInteractionController", () => ({

    // Getting the Shared Controller Instance
    sharedPrintController: staticSelector("sharedPrintController"),

    // Determining Printability
    isPrintingAvailable:   staticSelector("isPrintingAvailable"),
    canPrintData:          staticSelector("canPrintData:"),
    canPrintURL:           staticSelector("canPrintURL:"),
    printableUTIs:         staticSelector("printableUTIs"),

    // Providing the Source of Printable Content
    printingItem: instanceProperty(),
    printingItems: instanceProperty(),
    printPageRenderer: instanceProperty(),
    printFormatter: instanceProperty(),

    // Presenting the Printing User Interface
    present:                  instanceSelector("presentAnimated:completionHandler:"),
    presentFromBarButtonItem: instanceSelector("presentFromBarButtonItem:animated:completionHandler:"),
    presentFromRect:          instanceSelector("presentFromRect:inView:animated:completionHandler:"),
    dismiss:                  instanceSelector("dismissAnimated:"),

    // Accessing Print-Job Information
    printInfo: instanceProperty(),
    printPaper: instanceProperty(),
    showsPageRange: instanceProperty(),

    // Assigning the Delegate
    delegate: autoboxProperty(UIPrintInteractionControllerDelegate)
}));
