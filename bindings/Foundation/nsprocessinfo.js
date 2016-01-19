// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, instanceSelector, instanceProperty } from '../objc';
import { NSObject } from 'nsobject';

export let NSProcessInfo = NSObject.extendClass("NSProcessInfo", () => ({

    // Getting the process information agent
    processInfo: staticSelector(),

    // Accessing process information
    arguments: instanceProperty({ set: null }),
    globallyUniqueString: instanceProperty({ set: null }),
    processIdentifier: instanceProperty({ set: null }),
    processName: instanceProperty({ set: null }),

    // Sudden application termination
    disableSuddenTermination: instanceSelector(),
    enableSuddenTermination: instanceSelector(),

    // Controlling automatic termination
    disableAutomaticTermination: instanceSelector("disableAutomaticTermination:"),
    enableAutomaticTermination: instanceSelector("enableAutomaticTermination:"),
    automaticTerminationSupportEnabled: instanceProperty(),

    // Getting host information
    hostName: instanceProperty({ set: null }),
    operatingSystemVersionString: instanceProperty({ set: null }),
    operatingSystemVersion: instanceProperty({ set: null }),

    // Getting computer information
    processorCount: instanceProperty({ set: null }),
    activeProcessorCount: instanceProperty({ set: null }),
    physicalMemory: instanceProperty({ set: null }),

}));

