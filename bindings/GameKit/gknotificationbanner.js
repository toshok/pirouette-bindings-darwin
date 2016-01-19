// This file is part of Pirouette.  for licensing information, see the LICENSE file

var GKNotificationBanner;
_exports.GKNotificationBanner = GKNotificationBanner = foundation.NSObject.extendClass ("GKNotificationBanner", () => ({

    // Displaying a Notification Banner
    showBanner: objc.staticSelector("showBannerWithTitle:message:completionHandler:")

}));
