// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIDocument");
export let UIDocument = NSObject.extendClass ("UIDocument", () => ({

    // Initializing a Document Object
    initWithFileURL: instanceSelector("initWithFileURL:"),

    // Accessing Document Attributes
    fileURL: instanceProperty(),
    localizedName: instanceProperty(),
    fileType: instanceProperty(),
    fileModificationDate: instanceProperty(),
    documentState: instanceProperty(),

    // Writing Document Data
    closeWithCompletionHandler: instanceSelector("closeWithCompletionHandler:"),
    contents:                   instanceSelector("contentsForType:error:"),
    saveToURL:                  instanceSelector("saveToURL:forSaveOperation:completionHandler:"),
    writeContentsSafelyToURL:   instanceSelector("writeContents:andAttributes:safelyToURL:forSaveOperation:error:"),
    writeContentsToURL:         instanceSelector("writeContents:toURL:forSaveOperation:originalContentsURL:error:"),
    savingFileType:             instanceSelector("savingFileType"),
    fileAttributesToWriteToURL: instanceSelector("fileAttributesToWriteToURL:forSaveOperation:error:"),
    fileNameExtensionForType:   instanceSelector("fileNameExtensionForType:saveOperation:"),

    // Reading Document Data
    openWithCompletionHandler: instanceSelector("openWithCompletionHandler:"),
    loadFromContents:          instanceSelector("loadFromContents:ofType:error:"),
    readFromURL:               instanceSelector("readFromURL:error:"),

    // Accessing Document Files Asynchronously
    performAsynchronousFileAccessUsingBlock: instanceSelector("performAsynchronousFileAccessUsingBlock:"),

    // Reverting a Document
    revertToContentsOfURL:     instanceSelector("revertToContentsOfURL:completionHandler:"),

    // Disabling and Enabling Editing
    disableEditing:            instanceSelector("disableEditing"),
    enableEditing:             instanceSelector("enableEditing"),

    // Tracking Changes and Autosaving
    undoManager:              instanceProperty(),
    hasUnsavedChanges:             instanceSelector("hasUnsavedChanges"),
    updateChangeCount:             instanceSelector("updateChangeCount:"),
    changeCountToken:              instanceSelector("changeCountTokenForSaveOperation:"),
    updateChangeCountWithToken:    instanceSelector("updateChangeCountWithToken:forSaveOperation:"),
    autosaveWithCompletionHandler: instanceSelector("autosaveWithCompletionHandler:"),

    // Resolving Conflicts and Handling Errors
    handleError:                      instanceSelector("handleError:userInteractionPermitted:"),
    finishedHandlingError:            instanceSelector("finishedHandlingError:recovered:"),
    userInteractionNoLongerPermitted: instanceSelector("userInteractionNoLongerPermittedForError:")

}));
