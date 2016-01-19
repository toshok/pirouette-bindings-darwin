// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from "../objc";
import { NSViewController } from 'nsviewcontroller';

export let NSCollectionViewItem = NSViewController.extendClass("NSCollectionViewItem", () => ({

    // Getting and Setting Image and Text Fields
    //
    imageView: objc.instanceProperty(),
    textField: objc.instanceProperty(),

    // Managing the Selection
    //
    isSelected: objc.instanceProperty({ set: "setSelected" }),

    // Parent Collection View
    //
    collectionView: objc.instanceProperty({ set: null }),

    // Dragging Components
    //
    draggingImageComponents: objc.instanceProperty({ set: null })

}));
