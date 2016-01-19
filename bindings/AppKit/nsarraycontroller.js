import { instanceProperty, instanceSelector } from '../objc';
import { NSObjectController } from '../foundation';

export let NSArrayController = NSObjectController.extendClass("NSArrayController", () => ({
    // Managing Sort Descriptors
    //
    sortDescriptors: instanceProperty(),

    // Arranging Objects
    //
    arrangeObjects:   instanceSelector("arrangeObjects:"),
    arrangedObjects:  instanceProperty({ set: null }), // read-only
    rearrangeObjects: instanceSelector(),

    // Managing Content
    //
    add:                          instanceSelector("add:"),
    automaticallyPreparesContent: instanceProperty(),

    // Selection Attributes
    //
    avoidsEmptySelection:                instanceProperty(),
    setClearsFilterPredicateOnInsertion: instanceSelector("setClearsFilterPredicateOnInsertion:"),
    preservesSelection:                  instanceProperty(),
    alwaysUsesMultipleValuesMarker:      instanceProperty(),

    // Managing Selections
    //
    selectionIndex:         instanceProperty(),
    selectsInsertedObjects: instanceProperty(),
    selectionIndexes:       instanceProperty(),
    addSelectionIndexes:    instanceSelector("addSelectionIndexes:"),
    removeSelectionIndexes: instanceSelector("removeSelectionIndexes:"),
    selectedObjects:        instanceProperty(),
    addSelectedObjects:     instanceSelector("addSelectedObjects:"),
    removeSelectedObjects:  instanceSelector("removeSelectedObjects:"),
    selectNext:             instanceSelector("selectNext:"),
    canSelectNext:          instanceProperty({ set: null }), // read-only
    selectPrevious:         instanceSelector("selectPrevious:"),
    canSelectPrevious:      instanceProperty({ set: null }), // read-only

    // Inserting
    //
    canInsert: instanceProperty({ set: null }), // read-only
    insert:    instanceSelector("insert:"),

    // Adding and Removing Objects
    //
    addObject:       instanceSelector("addObject:"),
    addObjects:      instanceSelector("addObjects:"),
    insertObject:    instanceSelector("insertObject:atArrangedObjectIndex:"),
    insertObjects:   instanceSelector("insertObjects:atArrangedObjectIndexes:"),
    removeObjectAt:  instanceSelector("removeObjectAtArrangedObjectIndex:"),
    removeObjectsAt: instanceSelector("removeObjectsAtArrangedObjectIndexes:"),
    remove:          instanceSelector("remove:"),
    removeObject:    instanceSelector("removeObject:"),
    removeObjects:   instanceSelector("removeObjects:"),

    // Filtering Content
    //
    clearsFilterPredicateOnInsertion: instanceProperty({ set: null }), // read-only
    filterPredicate:                  instanceProperty(),

    // Automatic Content Rearranging
    //
    automaticallyRearrangesObjects: instanceProperty(),
    automaticRearrangementKeyPaths: instanceProperty({ set: null }), // read-only
    didChangeArrangementCriteria:   instanceProperty({ set: null }) // read-only
}));
