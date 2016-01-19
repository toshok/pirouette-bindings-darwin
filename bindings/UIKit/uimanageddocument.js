// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

//console.log("UIManagedDocument");
export let UIManagedDocument = NSObject.extendClass ("UIManagedDocument", () => ({

    // Managing the Core Data Stack
    configurePersistentStoreCoordinator: instanceSelector("configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:"),
    persistentStoreType:                 instanceSelector("persistentStoreTypeForFileType:"),
    managedObjectContext: instanceProperty(),
    managedObjectModel: instanceProperty(),
    persistentStoreOptions: instanceProperty(),
    modelConfiguration: instanceProperty(),

    // Customizing Read and Write Operations
    readAdditionalContent:  instanceSelector("readAdditionalContentFromURL:error:"),
    additionalContent:      instanceSelector("additionalContentForURL:error:"),
    writeAdditionalContent: instanceSelector("writeAdditionalContent:toURL:originalContentsURL:error:"),

    // Naming the Persistent Store File
    persistentStoreName: staticSelector("persistentStoreName")

}));
