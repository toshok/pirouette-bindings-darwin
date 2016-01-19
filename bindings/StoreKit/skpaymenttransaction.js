// This file is part of Pirouette.  for licensing information, see the LICENSE file

var SKPaymentTransaction;
_exports.SKPaymentTransaction = SKPaymentTransaction = NSObject.extendClass ("SKPaymentTransaction", () => ({

    // Getting Information About the Transaction
    error: objc.instanceProperty(),
    payment: objc.instanceProperty(),
    transactionState: objc.instanceProperty(),
    transactionIdentifier: objc.instanceProperty(),
    transactionReceipt: objc.instanceProperty(),
    transactionDate: objc.instanceProperty(),

    // Restored Transactions
    originalTransaction: objc.instanceProperty()

}));
