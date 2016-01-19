// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, chainCtor, sig } from '../objc';
import { NSObject } from '../foundation';
import { UIView } from 'uiview';

//console.log("UIControl");

export let UIControl = UIView.extendClass ("UIControl", () => ({
    // Preparing and Sending Action Messages
    sendAction:                  instanceSelector("sendAction:to:forEvent:"),
    sendActionsForControlEvents: instanceSelector("sendActionsForControlEvents:"),
    addTarget:                   instanceSelector("addTarget:action:forControlEvents:"),
    removeTarget:                instanceSelector("removeTarget:action:forControlEvents:"),
    actionsForTarget:            instanceSelector("actionsForTarget:forControlEvent:"),

    // FIXME these two should be properties
    allTargets:                  instanceSelector("allTargets"),
    allControlEvents:            instanceSelector("allControlEvents"),

    // Setting and Getting Control Attributes
    state:            instanceProperty(),
    enabled:            instanceProperty(),
    selected:            instanceProperty(),
    highlighted:            instanceProperty(),
    contentVerticalAlignment:            instanceProperty(),
    contentHorizontalAlignment:            instanceProperty(),

    // Tracking Touches and Redrawing Controls
    beginTrackingWithTouch:      instanceSelector("beginTrackingWithTouch:withEvent:"),
    continueTrackingWithTouch:   instanceSelector("continueTrackingWithTouch:withEvent:"),
    endTrackingWithTouch:        instanceSelector("endTrackingWithTouch:withEvent:"),
    cancelTrackingWithEvent:     instanceSelector("cancelTrackingWithEvent:"),

    tracking:            instanceProperty(),
    touchInside:            instanceProperty()
}));

export let UIControlProxy = NSObject.extendClass ("UIControlProxy", () => ({

    constructor: function (fn) {
      chainCtor (UIControlProxy, this);
      this.fn = fn;
    },

    proxyAction: instanceSelector("action").
                               returns( function() { return sig.Void; }).
				params( function() { return []; }).
				  impl( function() { this.fn(); } )
}));

export let UIControlProxy1 = NSObject.extendClass("UIControlProxy1", () => ({

    constructor: function (fn) {
      chainCtor (UIControlProxy1, this);
      this.fn = fn;
    },

    proxyAction: instanceSelector("action").
                               returns( function() { return sig.Void; }).
				params( function() { return [NSObject]; }).
				  impl( function(v) { this.fn(v); } )
}));
