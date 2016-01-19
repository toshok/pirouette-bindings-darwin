// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKMutablePayment;
_exports.SKMutablePayment = SKMutablePayment = SKPayment.extendClass ("SKMutablePayment", () => ({

    // Getting and Setting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

}));
