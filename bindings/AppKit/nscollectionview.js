// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, autoboxProperty } from '../objc';
import { NSView } from 'nsview';
import { NSObject } from '../foundation';

export let NSCollectionView = NSView.extendClass("NSCollectionView", () => ({
    // Modifying the Collection View Item
    //
    itemPrototype: instanceProperty(),
    newItemForRepresentedObject: instanceSelector("newItemForRepresentedObject:"),

    // Working with the Responder Chain
    //
    isFirstResponder: instanceProperty({ set: null }),

    // Setting the Content
    //
    content: instanceProperty(),

    // Setting the Selection Mode
    //
    isSelectable:            instanceProperty({ set: "setSelectable" }),
    allowsMultipleSelection: instanceProperty(),
    selectionIndexes:        instanceProperty(),

    // Laying out the Collection View
    //
    maxNumberOfRows:    instanceProperty(),
    maxNumberOfColumns: instanceProperty(),
    minItemSize:        instanceProperty(),
    maxItemSize:        instanceProperty(),

    // Modifying the Background
    //
    backgroundColors: instanceProperty(),

    // Getting and Setting the Delegate
    //
    delegate: autoboxProperty(NSObject /* XXX should be NSCollectionViewDelegate*/),

    // Drag and Drop Support
    //
    draggingImageForItems: instanceSelector("draggingImageForItemsAtIndexes:withEvent:offset:"),
    setDraggingSourceOperationMask: instanceSelector("setDraggingSourceOperationMask:forLocal:"),

    // Getting a Collection Item and Its Frame
    //
    itemAtIndex: instanceSelector("itemAtIndex:"),
    frameForItemAtIndex: instanceSelector("frameForItemAtIndex:")
}));
