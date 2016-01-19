// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKRequest;
_exports.SKRequest = SKRequest = foundation.NSObject.extendClass ("SKRequest", () => ({

    // Controlling the Request
    start: objc.instanceSelector("start"),
    cancel: objc.instanceSelector("cancel"),

    // Accessing the Delegate
    delegate: objc.autoboxProperty(SKRequestDelegate)

}));
