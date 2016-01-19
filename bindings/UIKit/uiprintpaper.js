// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, staticSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIPrintPaper");
export let UIPrintPaper = NSObject.extendClass ("UIPrintPaper", () => ({

    // Getting the Paper Size and the Printing Area
    paperSize: instanceProperty(),
    printableRect: instanceProperty(),

    // Obtaining the Best Paper Size for Printing
    bestPaperForPageSize: staticSelector("bestPaperForPageSize:withPapersFromArray:")

}));
