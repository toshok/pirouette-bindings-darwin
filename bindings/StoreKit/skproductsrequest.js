// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKProductRequest;
_exports.SKProductRequest = SKProductRequest = SKRequest.extendClass ("SKProductRequest", () => ({

    // Initializing a Products sRequest
    initWithProductIdentifiers: objc.instanceSelector("initWithProductIdentifiers:"),

    // Setting the Delegate
    delegate: objc.autoboxProperty(SKProductsRequestDelegate)

}));
