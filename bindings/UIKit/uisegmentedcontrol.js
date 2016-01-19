// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIControl } from 'uicontrol'

//console.log("UISegmentedControl");
export let UISegmentedControl = UIControl.extendClass ("UISegmentedControl", () => ({

    // Initializing a Segmented Control
    initWithItems: instanceSelector("initWithItems:"),

    // Managing Segment Content
    setImage: instanceSelector("setImage:forSegmentAtIndex:"),
    image:    instanceSelector("imageForSegmentAtIndex:"),
    setTitle: instanceSelector("setTitle:forSegmentAtIndex:"),
    title:    instanceSelector("titleForSegmentAtIndex:"),

    // Managing Segments
    insertSegmentWithImage: instanceSelector("insertSegmentWithImage:atIndex:animated:"),
    insertSegmentWithTitle: instanceSelector("insertSegmentWithTitle:atIndex:animated:"),
    removeSegment:          instanceSelector("removeSegmentAtIndex:animated:"),
    removeAllSegments:      instanceSelector("removeAllSegments"),
    numberOfSegments: instanceProperty(),
    selectedSegmentIndex: instanceProperty(),

    // Managing Segment Behavior and Appearance
    setEnabled:       instanceSelector("setEnabled:forSegmentAtIndex:"),
    isEnabled:        instanceSelector("isEnabledForSegmentAtIndex:"),
    setContentOffset: instanceSelector("setContentOffset:forSegmentAtIndex:"),
    contentOffset:    instanceSelector("contentOffsetForSegmentAtIndex:"),
    setWidth:         instanceSelector("setWidth:forSegmentAtIndex:"),
    width:            instanceSelector("widthForSegmentAtIndex:"),
    momentary: instanceProperty(),
    segmentedControlStyle: instanceProperty(),
    apportionsSegmentWidthsByContent: instanceProperty(),

    // Customizing Appearance
    tintColor:                    instanceProperty().makeUIAppearance(),
    backgroundImage:              instanceSelector("backgroundImageForState:barMetrics:").makeUIAppearance(),
    setBackgroundImage:           instanceSelector("setBackgroundImage:forState:barMetrics:").makeUIAppearance(),
    contentPositionAdjustment:    instanceSelector("contentPositionAdjustmentForSegmentType:barMetrics:").makeUIAppearance(),
    setContentPositionAdjustment: instanceSelector("setContentPositionAdjustment:forSegmentType:barMetrics:").makeUIAppearance(),
    dividerImage:                 instanceSelector("dividerImageForLeftSegmentState:rightSegmentState:barMetrics:").makeUIAppearance(),
    setDividerImage:              instanceSelector("setDividerImage:forLeftSegmentState:rightSegmentState:barMetrics:").makeUIAppearance(),
    titleTextAttributes:          instanceSelector("titleTextAttributesForState:").makeUIAppearance(),
    setTitleTextAttributes:       instanceSelector("setTitleTextAttributes:forState:").makeUIAppearance()

}));
