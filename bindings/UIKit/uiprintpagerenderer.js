// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { NSObject } from '../foundation';
import { instanceProperty, instanceSelector } from '../objc';

//console.log("UIPrintPageRenderer");
export let UIPrintPageRenderer = NSObject.extendClass ("UIPrintPageRenderer", () => ({

    // Accessing Information About the Print Job
    numberOfPages: instanceSelector("numberOfPages"),
    paperRect:     instanceProperty(),
    printableRect: instanceProperty(),

    // Specifying Header and Footer Heights
    headerHeight: instanceProperty(),
    footerHeight: instanceProperty(),

    // Managing Print Formatters
    addPrintFormatterStartingAtPageAtIndex: instanceSelector("addPrintFormatter:startingAtPageAtIndex:"),
    printFormattersForPageAtIndex:          instanceSelector("printFormattersForPageAtIndex:"),
    printFormatters: instanceProperty(),

    // Preparing for Drawing
    prepareForDrawingPages:           instanceSelector("prepareForDrawingPages:"),

    // Drawing a Page
    drawPageAtIndex:                  instanceSelector("drawPageAtIndex:inRect:"),
    drawHeaderForPageAtIndex:         instanceSelector("drawHeaderForPageAtIndex:inRect:"),
    drawContentForPageAtIndex:        instanceSelector("drawContentForPageAtIndex:inRect:"),
    drawPrintFormatterForPageAtIndex: instanceSelector("drawPrintFormatter:forPageAtIndex:"),
    drawFooterForPageAtIndex:         instanceSelector("drawFooterForPageAtIndex:inRect:")

}));
