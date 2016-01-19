// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector, staticProperty, autoboxProperty } from '../objc';
import { NSView } from 'nsview';

export let NSScrollView = NSView.extendClass("NSScrollView", () => ({
    
    // Calculating Layout
    //
/*
    frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:: staticSelector()
    frameSizeForContentSize:hasHorizontalScroller:hasVerticalScroller:borderType:: staticSelector()
    contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:: staticSelector()
    contentSizeForFrameSize:hasHorizontalScroller:hasVerticalScroller:borderType:: staticSelector()
*/
    // Determining Component Sizes
    //
    contentSize: instanceProperty({ set: null }),
    documentVisibleRect: instanceProperty({ set: null }),

    // Managing Graphics Attributes
    //
    backgroundColor: instanceProperty(),
    drawsBackground: instanceProperty(),
    borderType: instanceProperty(),
    documentCursor: instanceProperty(),

    // Managing the Views
    //
    contentView: instanceProperty(),
    documentView: instanceProperty(),
    addFloatingSubview: instanceSelector("addFloatingSubview:forAxis:"),

    // Managing Scrollers
    //
    horizontalScroller: instanceProperty(),
    hasHorizontalScroller: instanceProperty(),
    verticalScroller: instanceProperty(),
    hasVerticalScroller: instanceProperty(),
    autohidesScrollers: instanceProperty(),

    // Managing Rulers
    //
    rulerViewClass: staticProperty(),
    hasHorizontalRuler: instanceProperty(),
    horizontalRulerView: instanceProperty(),
    hasVerticalRuler: instanceProperty(),
    verticalRulerView: instanceProperty(),
    rulersVisible: instanceProperty(),

    // Scroller Style
    //
    scrollerKnobStyle: instanceProperty(),
    scrollerStyle: instanceProperty(),

    // Setting Scrolling Behavior
    //
    lineScroll: instanceProperty(),
    horizontalLineScroll: instanceProperty(),
    verticalLineScroll: instanceProperty(),
    pageScroll: instanceProperty(),
    horizontalPageScroll: instanceProperty(),
    verticalPageScroll: instanceProperty(),
    scrollsDynamically: instanceProperty(),
    scrollWheel: instanceSelector("scrollWheel:"),

    // Updating Display After Scrolling
    //
    reflectScrolledClipView: instanceSelector("reflectScrolledClipView:"),

    // Arranging Components
    //
    tile: instanceSelector(),

    // Find Bar Positioning
    //
    findBarPosition: instanceProperty(),

    // Specifying a Document’s Predominant Scrolling Behavior
    //
    usesPredominantAxisScrolling: instanceProperty(),

    // Specifying the Scroll View Elasticity
    //
    horizontalScrollElasticity: instanceProperty(),
    verticalScrollElasticity: instanceProperty(),

    // Flashing Overlay Scroll Bars
    //
    flashScrollers: instanceSelector(),

    // Zooming the Scroll View
    //
    allowsMagnification: instanceProperty(),
    magnification:       instanceProperty({ set: null }),
    magnifyToFitRect: 	 instanceSelector("magnifyToFitRect:"),
    maxMagnification: 	 instanceProperty(),
    minMagnification: 	 instanceProperty(),
    setMagnification: 	 instanceSelector("setMagnification:centeredAtPoint:")

}));

NSScrollView.newWithFrame = function(frame) {
  return NSScrollView.newWith({ initWith: "Frame", args: [frame] });
};
