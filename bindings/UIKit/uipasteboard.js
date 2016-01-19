// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, staticSelector, instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIPasteboard");
export let UIPasteboard = NSObject.extendClass ("UIPasteboard", () => ({

    // Getting and Removing Pasteboards
    generalPasteboard:        staticSelector("generalPasteboard"),
    pasteboardWithName:       staticSelector("pasteboardWithName:create:"),
    pasteboardWithUniqueName: staticSelector("pasteboardWithUniqueName"),
    removePasteboardWithName: staticSelector("removePasteboardWithName:"),

    // Getting and Setting Pasteboard Attributes
    name: instanceProperty(),
    persistent: instanceProperty(),
    changeCount: instanceProperty(),

    // Determining Types of Single Pasteboard Items
    pasteboardTypes:         instanceSelector("pasteboardTypes"),
    containsPasteboardTypes: instanceSelector("containsPasteboardTypes:"),

    // Getting and Setting Single Pasteboard Items
    dataForPasteboardType:      instanceSelector("dataForPasteboardType:"),
    valueForPasteboardType:     instanceSelector("valueForPasteboardType:"),
    setData:                    instanceSelector("setData:forPasteboardType:"),
    setValue:                   instanceSelector("setValue:forPasteboardType:"),

    // Determining the Types of Multiple Pasteboard Items
    pasteboardTypesForItemSet:        instanceSelector("pasteboardTypesForItemSet:"),
    itemSetWithPasteboardTypes:       instanceSelector("itemSetWithPasteboardTypes:"),
    containsPasteboardTypesInItemSet: instanceSelector("containsPasteboardTypes:inItemSet:"),
    numberOfItems: instanceProperty(),

    // Getting and Setting Multiple Pasteboard Items
    dataForPasteboardTypeInItemSet:   instanceSelector("dataForPasteboardType:inItemSet:"),
    valuesForPasteboardTypeInItemSet: instanceSelector("valuesForPasteboardType:inItemSet:"),
    addItems:                         instanceSelector("addItems:"),
    items: instanceProperty(),

    // Getting and Setting Pasteboard Items of Standard Data Types
    string: instanceProperty(),
    strings: instanceProperty(),
    image: instanceProperty(),
    images: instanceProperty(),
    URL: instanceProperty(),
    URLs: instanceProperty(),
    color: instanceProperty(),
    colors: instanceProperty()

}));
