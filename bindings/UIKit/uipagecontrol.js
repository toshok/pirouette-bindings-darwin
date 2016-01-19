// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol';

//console.log("UIPageControl");
export let UIPageControl = UIControl.extendClass ("UIPageControl", () => ({

    // Managing the Page Navigation
    currentPage: instanceProperty(),
    numberOfPages: instanceProperty(),
    hidesForSinglePage: instanceProperty(),

    // Updating the Page Display
    defersCurrentPageDisplay:         instanceProperty(),
    updateCurrentPageDisplay: instanceSelector("updateCurrentPageDisplay"),

    // Resizing the Control
    sizeForNumberOfPages: instanceSelector("sizeForNumberOfPages:")

}));
