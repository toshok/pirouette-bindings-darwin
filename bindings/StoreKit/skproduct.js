// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKProduct;
_exports.SKProduct = SKProduct = foundation.NSObject.extendClass ("SKProduct", () => ({

    // Getting Product Attributes
    localizedDescription: objc.instanceProperty(),
    localizedTitle: objc.instanceProperty(),
    price: objc.instanceProperty(),
    priceLocale: objc.instanceProperty(),
    productIdentifier: objc.instanceProperty()

}));
