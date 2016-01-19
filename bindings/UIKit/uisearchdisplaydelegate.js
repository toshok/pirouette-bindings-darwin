// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UISearchDisplayDelegate");
export let UISearchDisplayDelegate = Protocol.extendClass("UISearchDisplayDelegate", () => ({

    // Search State Change
    willBeginSearch: optionalMethod("searchDisplayControllerWillBeginSearch:"),
    didBeginSearch:  optionalMethod("searchDisplayControllerDidBeginSearch:"),
    willEndSearch:   optionalMethod("searchDisplayControllerWillEndSearch:"),
    didEndSearch:    optionalMethod("searchDisplayControllerDidEndSearch:"),

    // Loading and Unloading the Table View
    didLoadSearchResultsTableView:    optionalMethod("searchDisplayController:didLoadSearchResultsTableView:"),
    willUnloadSearchResultsTableView: optionalMethod("searchDisplayController:willUnloadSearchResultsTableView:"),

    // Showing and Hiding the Table View
    willShowSearchResultsTableView: optionalMethod("searchDisplayController:willShowSearchResultsTableView:"),
    didShowSearchResultsTableView:  optionalMethod("searchDisplayController:didShowSearchResultsTableView:"),
    willHideSearchResultsTableView: optionalMethod("searchDisplayController:willHideSearchResultsTableView:"),
    didHideSearchResultsTableView:  optionalMethod("searchDisplayController:didHideSearchResultsTableView:"),

    // Responding to Changes in Search Criteria
    shouldReloadTableForSearchString: optionalMethod("searchDisplayController:shouldReloadTableForSearchString:"),
    shouldReloadTableForSearchScope:  optionalMethod("searchDisplayController:shouldReloadTableForSearchScope:")

}));
