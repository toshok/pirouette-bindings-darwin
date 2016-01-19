// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKPayment;
_exports.SKPayment = SKPayment = NSObject.extendClass ("SKPayment", () => ({

    // Creating Instances
    paymentWithProduct: objc.staticSelector("paymentWithProduct:"),
    paymentWithProductIdentifier: objc.staticSelector("paymentWithProductIdentifier:"), // Deprecated in iOS 5.0

    // Getting Attributes
    productIdentifier: objc.instanceProperty(),
    quantity: objc.instanceProperty(),
    requestData: objc.instanceProperty()

}));
