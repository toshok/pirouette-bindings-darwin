// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UILocalizedIndexCollation");
export let UILocalizedIndexCollation = NSObject.extendClass ("UILocalizedIndexCollation", () => ({

    // Getting the Shared Instance
    currentCollation:    staticSelector("currentCollation"),

    // Preparing the for Sections and Section Indexes
    sectionForObject:     instanceSelector("sectionForObject:collationStringSelector:"),
    sortedArrayFromArray: instanceSelector("sortedArrayFromArray:collationStringSelector:"),

    // Providing Section Index Data to the Table View
    sectionTitles: instanceProperty(),
    sectionIndexTitles: instanceProperty(),
    sectionForSectionIndexTitleAtIndex: instanceSelector("sectionForSectionIndexTitleAtIndex:")

}));
