// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { UIBarItem } from 'uibaritem';
import { UIControlProxy1 } from 'uicontrol';

//console.log("UIBarButtonItem");
export let UIBarButtonItem = UIBarItem.extendClass ("UIBarButtonItem", () => ({

    // Initializing an Item
    initWithCustomView:          instanceSelector("initWithCustomView:"),
    initWithBarButtonSystemItem: instanceSelector("initWithBarButtonSystemItem:target:action:"),
    initWithImage:               instanceSelector("initWithImage:style:target:action:"),
    initWithTitle:               instanceSelector("initWithTitle:style:target:action:"),
    initWithImageAndLandscape:   instanceSelector("initWithImage:landscapeImagePhone:style:target:action:"),

    initWithClickHandler: function (title,style,click) {
      this.proxy = new UIControlProxy1(click);
      return this.initWithTitle(title, style, this.proxy, this.proxy.proxyAction);
    },

    // Getting and Setting Properties
    target: instanceProperty(),
    action: instanceProperty(),
    style: instanceProperty(),
    possibleTitles: instanceProperty(),
    width: instanceProperty(),
    customView: instanceProperty(),

    tintColor: instanceProperty().makeUIAppearance(),

    getBackButtonBackgroundImage:                      instanceSelector("backButtonBackgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackButtonBackgroundImage:                      instanceSelector("setBackButtonBackgroundImage:forState:barMetrics:").makeUIAppearance(),

    getBackButtonTitlePositionAdjustment:              instanceSelector("backButtonTitlePositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackButtonTitlePositionAdjustment:              instanceSelector("setBackButtonTitlePositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackButtonBackgroundVerticalPositionAdjustment: instanceSelector("backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackButtonBackgroundVerticalPositionAdjustment: instanceSelector("setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackgroundVerticalPositionAdjustment:           instanceSelector("backgroundVerticalPositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setBackgroundVerticalPositionAdjustment:           instanceSelector("setBackgroundVerticalPositionAdjustment:forBarMetrics:").makeUIAppearance(),

    getBackgroundImage:                                instanceSelector("backgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackgroundImage:                                instanceSelector("setBackgroundImage:forState:barMetrics:").makeUIAppearance(),

    getTitlePositionAdjustment:                        instanceSelector("titlePositionAdjustmentForBarMetrics:").makeUIAppearance(),
    setTitlePositionAdjustment:                        instanceSelector("setTitlePositionAdjustment:forBarMetrics:").makeUIAppearance(),

    clicked: instanceProperty({
        set: function (v) {
          if (v) {
            this.proxy = new UIControlProxy1(v);
            this.target = this.proxy;
            this.action = this.proxy.proxyAction;
	  }
          else {
            this.proxy = null;
            this.target = null;
            this.action = null;
	  }
	},
        get: null // this should really be an actual getter that returns the callback...
    })

}));
