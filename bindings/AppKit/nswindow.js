// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector, autoboxProperty } from '../objc';
import { NSResponder } from '../foundation';

export let NSWindow = NSResponder.extendClass("NSWindow", () => ({

  // Creating Windows
  initWithContentRect: instanceSelector("initWithContentRect:styleMask:backing:defer:"),
  initWithContentRectOnScreen: instanceSelector("initWithContentRect:styleMask:backing:defer:screen:"),

  // Configuring Windows
  styleMask: instanceProperty(),

  toggleFullScreen: instanceSelector("toggleFullScreen:"),
  worksWhenModal: instanceSelector(),
  alphaValue: instanceProperty(),

  backgroundColor: instanceProperty(),

  colorSpace: instanceProperty(),

  contentView: instanceProperty(),

  canHide: instanceProperty(),

  isOnActiveSpace: instanceSelector(),
  hidesOnDeactivate: instanceProperty(),

  collectionBehavior: instanceProperty(),

  isOpaque: instanceProperty({ set: "setOpaque:" }),

  hasShadow: instanceProperty(),

  invalidateShadow: instanceSelector(),

  // these could/should be properties with the right accessor functions.
  autorecalculatesContentBorderThickness:    instanceSelector("autorecalculatesContentBorderThicknessForEdge:"),
  setAutorecalculatesContentBorderThickness: instanceSelector("setAutorecalculatesContentBorderThickness:forEdge:"),
  contentBorderThickness: instanceSelector("contentBorderThicknessForEdge:"),
  setContentBorderThickness: instanceSelector("setContentBorderThickness:forEdge:"),

  // XXX we don't have NSWindowDelegate yet
  //delegate: autoboxProperty(NSWindowDelegate),


  preventsApplicationTerminationWhenModal: instanceProperty(),

  canBeVisibleOnAllSpaces: instanceProperty(), // Deprecated in OS X v10.5

  // Accessing Window Information
  defaultDepthLimit: staticSelector(),
  windowNumber: instanceProperty({ set: null }), // read-only

  windowNumbers: staticSelector("windowNumbersWithOptions:"),

  gState: instanceProperty({ set: null }),

  canStoreColor: instanceProperty({ set: null }),

  deviceDescription: instanceProperty({ set: null }),


  canBecomeVisibleWithoutLogin: instanceProperty(),

  sharingType: instanceProperty(),

  backingType: instanceProperty(),

  backingLocation: instanceProperty({ set: null}),

  preferredBackingLocation: instanceProperty(),

  isOneShot: instanceProperty(),

  depthLimit: instanceProperty(),

  hasDynamicDepthLimit: instanceProperty(),

  // Getting Layout Information
  contentRectForFrameRectWithStyleMask: staticSelector("contentRectForFrameRect:styleMask:"),
  frameRectForContentRectWithStyleMask: staticSelector("frameRectForContentRect:styleMask:"),
  minFrameWidthWithTitleWithStyleMask:  staticSelector("minFrameWidthWithTitle:styleMask:"),

  contentRectForFrameRect: instanceSelector("contentRectForFrameRect:"),
  frameRectForContentRect: instanceSelector("frameRectForContentRect:"),

  // Managing Windows
  drawers: instanceProperty({ set: null }),
  windowController: instanceProperty(),

  // Managing Sheets
  attachedSheet: instanceProperty({ set: null }),
  isSheet: instanceProperty({ set: null }),

  // Sizing Windows
  frame:                instanceProperty({ set: function(v) { this.setFrameAnimated (v, true, false); } }),
  setFrameOrigin:       instanceSelector("setFrameOrigin:"),
  setFrameTopLeftPoint: instanceSelector("setFrameTopLeftPoint:"),
  constrainFrameRect:   instanceSelector("constrainFrameRect:toScreen:"),
  cascadeTopLeft:       instanceSelector("cascadeTopLeftFromPoint:"),
  setFrame:             instanceSelector("setFrame:display:"),
  setFrameAnimated:     instanceSelector("setFrame:display:animate:"),
  animationResizeTime:  instanceSelector("animationResizeTime:"),
  aspectRatio:          instanceProperty(),
  minSize:              instanceProperty(),
  maxSize:              instanceProperty(),
  isZoomed:             instanceProperty({ set: null }),
  performZoom:          instanceSelector("performZoom:"),
  zoom:                 instanceSelector("zoom:"),
  resizeFlags:          instanceProperty({ set: null }),
  showsResizeIndicator: instanceProperty(),
  resizeIncrements:     instanceProperty(),
  preservesContentDuringLiveResize: instanceProperty(),
  inLiveResize:         instanceProperty({ set: null }),

  // Sizing Content
  contentAspectRatio:      instanceProperty(),
  setContentSize:          instanceSelector("setContentSize:"),
  contentMinSize:          instanceProperty(),
  contentMaxSize:          instanceProperty(),
  contentResizeIncrements: instanceProperty(),

  // Managing Window Layers
  visible:              instanceProperty({ get: "isVisible", set: null }),
  orderOut:             instanceSelector("orderOut:"),
  orderBack:            instanceSelector("orderBack:"),
  orderFront:           instanceSelector("orderFront:"),
  orderFrontRegardless: instanceSelector(),
  orderWindow:          instanceSelector("orderWindow:relativeTo:"),
  level:                instanceProperty(),

  // Managing Window Frames in User Defaults
  removeFrame:            staticSelector("removeFrameUsingName:"),
  setFrameUsingName:      instanceSelector("setFrameUsingName:"),
  setFrameUsingNameForce: instanceSelector("setFrameUsingName:force:"),
  saveFrameUsingName:     instanceSelector("saveFrameUsingName:"),
  frameAutosaveName:      instanceProperty(),
  stringWithSavedFrame:   instanceSelector(),
  setFrameFromString:     instanceSelector("setFrameFromString:"),

  // Managing Key Status
  isKeyWindow:          instanceProperty({ set: null }),
  canBecomeKeyWindow:   instanceProperty({ set: null }),
  makeKeyWindow:        instanceSelector(),
  makeKeyAndOrderFront: instanceSelector("makeKeyAndOrderFront:"),
  becomeKeyWindow:      instanceSelector(),
  resignKeyWindow:      instanceSelector(),

  // Managing Main Status
  isMainWindow:        instanceProperty({ set: null }),
  canBecomeMainWindow: instanceProperty({ set: null }),
  makeMainWindow:      instanceSelector(),
  becomeMainWindow:    instanceSelector(),
  resignMainWindow:    instanceSelector(),

  // Managing Toolbars
  toolbar:            instanceProperty(),
  toggleToolbarShown: instanceSelector("toggleToolbarShown:"),
  runToolbarCustomizationPalette: instanceSelector("runToolbarCustomizationPalette:"),

  // Managing Attached Windows
  childWindows:      instanceProperty({ set: null }),
  addChildWindow:    instanceSelector("addChildWindow:ordered:"),
  removeChildWindow: instanceSelector("removeChildWindow:"),
  parentWindow:      instanceProperty(),

  // Managing Window Buffers
  isFlushWindowDisabled: instanceProperty({ set: null }),
  enableFlushWindow:     instanceSelector(),
  disableFlushWindow:    instanceSelector(),
  flushWindow:           instanceSelector(),
  flushWindowIfNeeded:   instanceSelector(),

  // Managing Default Buttons
  defaultButtonCell:                        instanceProperty(),
  enableKeyEquivalentForDefaultButtonCell:  instanceSelector(),
  disableKeyEquivalentForDefaultButtonCell: instanceSelector(),

  // Managing Field Editors
  fieldEditor: instanceSelector("fieldEditor:forObject:"),
  endEditing:  instanceSelector("endEditingFor:"),

  // Managing the Window Menu
  excludedFromWindowsMenu: instanceProperty({ get: "isExcludedFromWindowsMenu" }),

  // Managing Cursor Rectangles
  areCursorRectsEnabled:        instanceProperty({ set: null }),
  enableCursorRects:            instanceSelector(),
  disableCursorRects:           instanceSelector(),
  discardCursorRects:           instanceSelector(),
  invalidateCursorRectsForView: instanceSelector("invalidateCursorRectsForView:"),
  resetCursorRects:             instanceSelector(),

  // Managing Title Bars
  standardWindowButtonForStyleMask: staticSelector("standardWindowButton:forStyleMask:"),
  standardWindowButton:             instanceSelector("standardWindowButton:"),
  showsToolbarButton:               instanceProperty(),

  // Managing Tooltips
  allowsToolTipsWhenApplicationIsInactive: instanceProperty(),

  // Handling Events
  menuChanged: staticSelector("menuChanged:"),
  currentEvent: instanceSelector(),
  nextEventMatchingMask: instanceSelector("nextEventMatchingMask:"),
  nextEventMatchingMaskUntilDate: instanceSelector("nextEventMatchingMask:untilDate:inMode:dequeue:"),
  discardEvents: instanceSelector("discardEventsMatchingMask:beforeEvent:"),
  postEvent: instanceSelector("postEvent:atStart:"),
  sendEvent: instanceSelector("sendEvent:"),
  tryToPerform: instanceSelector("tryToPerform:with:"),

  // Managing Responders
  initialFirstResponder: instanceProperty({ set: null }),
  firstResponder: instanceProperty({ set: null }),
  setInitialFirstResponse: instanceSelector("setInitialFirstResponder:"),
  makeFirstResponder: instanceSelector("makeFirstResponder:"),

  // Managing the Key View Loop
  selectKeyViewPrecedingView: instanceSelector("selectKeyViewPrecedingView:"),
  selectKeyViewFollowingView: instanceSelector("selectKeyViewFollowingView:"),
  selectPreviousKeyView: instanceSelector("selectPreviousKeyView:"),
  selectNextKeyView: instanceSelector("selectNextKeyView:"),
  keyViewSelectionDirection: instanceProperty({ set: null }),
  autorecalculatesKeyViewLoop: instanceSelector(),
  recalculateKeyViewLoop: instanceSelector(),
  setAutorecalculatesKeyViewLoop: instanceSelector("setAutorecalculatesKeyViewLoop:"),

  // Handling Keyboard Events
  keyDown: instanceSelector("keyDown:"),

  // Handling Mouse Events
  acceptsMouseMovedEvents: instanceProperty({ set: null }),
  ignoresMouseEvents: instanceProperty({ set: null }),
  mouseLocationOutsideOfEventStream: instanceProperty({ set: null }),
  setAcceptsMouseMovedEvents: instanceSelector("setAcceptsMouseMovedEvents"),
  windowNumberAt: staticSelector("windowNumberAtPoint:belowWindowWithWindowNumber:"),

  // Handling Window Restoration
  restorable: instanceProperty({ get: "isRestorable" }),
  restorationClass: instanceProperty(),
  disableSnapshotRestoration: instanceSelector(),
  enableSnapshotRestoration: instanceSelector(),

  // Bracketing Drawing Operations
  cacheImageInRect: instanceSelector("cacheImageInRect:"),
  restoreCachedImage: instanceSelector(),
  discardCachedImage: instanceSelector(),

  // Drawing Windows
  display: instanceSelector(),
  displayIfNeeded: instanceSelector(),
  viewsNeedDisplay: instanceProperty(),
  autodisplay: instanceProperty({ get: "isAutodisplay" }),
  useOptimizedDrawing: instanceSelector("useOptimizedDrawing:"),
  graphicsContext: instanceProperty({ set: null }),
  allowsConcurrentViewDrawing: instanceProperty(),

  // Window Animation
  animationBehavior: instanceProperty(),

  // Updating Windows
  disableScreenUpdatesUntilFlush: instanceSelector(),
  update: instanceSelector(),

  // Dragging Items
  dragImage: instanceSelector("dragImage:at:offset:event:pasteboard:source:slideBack:"),
  registerForDraggedTypes: instanceSelector("registerForDraggedTypes:"),
  unregisterDraggedTypes: instanceSelector(),

  // Converting Coordinates
  backingScaleFactor: instanceProperty({ set: null }),
  backingAlignedRect: instanceSelector("backingAlignedRect:options:"),
  convertRectFromBacking: instanceSelector("convertRectFromBacking:"),
  convertRectToBacking: instanceSelector("convertRectToBacking:"),
  convertRectToScreen: instanceSelector("convertRectToScreen:"),
  convertRectFromScreen: instanceSelector("convertRectFromScreen:"),
  convertBaseToScreen: instanceSelector("convertBaseToScreen:"),
  convertScreenToBase: instanceSelector("convertScreenToBase:"),
  userSpaceScaleFactor: instanceProperty({ set: null }),

  // Accessing Edited Status
  documentEdited: instanceProperty({ get: "isDocumentEdited" }),

  // Managing Titles
  title: instanceProperty(),
  setTitleWithRepresentedFilename: instanceSelector("setTitleWithRepresentedFilename:"),
  representedFilename: instanceProperty(),
  representedURL: instanceProperty(),

  // Accessing Screen Information
  screen: instanceProperty({ set: null }),
  deepestScreen: instanceProperty({ set: null }),
  displaysWhenScreenProfileChanges: instanceProperty(),

  // Moving Windows
  movableByWindowBackground: instanceProperty({ get: "isMovableByWindowBackground" }),
  movable: instanceProperty({ get: "isMovable" }),
  center: instanceProperty({ set: null }),

  // Closing Windows
  performClose: instanceSelector("performClose:"),
  close: instanceSelector(),
  releasedWhenClosed: instanceProperty({ get: "isReleasedWhenClosed" }),

  // Minimizing Windows
  isMiniaturized: instanceProperty({ set: null }),
  performMiniaturize: instanceSelector("performMiniaturize:"),
  miniaturize: instanceSelector("miniaturize:"),
  deminiaturize: instanceSelector("deminiaturize:"),
  miniwindowImage: instanceProperty(),
  miniwindowTitle: instanceProperty(),

  // Getting the Dock Tile
  dockTile: instanceProperty({ set: null }),

  // Printing Windows
  print: instanceSelector("print:"),
  dataWithEPS: instanceSelector("dataWithEPSInsideRect:"),
  dataWithPDF: instanceSelector("dataWithPDFInsideRect:"),

  // Providing Services
  validRequestor: instanceSelector("validRequestorForSendType:returnType:"),

  // Working with Carbon
  initWithWindowRef: instanceSelector("initWithWindowRef:"),
  windowRef: instanceProperty({ set: null }),

  // Triggering Constraint-Based Layout
  updateConstraintsIfNeeded: instanceSelector(),
  layoutIfNeeded: instanceSelector(),

  // Debugging Constraint-Based Layout

  // See Cocoa Autolayout Release Notes for more details on debugging constraint-based layout.

  visualizeConstraints: instanceSelector("visualizeConstraints:"),

  // Constraint-Based Layouts
  anchorAttribute: instanceSelector("anchorAttributeForOrientation:"),
  setAnchorAttribute: instanceSelector("setAnchorAttribute:forOrientation:")
}));
