// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIScrollView } from 'uiscrollview';
import { UITableViewDataSource } from 'uitableviewdatasource';
import { UITableViewDelegate } from 'uitableviewdelegate';

//console.log("UITableView");
export let UITableView = UIScrollView.extendClass ("UITableView", () => ({

    // Initializing a UITableView Object
    initWithFrame: instanceSelector("initWithFrame:style:"),

    // Configuring a Table View
    dequeueReusableCellWithIdentifier: instanceSelector("dequeueReusableCellWithIdentifier:"),
    numberOfRowsInSection:             instanceSelector("numberOfRowsInSection:"),
    numberOfSections:                  instanceSelector("numberOfSections"),
    style: instanceProperty(),
    rowHeight: instanceProperty(),
    separatorStyle: instanceProperty(),
    separatorColor: instanceProperty(),
    backgroundView: instanceProperty(),
    tableHeaderView: instanceProperty(),
    tableFooterView: instanceProperty(),
    sectionHeaderHeight: instanceProperty(),
    sectionFooterHeight: instanceProperty(),
    sectionIndexMinimumDisplayRowCount: instanceProperty(),

    // Accessing Cells and Sections
    cellForRowAtIndexPath:    instanceSelector("cellForRowAtIndexPath:"),
    indexPathForCell:         instanceSelector("indexPathForCell:"),
    indexPathForRowAtPoint:   instanceSelector("indexPathForRowAtPoint:"),
    indexPathsForRowsInRect:  instanceSelector("indexPathsForRowsInRect:"),
    visibleCells:             instanceSelector("visibleCells"),
    indexPathsForVisibleRows: instanceSelector("indexPathsForVisibleRows"),

    // Scrolling the Table View
    scrollToRowAtIndexPath:                     instanceSelector("scrollToRowAtIndexPath:atScrollPosition:animated:"),
    scrollToNearestSelectedRowAtScrollPosition: instanceSelector("scrollToNearestSelectedRowAtScrollPosition:animated:"),

    // Managing Selections
    indexPathForSelectedRow:   instanceSelector("indexPathForSelectedRow"),
    indexPathsForSelectedRows: instanceSelector("indexPathsForSelectedRows"),
    selectRowAtIndexPath:      instanceSelector("selectRowAtIndexPath:animated:scrollPosition:"),
    deselectRowAtIndexPath:    instanceSelector("deselectRowAtIndexPath:animated:"),
    allowsSelection: instanceProperty(),
    allowsMultipleSelection: instanceProperty(),
    allowsSelectionDuringEditing: instanceProperty(),
    allowsMultipleSelectionDuringEditing: instanceProperty(),

    // Inserting, Deleting, and Moving Rows and Sections
    beginUpdates:           instanceSelector("beginUpdates"),
    endUpdates:             instanceSelector("endUpdates"),
    insertRowsAtIndexPaths: instanceSelector("insertRowsAtIndexPaths:withRowAnimation:"),
    deleteRowsAtIndexPaths: instanceSelector("deleteRowsAtIndexPaths:withRowAnimation:"),
    moveRowAtIndexPath:     instanceSelector("moveRowAtIndexPath:toIndexPath:"),
    insertSections:         instanceSelector("insertSections:withRowAnimation:"),
    deleteSections:         instanceSelector("deleteSections:withRowAnimation:"),
    moveSection:            instanceSelector("moveSection:toSection:"),

    // Managing the Editing of Table Cells
    editing: instanceProperty({ set: function(v) { return this.setEditing(v, false); } }),
    setEditing: instanceSelector("setEditing:animated:"),

    // Reloading the Table View
    reloadData:               instanceSelector("reloadData"),
    reloadRowsAtIndexPaths:   instanceSelector("reloadRowsAtIndexPaths:withRowAnimation:"),
    reloadSections:           instanceSelector("reloadSections:withRowAnimation:"),
    reloadSectionIndexTitles: instanceSelector("reloadSectionIndexTitles"),

    // Accessing Drawing Areas of the Table View
    rectForSection:         instanceSelector("rectForSection:"),
    rectForRowAtIndexPath:  instanceSelector("rectForRowAtIndexPath:"),
    rectForFooterInSection: instanceSelector("rectForFooterInSection:"),
    rectForHeaderInSection: instanceSelector("rectForHeaderInSection:"),

    // Registering Nib Objects for Cell Reuse
    registerNibForCellReuseIdentifier: instanceSelector("registerNib:forCellReuseIdentifier:"),

    // Managing the Delegate and the Data Source
    dataSource: autoboxProperty(UITableViewDataSource),
    delegate: autoboxProperty(UITableViewDelegate)

}));
