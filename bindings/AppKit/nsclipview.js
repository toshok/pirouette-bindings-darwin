// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSView } from 'nsview';

export let NSClipView = NSView.extendClass("NSClipView", () => ({

    // Setting the Document View
    //
    documentView: instanceProperty(),

    // Scrolling
    //
    scrollToPoint: instanceSelector("scrollToPoint:"),
    autoscroll: instanceSelector("autoscroll:"),

    // Determining Scrolling Efficiency
    //
    copiesOnScroll: instanceProperty(),

    // Getting the Visible Portion
    //
    documentRect:        instanceProperty({ set: null }),
    documentVisibleRect: instanceProperty({ set: null }),

    // Setting the Document Cursor
    //
    documentCursor: instanceProperty(),

    // Working with Background Color
    //
    drawsBackground: instanceProperty(),
    backgroundColor: instanceProperty(),

    // Overriding NSView Methods
    //
    viewBoundsChanged: instanceSelector("viewBoundsChanged:"),
    viewFrameChanged: instanceSelector("viewFrameChanged:")
}));
