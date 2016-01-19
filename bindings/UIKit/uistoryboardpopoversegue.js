// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { UIStoryboardSegue } from 'uistoryboardsegue';

//console.log("UIStoryboardPopoverSegue");
export let UIStoryboardPopoverSegue = UIStoryboardSegue.extendClass ("UIStoryboardPopoverSegue", () => ({

    // Accessing the Segue Attributes
    popoverController: instanceProperty()

}));
