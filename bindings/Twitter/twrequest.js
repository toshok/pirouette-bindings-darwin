// This file is part of Pirouette.  for licensing information, see the LICENSE file

var TWRequest;
_exports.TWRequest = TWRequest = foundation.NSObject.extendClass ("TWRequest", () => ({

    // Initializing Requests
    initWithURL:      objc.instanceSelector("initWithURL:parameters:requestMethod:"),

    // Accessing Properties
    account:          objc.instanceProperty(),
    requestMethod:    objc.instanceProperty(),
    URL:              objc.instanceProperty(),
    parameters:       objc.instanceProperty(),
    addMultiPartData: objc.instanceSelector("addMultiPartData:withName:type:"),

    // Sending Requests
    performRequestWithHandler: objc.instanceSelector("performRequestWithHandler:"),
    signedURLRequest: objc.instanceSelector("signedURLRequest")

}));
