// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, sig } from '../objc';
import { NSObject } from '../foundation';
import { UIViewController } from 'uiviewcontroller';

//console.log("UITableViewController");
export let UITableViewController = UIViewController.extendClass ("UITableViewController", () => ({

    // Initializing the UITableViewController Object
    initWithStyle: instanceSelector("initWithStyle:").
				  returns( function () { return NSObject; /* should be UITableViewController */ }).
				  params( function () { return [ sig.Int ]; }),

    // Getting the Table View
    tableView: instanceProperty(),

    // Configuring the Table Behavior
    clearsSelectionOnViewWillAppear: instanceProperty()

}));
