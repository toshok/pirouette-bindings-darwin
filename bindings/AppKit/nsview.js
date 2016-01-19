// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { NSResponder } from '../foundation';

export let NSView = NSResponder.extendClass("NSView", () => ({
    // Creating Instances
    initWithFrame: instanceSelector("initWithFrame:"),

    // Managing the View Hierarchy
    superview: instanceProperty({set: null}),
    setSubviews: instanceSelector("setSubviews:"),
    subviews: instanceSelector("subviews"),
    window: instanceSelector("window"),
    addSubview: instanceSelector("addSubview:"),
    addSubviews: function (...subviews) {
      for (var i = 0, e = subviews.length; i < e; i ++)
	this.addSubview (subviews[i]);
    },
    addSubviewPositionedRelativeTo: instanceSelector("addSubview:positioned:relativeTo:"),
    didAddSubview: instanceSelector("didAddSubview:"),
    removeFromSuperview: instanceSelector("removeFromSuperview"),
    removeFromSuperviewWithoutNeedingDisplay: instanceSelector("removeFromSuperviewWithoutNeedingDisplay"),
    replaceSubview: instanceSelector("replaceSubview:with:"),
    isDescendantOf: instanceSelector("isDescendantOf:"),
    opaqueAncestor: instanceSelector("opaqueAncestor"),
    ancestorSharedWithView: instanceSelector("ancestorSharedWithView:"),
    sortSubviewsUsingFunction: instanceSelector("sortSubviewsUsingFunction:context:"),
    viewDidMoveToSuperview: instanceSelector("viewDidMoveToSuperview"),
    viewDidMoveToWindow: instanceSelector("viewDidMoveToWindow"),
    viewWillMoveToSuperview: instanceSelector("viewWillMoveToSuperview:"),
    viewWillMoveToWindow: instanceSelector("viewWillMoveToWindow:"),
    willRemoveSubview: instanceSelector("willRemoveSubview:"),
    enclosingMenuItem: instanceSelector("enclosingMenuItem"),

    // Searching by Tag
    viewWithTag: instanceSelector("viewWithTag:"),
    tag: instanceSelector("tag"),

    // Modifying the Frame Rectangle
    frame: instanceProperty(),
    setFrameOrigin: instanceSelector("setFrameOrigin:"),
    setFrameSize: instanceSelector("setFrameSize:"),
    setFrameRotation: instanceSelector("setFrameRotation:"),
    frameRotation: instanceSelector("frameRotation"),

    // Modifying the Bounds Rectangle
    bounds: instanceProperty(),
    setBoundsOrigin: instanceSelector("setBoundsOrigin:"),
    setBoundsSize: instanceSelector("setBoundsSize:"),
    setBoundsRotation: instanceSelector("setBoundsRotation:"),
    boundsRotation: instanceSelector("boundsRotation"),

    // Modifying the Coordinate System
    translateOriginToPoint: instanceSelector("translateOriginToPoint:"),
    scaleUnitSquareToSize: instanceSelector("scaleUnitSquareToSize:"),
    rotateByAngle: instanceSelector("rotateByAngle:"),

    // Examining Coordinate System Modifications
    isFlipped: instanceSelector("isFlipped"),
    isRotatedFromBase: instanceSelector("isRotatedFromBase"),
    isRotatedOrScaledFromBase: instanceSelector("isRotatedOrScaledFromBase"),

    // Base Coordinate Conversion
    convertPointToBase: instanceSelector("convertPointToBase:"),
    convertPointFromBase: instanceSelector("convertPointFromBase:"),
    convertSizeToBase: instanceSelector("convertSizeToBase:"),
    convertSizeFromBase: instanceSelector("convertSizeFromBase:"),
    convertRectToBase: instanceSelector("convertRectToBase:"),
    convertRectFromBase: instanceSelector("convertRectFromBase:"),

    // Converting Coordinates
    backingAlignedRect: instanceSelector("backingAlignedRect:options:"),
    convertPointFromBacking: instanceSelector("convertPointFromBacking:"),
    convertPointToBacking: instanceSelector("convertPointToBacking:"),
    convertPointFromLayer: instanceSelector("convertPointFromLayer:"),
    convertPointToLayer: instanceSelector("convertPointToLayer:"),
    convertRectFromBacking: instanceSelector("convertRectFromBacking:"),
    convertRectToBacking: instanceSelector("convertRectToBacking:"),
    convertRectFromLayer: instanceSelector("convertRectFromLayer:"),
    convertRectToLayer: instanceSelector("convertRectToLayer:"),
    convertSizeFromBacking: instanceSelector("convertSizeFromBacking:"),
    convertSizeToBacking: instanceSelector("convertSizeToBacking:"),
    convertSizeFromLayer: instanceSelector("convertSizeFromLayer:"),
    convertSizeToLayer: instanceSelector("convertSizeToLayer:"),
    convertPointFromView: instanceSelector("convertPoint:fromView:"),
    convertPointToView: instanceSelector("convertPoint:toView:"),
    convertSizeFromView: instanceSelector("convertSize:fromView:"),
    convertSizeToView: instanceSelector("convertSize:toView:"),
    convertRectFromView: instanceSelector("convertRect:fromView:"),
    convertRectToView: instanceSelector("convertRect:toView:"),
    centerScanRect: instanceSelector("centerScanRect:"),

    // Controlling Notifications
    setPostsFrameChangedNotifications: instanceSelector("setPostsFrameChangedNotifications:"),
    postsFrameChangedNotifications: instanceSelector("postsFrameChangedNotifications"),
    setPostsBoundsChangedNotifications: instanceSelector("setPostsBoundsChangedNotifications:"),
    postsBoundsChangedNotifications: instanceSelector("postsBoundsChangedNotifications"),

    // Resizing Subviews
    resizeSubviewsWithOldSize: instanceSelector("resizeSubviewsWithOldSize:"),
    resizeWithOldSuperviewSize: instanceSelector("resizeWithOldSuperviewSize:"),
    setAutoresizesSubviews: instanceSelector("setAutoresizesSubviews:"),
    autoresizesSubviews: instanceSelector("autoresizesSubviews"),
    setAutoresizingMask: instanceSelector("setAutoresizingMask:"),
    autoresizingMask: instanceSelector("autoresizingMask"),

    // Focusing
    lockFocus: instanceSelector("lockFocus"),
    lockFocusIfCanDraw: instanceSelector("lockFocusIfCanDraw"),
    lockFocusIfCanDrawInContext: instanceSelector("lockFocusIfCanDrawInContext:"),
    unlockFocus: instanceSelector("unlockFocus"),
    focusView: instanceSelector("focusView"),

    // Displaying
    setNeedsDisplay: instanceSelector("setNeedsDisplay:"),
    setNeedsDisplayInRect: instanceSelector("setNeedsDisplayInRect:"),
    needsDisplay: instanceSelector("needsDisplay"),
    display: instanceSelector("display"),
    displayRect: instanceSelector("displayRect:"),
    displayRectIgnoringOpacity: instanceSelector("displayRectIgnoringOpacity:"),
    displayRectIgnoringOpacityInContext: instanceSelector("displayRectIgnoringOpacity:inContext:"),
    displayIfNeeded: instanceSelector("displayIfNeeded"),
    displayIfNeededInRect: instanceSelector("displayIfNeededInRect:"),
    displayIfNeededIgnoringOpacity: instanceSelector("displayIfNeededIgnoringOpacity"),
    displayIfNeededInRectIgnoringOpacity: instanceSelector("displayIfNeededInRectIgnoringOpacity:"),
    translateRectsNeedingDisplayInRect: instanceSelector("translateRectsNeedingDisplayInRect:by:"),
    isOpaque: instanceSelector("isOpaque"),
    viewWillDraw: instanceSelector("viewWillDraw"),

    // Focus Ring Drawing
    drawFocusRingMask: instanceSelector("drawFocusRingMask"),
    focusRingMaskBounds: instanceSelector("focusRingMaskBounds"),
    noteFocusRingMaskChanged: instanceSelector("noteFocusRingMaskChanged"),
    setKeyboardFocusRingNeedsDisplayInRect: instanceSelector("setKeyboardFocusRingNeedsDisplayInRect:"),
    defaultFocusRingType: instanceSelector("defaultFocusRingType"),
    setFocusRingType: instanceSelector("setFocusRingType:"),
    focusRingType: instanceSelector("focusRingType"),

    // Fullscreen Mode
    enterFullScreenMode: instanceSelector("enterFullScreenMode:withOptions:"),
    exitFullScreenMode: instanceSelector("exitFullScreenModeWithOptions:"),
    isInFullScreenMode: instanceSelector("isInFullScreenMode"),

    // Hiding Views
    hidden: instanceProperty({ get: "isHidden" }),
    isHiddenOrHasHiddenAncestor: instanceSelector("isHiddenOrHasHiddenAncestor"),
    viewDidHide: instanceSelector("viewDidHide"),
    viewDidUnhide: instanceSelector("viewDidUnhide"),

    // Drawing
    canDrawConcurrently: instanceSelector("canDrawConcurrently"),
    setCanDrawConcurrently: instanceSelector("setCanDrawConcurrently:"),
    drawRect: instanceSelector("drawRect:"),
    visibleRect: instanceSelector("visibleRect"),
    canDraw: instanceSelector("canDraw"),
    shouldDrawColor: instanceSelector("shouldDrawColor"),
    getRectsBeingDrawn: instanceSelector("getRectsBeingDrawn:count:"),
    needsToDrawRect: instanceSelector("needsToDrawRect:"),
    wantsDefaultClipping: instanceSelector("wantsDefaultClipping"),
    bitmapImageRepForCachingDisplayInRect: instanceSelector("bitmapImageRepForCachingDisplayInRect:"),
    cacheDisplayInRectToBitmapImageRep: instanceSelector("cacheDisplayInRect:toBitmapImageRep:"),

    // Managing Live Resize
    inLiveResize: instanceSelector("inLiveResize"),
    preservesContentDuringLiveResize: instanceSelector("preservesContentDuringLiveResize"),
    getRectsExposedDuringLiveResize: instanceSelector("getRectsExposedDuringLiveResize:count:"),
    rectPreservedDuringLiveResize: instanceSelector("rectPreservedDuringLiveResize"),
    viewWillStartLiveResize: instanceSelector("viewWillStartLiveResize"),
    viewDidEndLiveResize: instanceSelector("viewDidEndLiveResize"),

    // Managing the Graphics State
    allocateGState: instanceSelector("allocateGState"),
    gState: instanceSelector("gState"),
    setUpGState: instanceSelector("setUpGState"),
    renewGState: instanceSelector("renewGState"),
    releaseGState: instanceSelector("releaseGState"),

    // Event Handling
    acceptsFirstMouse: instanceSelector("acceptsFirstMouse:"),
    hitTest: instanceSelector("hitTest:"),
    mouseInRect: instanceSelector("mouse:inRect:"),
    performKeyEquivalent: instanceSelector("performKeyEquivalent:"),
    rightMouseDown: instanceSelector("rightMouseDown:"),
    performMnemonic: instanceSelector("performMnemonic:"),
    mouseDownCanMoveWindow: instanceSelector("mouseDownCanMoveWindow"),
    inputContext: instanceSelector("inputContext"),

    // Dragging Operations
    registeredDraggedTypes: instanceSelector("registeredDraggedTypes"),
    registerForDraggedTypes: instanceSelector("registerForDraggedTypes:"),
    unregisterDraggedTypes: instanceSelector("unregisterDraggedTypes"),
    beginDraggingSession: instanceSelector("beginDraggingSessionWithItems:event:source:"),
    dragFile: instanceSelector("dragFile:fromRect:slideBack:event:"),
    dragImage: instanceSelector("dragImage:at:offset:event:pasteboard:source:slideBack:"),
    dragPromisedFiles: instanceSelector("dragPromisedFilesOfTypes:fromRect:source:slideBack:event:"),
    shouldDelayWindowOrderingForEvent: instanceSelector("shouldDelayWindowOrderingForEvent:"),

    // Tool Tips
    addToolTip: instanceSelector("addToolTipRect:owner:userData:"),
    removeAllToolTips: instanceSelector("removeAllToolTips"),
    removeToolTip: instanceSelector("removeToolTip:"),
    setToolTip: instanceSelector("setToolTip:"),
    toolTip: instanceSelector("toolTip"),

    // Managing Tracking Rectangles
    addTrackingRect: instanceSelector("addTrackingRect:owner:userData:assumeInside:"),
    removeTrackingRect: instanceSelector("removeTrackingRect:"),

    // Managing Tracking Areas
    addTrackingArea: instanceSelector("addTrackingArea:"),
    removeTrackingArea: instanceSelector("removeTrackingArea:"),
    trackingAreas: instanceSelector("trackingAreas"),
    updateTrackingAreas: instanceSelector("updateTrackingAreas"),

    // Managing Cursor Tracking
    addCursorRect: instanceSelector("addCursorRect:cursor:"),
    removeCursorRect: instanceSelector("removeCursorRect:cursor:"),
    discardCursorRects: instanceSelector("discardCursorRects"),
    resetCursorRects: instanceSelector("resetCursorRects"),

    // Scrolling
    scrollPoint: instanceSelector("scrollPoint:"),
    scrollRectToVisible: instanceSelector("scrollRectToVisible:"),
    autoscroll: instanceSelector("autoscroll:"),
    adjustScroll: instanceSelector("adjustScroll:"),
    scrollRectBy: instanceSelector("scrollRect:by:"),
    enclosingScrollView: instanceSelector("enclosingScrollView"),
    scrollClipViewToPoint: instanceSelector("scrollClipView:toPoint:"),
    reflectScrolledClipView: instanceSelector("reflectScrolledClipView:"),

    // Contextual Menus
    menuForEvent: instanceSelector("menuForEvent:"),
    defaultMenu: instanceSelector("defaultMenu"),

    // Key-view Loop Management
    canBecomeKeyView: instanceSelector("canBecomeKeyView"),
    needsPanelToBecomeKey: instanceSelector("needsPanelToBecomeKey"),
    setNextKeyView: instanceSelector("setNextKeyView:"),
    nextKeyView: instanceSelector("nextKeyView"),
    nextValidKeyView: instanceSelector("nextValidKeyView"),
    previousKeyView: instanceSelector("previousKeyView"),
    previousValidKeyView: instanceSelector("previousValidKeyView"),

    // Printing
    print: instanceSelector("print:"),
    beginPage: instanceSelector("beginPageInRect:atPlacement:"),
    dataWithEPSInsideRect: instanceSelector("dataWithEPSInsideRect:"),
    dataWithPDFInsideRect: instanceSelector("dataWithPDFInsideRect:"),
    printJobTitle: instanceSelector("printJobTitle"),
    pageFooter: instanceSelector("pageFooter"),
    pageHeader: instanceSelector("pageHeader"),
    writeEPS: instanceSelector("writeEPSInsideRect:toPasteboard:"),
    writePDF: instanceSelector("writePDFInsideRect:toPasteboard:"),
    drawPageBorderWithSize: instanceSelector("drawPageBorderWithSize:"),
    drawSheetBorderWithSize: instanceSelector("drawSheetBorderWithSize:"),

    // Pagination
    heightAdjustLimit: instanceSelector("heightAdjustLimit"),
    widthAdjustLimit: instanceSelector("widthAdjustLimit"),
    adjustPageWidth: instanceSelector("adjustPageWidthNew:left:right:limit:"),
    adjustPageHeight: instanceSelector("adjustPageHeightNew:top:bottom:limit:"),
    knowsPageRange: instanceSelector("knowsPageRange:"),
    rectForPage: instanceSelector("rectForPage:"),
    locationOfPrintRect: instanceSelector("locationOfPrintRect:"),

    // Writing Conforming Rendering Instructions
    beginDocument: instanceSelector("beginDocument"),
    endDocument: instanceSelector("endDocument"),
    endPage: instanceSelector("endPage"),

    // Core Animation Layer-Backing
    layer: instanceSelector("layer"),
    setLayer: instanceSelector("setLayer:"),
    wantsLayer: instanceSelector("wantsLayer"),
    setWantsLayer: instanceSelector("setWantsLayer:"),
    makeBackingLayer: instanceSelector("makeBackingLayer"),
    layerContentsPlacement: instanceSelector("layerContentsPlacement"),
    setLayerContentsPlacement: instanceSelector("setLayerContentsPlacement:"),
    layerContentsRedrawPolicy: instanceSelector("layerContentsRedrawPolicy"),
    setLayerContentsRedrawPolicy: instanceSelector("setLayerContentsRedrawPolicy:"),

    // Core Animation Layer Properties
    setFrameCenterRotation: instanceSelector("setFrameCenterRotation:"),
    frameCenterRotation: instanceSelector("frameCenterRotation"),
    setAlphaValue: instanceSelector("setAlphaValue:"),
    alphaValue: instanceSelector("alphaValue"),
    setBackgroundFilters: instanceSelector("setBackgroundFilters:"),
    backgroundFilters: instanceSelector("backgroundFilters"),
    setCompositingFilter: instanceSelector("setCompositingFilter:"),
    compositingFilter: instanceSelector("compositingFilter"),
    setContentFilters: instanceSelector("setContentFilters:"),
    contentFilters: instanceSelector("contentFilters"),
    setShadow: instanceSelector("setShadow:"),
    shadow: instanceSelector("shadow"),

    // Displaying Definition Windows
    showDefinitionForAttributedStringAtPoint: instanceSelector("showDefinitionForAttributedString:atPoint:"),
    showDefinitionForAttributedString: instanceSelector("showDefinitionForAttributedString:range:options:baselineOriginProvider:"),

    // Touch Event Handling
    acceptsTouchEvents: instanceProperty(),
    wantsRestingTouches: instanceProperty(),

    // Drawing Find Indicator
    isDrawingFindIndicator: instanceSelector("isDrawingFindIndicator"),

    // Managing Constraints
    constraints: instanceSelector("constraints"),
    addConstraint: instanceSelector("addConstraint:"),
    addConstraints: instanceSelector("addConstraints:"),
    removeConstraint: instanceSelector("removeConstraint:"),
    removeConstraints: instanceSelector("removeConstraints:"),

    // Measuring in Constraint-Based Layout
    fittingSize: instanceSelector("fittingSize"),
    intrinsicContentSize: instanceSelector("intrinsicContentSize"),
    invalidateIntrinsicContentSize: instanceSelector("invalidateIntrinsicContentSize"),
    contentCompressionResistancePriority: instanceSelector("contentCompressionResistancePriorityForOrientation:"),
    setContentCompressionResistancePriority: instanceSelector("setContentCompressionResistancePriority:forOrientation:"),
    contentHuggingPriority: instanceSelector("contentHuggingPriorityForOrientation:"),
    setContentHuggingPriority: instanceSelector("setContentHuggingPriority:forOrientation:"),

    // Aligning Views with Constraint-Based Layout
    alignmentRectForFrame: instanceSelector("alignmentRectForFrame:"),
    frameForAlignmentRect: instanceSelector("frameForAlignmentRect:"),
    alignmentRectInsets: instanceSelector("alignmentRectInsets"),
    baselineOffsetFromBottom: instanceSelector("baselineOffsetFromBottom"),

    // Triggering Constraint-Based Layout
    needsLayout: instanceSelector("needsLayout"),
    setNeedsLayout: instanceSelector("setNeedsLayout:"),
    layout: instanceSelector("layout"),
    layoutSubtreeIfNeeded: instanceSelector("layoutSubtreeIfNeeded"),
    needsUpdateConstraints: instanceSelector("needsUpdateConstraints"),
    setNeedsUpdateConstraints: instanceSelector("setNeedsUpdateConstraints:"),
    updateConstraints: instanceSelector("updateConstraints"),
    updateConstraintsForSubtreeIfNeeded: instanceSelector("updateConstraintsForSubtreeIfNeeded"),

    // Opting in to Constraint-Based Layout
    requiresConstraintBasedLayout: instanceSelector("requiresConstraintBasedLayout"),
    translatesAutoresizingMaskIntoConstraints: instanceSelector("translatesAutoresizingMaskIntoConstraints"),
    setTranslatesAutoresizingMaskIntoConstraints: instanceSelector("setTranslatesAutoresizingMaskIntoConstraints:"),

    // Debugging Constraint-Based Layout

    // See Cocoa Autolayout Release Notes for more details on debugging constraint-based layout.

    constraintsAffectingLayoutForOrientation: instanceSelector("constraintsAffectingLayoutForOrientation:"),
    hasAmbiguousLayout: instanceSelector("hasAmbiguousLayout"),
    exerciseAmbiguityInLayout: instanceSelector("exerciseAmbiguityInLayout")

}));
