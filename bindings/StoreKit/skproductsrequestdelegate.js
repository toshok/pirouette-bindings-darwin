// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("SKProductsRequestDelgate");
var SKProductRequestDelegate;
_exports.SKProductRequestDelegate = SKProductRequestDelegate = foundation.Protocol.extendClass ("SKProductRequestDelegate", () => ({

    // Receiving the Response
    didReceiveResponse: objc.requiredMethod ("productsRequest:didReceiveResponse:")

}));
