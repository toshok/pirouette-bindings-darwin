// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { NSObject } from '../foundation';

//console.log("UILocalNotification");
export let UILocalNotification = NSObject.extendClass ("UILocalNotification", () => ({

    // Scheduling a Local Notification
    fireDate: instanceProperty(),
    timeZone: instanceProperty(),
    repeatInterval: instanceProperty(),
    repeatCalendar: instanceProperty(),

    // Composing the Alert
    alertBody: instanceProperty(),
    alertAction: instanceProperty(),
    hasAction: instanceProperty(),
    alertLaunchImage: instanceProperty(),

    // Configuring Other Parts of the Notification
    applicationIconBadgeNumber: instanceProperty(),
    soundName: instanceProperty(),
    userInfo: instanceProperty()

}));
