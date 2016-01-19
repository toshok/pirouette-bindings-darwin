// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("SKRequestDelegate");
var SKRequestDelegate;
_exports.SKRequestDelegate = SKRequestDelegate = foundation.Protocol.extendClass ("SKRequestDelegate", () => ({

    // Completing Requests
    requestDidFinish: objc.optionalMethod("requestDidFinish:"),

    // Handling Errrors
    requestDidFail: objc.optionalMethod("request:didFailWithError:")

}));
