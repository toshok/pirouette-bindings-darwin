// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty } from '../objc';
import { UIView } from 'uiview';

//console.log("UIImageView");
export let UIImageView = UIView.extendClass ("UIImageView", () => ({

    // Initializing a UIImageView Object
    initWithImage:                    instanceSelector("initWithImage:"),
    initWithImageAndHighlightedImage: instanceSelector("initWithImage:highlightedImage:"),

    // Image Data
    image: instanceProperty(),
    highlightedImage: instanceProperty(),

    // Animating Images
    animationImages: instanceProperty(),
    highlightedAnimationImages: instanceProperty(),
    animationDuration: instanceProperty(),
    animationRepeatCount: instanceProperty(),
    startAnimating:   instanceSelector("startAnimating"),
    stopAnimating:    instanceSelector("stopAnimating"),
    isAnimating:      instanceSelector("isAnimating"),

    // Setting and Getting Attributes
    userInteractionEnabled: instanceProperty(),
    highlighted: instanceProperty()

}));
