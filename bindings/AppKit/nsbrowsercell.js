import { instanceSelector, staticSelector, instanceProperty } from '../objc';
import { NSCell } from 'nscell';

export let NSBrowserCell = NSCell.extendClass("NSBrowserCell", () => ({

    // Getting Browser Cell Information
    //
    branchImage:            staticSelector(),
    highlightedBranchImage: staticSelector(),

    // Configuring Browser Cells
    //
    image:          instanceProperty(),
    alternateImage: instanceProperty(),

    // Managing Browser Cell State
    //
    reset:                instanceSelector(),
    set:                  instanceSelector(),
    isLeaf:               instanceProperty({ set: "setLeaf:" }),
    isLoaded:             instanceProperty({ set: "setLoaded:" }),
    highlightColorInView: instanceSelector("highlightColorInView:")
}));
