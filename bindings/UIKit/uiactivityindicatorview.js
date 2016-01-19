// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { UIView } from 'uiview';

//console.log("UIActivityIndicatorView");
export let UIActivityIndicatorView = UIView.extendClass ("UIActivityIndicatorView", () => ({

  // Initializing an Activity Indicator
  initWithActivityIndicatorStyle: instanceSelector("initWithActivityIndicatorStyle:"),

  // Managing an Activity Indicator
  startAnimating:   instanceSelector("startAnimating"),
  stopAnimating:    instanceSelector("stopAnimating"),
  isAnimating:      instanceSelector("isAnimating"),
  hidesWhenStopped: instanceProperty(),

  // Configuring the Activity Indicator Appearance
  activityIndicatorViewStyle: instanceProperty(),
  color: instanceProperty()

}));
