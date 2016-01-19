// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, staticSelector, instanceProperty, sig } from '../objc';
import { NSObject } from 'nsobject'

export let NSIndexPath = NSObject.extendClass("NSIndexPath", () => ({

    // Creating Index Paths
    indexPathWithIndex: staticSelector("indexPathWithIndex:"),
    indexPathWithIndexes: staticSelector ("indexPathWithIndexes:length:"),
    initWithIndex: instanceSelector("initWithIndex:")/*.
                                 returns( function() { return NSIndexPath; } ).
				  params( function() { return [ sig.UInt ]; })*/,
    initWithIndexes: instanceSelector("initWithIndexes:length:")/*.
                                   returns( function() { return NSIndexPath; } ),.
			           params( function() { return [ (sig.PointerTo sig.UInt), sig.UInt ])*/,

    // Querying Index Paths
    indexAtPosition: instanceSelector("indexAtPosition:").
                                   returns( function() { return sig.UInt; } ).
				    params( function() { return [ sig.UInt ]; } ),

    indexPathByAddingIndex: instanceSelector("indexPathByAddingIndex:")/*.
                                          returns( function() { return NSIndexPath; } ).
					   params( function() { return [ sig.UInt ]; })*/,
    indexPathByRemovingLastIndex: instanceSelector("indexPathByRemovingLastIndex")/*.
                                                returns( function() { return NSIndexPath; } )*/,

    length: instanceProperty({ set: null }),
    indexes: instanceProperty({ set: null }),

    // Comparing Index Paths
    compare: instanceSelector("compare:")/*.
                           returns( function() { return NSComparisonResult; } ).
			    params( function() { return [ NSIndexPath ]; } )*/

}));
