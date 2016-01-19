// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, instanceProperty, staticSelector, autoboxProperty } from '../objc';
import { UIDocumentInteractionControllerDelegate } from 'uidocumentinteractioncontrollerdelegate';
import { NSObject } from '../foundation';

//console.log("UIDocumentInteractionController");
export let UIDocumentInteractionController = NSObject.extendClass ("UIDocumentInteractionController", () => ({

    // Creating the Document Interaction Controller
    interactionControllerWithURL:       staticSelector("interactionControllerWithURL:"),

    // Presenting and Dismissing a Document Preview
    presentPreview:                      instanceSelector("presentPreviewAnimated:"),
    dismissPreview:                      instanceSelector("dismissPreviewAnimated:"),

    // Presenting and Dismissing Menus
    presentOptionsMenuFromRect:          instanceSelector("presentOptionsMenuFromRect:inView:animated:"),
    presentOptionsMenuFromBarButtonItem: instanceSelector("presentOptionsMenuFromBarButtonItem:animated:"),
    presentOpenInMenuFromRect:           instanceSelector("presentOpenInMenuFromRect:inView:animated:"),
    presentOpenInMenuFromBarButtonItem:  instanceSelector("presentOpenInMenuFromBarButtonItem:animated:"),
    dismissMenu:                         instanceSelector("dismissMenuAnimated:"),

    // Accessing the Target Document’s Attributes
    URL: instanceProperty(),
    UTI: instanceProperty(),
    name: instanceProperty(),
    icons: instanceProperty(),
    annotation: instanceProperty(),

    // Accessing the Controller Attributes
    gestureRecognizers: instanceProperty(),
    delegate: autoboxProperty(UIDocumentInteractionControllerDelegate)

}));
