// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIPrintFormatter");
export let UIPrintFormatter = NSObject.extendClass ("UIPrintFormatter", () => ({

    // Laying Out the Content
    contentInsets: instanceProperty(),
    maximumContentHeight: instanceProperty(),
    maximumContentWidth: instanceProperty(),

    // Managing Pagination
    startPage: instanceProperty(),
    pageCount: instanceProperty(),

    // Drawing the Content
    drawInRectForPageAtIndex:    instanceSelector("drawInRect:forPageAtIndex:"),
    rectForPageAtIndex:          instanceSelector("rectForPageAtIndex:"),

    // Communicating with the Page Renderer
    removeFromPrintPageRenderer: instanceSelector("removeFromPrintPageRenderer"),
    printPageRenderer: instanceProperty()

}));
