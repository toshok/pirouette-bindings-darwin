// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { NSObject } from '../foundation';
import { UISearchDisplayDelegate } from 'uisearchdisplaydelegate';

//console.log("UISearchDisplayController");
export let UISearchDisplayController = NSObject.extendClass ("UISearchDisplayController", () => ({

    // Initialization
    initWithSearchBar: instanceSelector("initWithSearchBar:contentsController:"),

    // Displaying the Search Interface
    active:                   instanceProperty ({ set: function(v) { return this.setActive(v, false); } }),
    setActive:                instanceSelector("setActive:animated:"),

    // Configuration
    delegate:                 autoboxProperty(UISearchDisplayDelegate),
    searchBar:                instanceProperty(),
    searchContentsController: instanceProperty(),
    searchResultsTableView:   instanceProperty(),
    searchResultsDataSource:  instanceProperty(),
    searchResultsDelegate:    instanceProperty(),
    searchResultsTitle:       instanceProperty()

}));
