// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIScrollViewDelegate");
export let UIScrollViewDelegate = Protocol.extendClass("UIScrollViewDelegate", () => ({

    // Responding to Scrolling and Dragging
    didScroll:             optionalMethod("scrollViewDidScroll:"),
    willBeginDragging:     optionalMethod("scrollViewWillBeginDragging:"),
    willEndDragging:       optionalMethod("scrollViewWillEndDragging:withVelocity:targetContentOffset:"),
    didEndDragging:        optionalMethod("scrollViewDidEndDragging:willDecelerate:"),
    shouldScrollToTop:     optionalMethod("scrollViewShouldScrollToTop:"),
    didScrollToTop:        optionalMethod("scrollViewDidScrollToTop:"),
    willBeginDecelerating: optionalMethod("scrollViewWillBeginDecelerating:"),
    didEndDecelerating:    optionalMethod("scrollViewDidEndDecelerating:"),

    // Managing Zooming
    viewForZoomingInScrollView: optionalMethod("viewForZoomingInScrollView:"),
    willBeginZooming:           optionalMethod("scrollViewWillBeginZooming:withView:"),
    didEndZooming:              optionalMethod("scrollViewDidEndZooming:withView:atScale:"),
    didZoom:                    optionalMethod("scrollViewDidZoom:"),

    // Responding to Scrolling Animations
    didEndScrollingAnimation:   optionalMethod("scrollViewDidEndScrollingAnimation:")

}));
