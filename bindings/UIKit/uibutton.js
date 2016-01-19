// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty } from '../objc';
import { UIControl, UIControlProxy } from 'uicontrol';
import { UIControlState, UIControlEvent } from 'enums';

console.log ("UIButton");
export let UIButton = UIControl.extendClass ("UIButton", () => ({

  // Creating Buttons
  buttonWithType:                     staticSelector("buttonWithType:"),

  // Configuring Button Title
  titleLabel:                         instanceProperty(),
  reversesTitleShadowWhenHighlighted: instanceProperty(),
  setTitle:            		      instanceSelector("setTitle:forState:"),
  getTitle:            		      instanceSelector("titleForState:"),
  setTitleColor:       		      instanceSelector("setTitleColor:forState:").makeUIAppearance(),
  getTitleColor:       		      instanceSelector("titleColorForState:").makeUIAppearance(),
  setTitleShadowColor: 		      instanceSelector("setTitleShadowColor:forState:"),
  getTitleShadowColor: 		      instanceSelector("titleShadowColorForState:"),

  font:              instanceProperty(), // Deprecated in iOS 3.0
  lineBreakMode:     instanceProperty(), // Deprecated in iOS 3.0
  titleShadowOffset: instanceProperty(), // Deprecated in iOS 3.0

  // Configuring Button Presentation
  adjustsImageWhenHighlighted: instanceProperty(),
  adjustsImageWhenDisabled:    instanceProperty(),
  showsTouchWhenHighlighted:   instanceProperty(),

  setBackgroundImage:  instanceSelector("setBackgroundImage:forState:"),
  getBbackgroundImage: instanceSelector("backgroundImageForState:"),
  setImage:            instanceSelector("setImage:forState:"),
  getImage:            instanceSelector("imageForState:"),
  tintColor:           instanceProperty().makeUIAppearance(),

  // Configuring Edge Insets
  contentEdgeInsets:   instanceProperty(),
  titleEdgeInsets:     instanceProperty(),
  imageEdgeInsets:     instanceProperty(),

  // Getting the Current State
  buttonType:              instanceProperty(),
  currentTitle:            instanceProperty(),
  currentTitleColor:       instanceProperty(),
  currentTitleShadowColor: instanceProperty(),
  currentImage:            instanceProperty(),
  currentBackgroundImage:  instanceProperty(),
  imageView:               instanceProperty(),

  // Getting Dimensions
  backgroundRectForBounds: instanceSelector("backgroundRectForBounds:"),
  contentRectForBounds:    instanceSelector("contentRectForBounds:"),
  titleRectForContentRect: instanceSelector("titleRectForContentRect:"),
  imageRectForContentRect: instanceSelector("imageRectForContentRect:"),

  clicked: instanceProperty({
				 set: function (v) {
				   if (v) {
				     this.proxy = new UIControlProxy(v);
				     this.addTarget(this.proxy, this.proxy.proxyAction, UIControlEvent.TouchUpInside);
				   }
				   else {
				     this.proxy = null;
				   }
				 },
				 get: null // this should really be an actual getter that returns the callback...
  }),

  // handle accessors for normal state
  title: instanceProperty({
      set: function (v) { this.setTitle(v, UIControlState.normal); },
      get: function () { return this.getTitle(UIControlState.normal); }
  })

}));
