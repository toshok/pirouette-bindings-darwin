// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';

//console.log("UITableViewCell");
export let UITableViewCell = UIView.extendClass ("UITableViewCell", () => ({

    // Initializing a UITableViewCell Object
    initWithStyle: instanceSelector("initWithStyle:reuseIdentifier:"),
    initWithFrame:  instanceSelector("initWithFrame:reuseIdentifier:"), // Deprecated in iOS 3.0

    // Reusing Cells
    reuseIdentifier: instanceProperty(),
    prepareForReuse: instanceSelector("prepareForReuse"),

    // Managing Text as Cell Content
    textLabel: instanceProperty({ set: null }),
    detailTextLabel: instanceProperty({ set: null }),
    font: instanceProperty(), // Deprecated in iOS 3.0
    lineBreakMode: instanceProperty(), // Deprecated in iOS 3.0
    selectedTextColor: instanceProperty(), // Deprecated in iOS 3.0
    text: instanceProperty(), // Deprecated in iOS 3.0
    textAlignment: instanceProperty(), // Deprecated in iOS 3.0
    textColor: instanceProperty(), // Deprecated in iOS 3.0

    // Managing Images as Cell Content
    imageView: instanceProperty(),
    image: instanceProperty(), // Deprecated in iOS 3.0
    selectedImage: instanceProperty(), // Deprecated in iOS 3.0

    // Accessing Views of the Cell Object
    contentView: instanceProperty(),
    backgroundView: instanceProperty(),
    selectedBackgroundView: instanceProperty(),
    multipleSelectionBackgroundView: instanceProperty(),

    // Managing Accessory Views
    accessoryType: instanceProperty(),
    accessoryView: instanceProperty(),
    editingAccessoryType: instanceProperty(),
    editingAccessoryView: instanceProperty(),
    hidesAccessoryWhenEditing: instanceProperty(), // Deprecated in iOS 3.0

    // Managing Cell Selection and Highlighting
    setSelected:    instanceSelector("setSelected:animated:"),
    setHighlighted: instanceSelector("setHighlighted:animated:"),
    selected: instanceProperty({ set: function(v) { return this.setSelected (v, false); } }),
    selectionStyle: instanceProperty(),
    highlighted: instanceProperty({ set: function(v) { return this.setHighlighted (v, false); } }),

    // Editing the Cell
    setEditing: instanceSelector("setEditing:animated:"),
    editing: instanceProperty({ set: function(v) { return this.setEditing (v, false); } }),
    editingStyle: instanceProperty(),
    showingDeleteConfirmation: instanceProperty(),
    showsReorderControl: instanceProperty(),

    // Adjusting to State Transitions
    willTransitionToState: instanceSelector("willTransitionToState:"),
    didTransitionToState:  instanceSelector("didTransitionToState:"),

    // Managing Content Indentation
    indentationLevel: instanceProperty(),
    indentationWidth: instanceProperty(),
    shouldIndentWhileEditing: instanceProperty(),

    // Managing Targets and Actions

    // These properties are deprecated as of iOS 3.0. Instead, use the tableView:commitEditingStyle:forRowAtIndexPath: method of the UITableViewDataSource protocol or the tableView:accessoryButtonTappedForRowWithIndexPath: method of the UITableViewDelegate protocol.

    accessoryAction: instanceProperty(), // Deprecated in iOS 3.0
    editAction: instanceProperty(), // Deprecated in iOS 3.0
    target: instanceProperty() // Deprecated in iOS 3.0

}));
