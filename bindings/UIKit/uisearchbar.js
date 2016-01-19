// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { UIView } from 'uiview';
//import { UISearchBarDelegate } from 'uisearchbardelegate';

//console.log("UISearchBar");
export let UISearchBar = UIView.extendClass ("UISearchBar", () => ({

    // Text Content
    placeholder: instanceProperty(),
    prompt: instanceProperty(),
    text: instanceProperty(),

    // Display Attributes
    barStyle: instanceProperty(),
    tintColor: instanceProperty(),
    translucent: instanceProperty(),

    // Text Input Properties
    autocapitalizationType: instanceProperty(),
    autocorrectionType: instanceProperty(),
    keyboardType: instanceProperty(),
    spellCheckingType: instanceProperty(),

    // Button Configuration
    showsBookmarkButton: instanceProperty(),
    showsCancelButton: instanceProperty({ set: function (v) { return this.setShowsCancelButton (v, false); } }),
    setShowsCancelButton: instanceSelector("setShowsCancelButton:animated:"),
    showsSearchResultsButton: instanceProperty(),
    searchResultsButtonSelected: instanceProperty(),

    // Scope Buttons
    scopeButtonTitles: instanceProperty(),
    selectedScopeButtonIndex: instanceProperty(),
    showsScopeBar: instanceProperty(),

    // Delegate
    //XXX delegate: autoboxProperty(UISearchBarDelegate),

    // Customizing Appearance
    imageForSearchBarIcon:                 instanceSelector("imageForSearchBarIcon:state:"),
    setImageForSearchBarIcon:              instanceSelector("setImage:forSearchBarIcon:state:"),
    positionAdjustmentForSearchBarIcon:    instanceSelector("positionAdjustmentForSearchBarIcon:"),
    setPositionAdjustmentForSearchBarIcon: instanceSelector("setPositionAdjustment:forSearchBarIcon:"),
    scopeBarButtonBackgroundImage:         instanceSelector("scopeBarButtonBackgroundImageForState:"),
    setScopeBarButtonBackgroundImage:      instanceSelector("setScopeBarButtonBackgroundImage:forState:"),
    scopeBarButtonDividerImage:            instanceSelector("scopeBarButtonDividerImageForLeftSegmentState:rightSegmentState:"),
    setScopeBarButtonDividerImage:         instanceSelector("setScopeBarButtonDividerImage:forLeftSegmentState:rightSegmentState:"),
    scopeBarButtonTitleTextAttributes:     instanceSelector("scopeBarButtonTitleTextAttributesForState:"),
    setScopeBarButtonTitleTextAttributes:  instanceSelector("setScopeBarButtonTitleTextAttributes:forState:"),
    searchFieldBackgroundImage:            instanceSelector("searchFieldBackgroundImageForState:"),
    setSearchFieldBackgroundImage:         instanceSelector("setSearchFieldBackgroundImage:forState:"),
    backgroundImage: instanceProperty(),
    scopeBarBackgroundImage: instanceProperty(),
    searchFieldBackgroundPositionAdjustment: instanceProperty(),
    searchTextPositionAdjustment: instanceProperty()

}));
