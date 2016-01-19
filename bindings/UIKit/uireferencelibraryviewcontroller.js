// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector } from '../objc';
import { UIViewController } from 'uiviewcontroller';

//console.log("UIReferenceLibraryViewController");
export let UIReferenceLibraryViewController = UIViewController.extendClass ("UIReferenceLibraryViewController", () => ({

    // Creating Reference-Library View Controllers
    dictionaryHasDefinitionForTerm: staticSelector("dictionaryHasDefinitionForTerm:"),
    initWithTerm:                    instanceSelector("initWithTerm:")

}));
