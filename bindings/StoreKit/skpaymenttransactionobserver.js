// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("SKPaymentTransactionObserver");
var SKPaymentTransactionObserver;
_exports.SKPaymentTransactionObserver = SKPaymentTransactionObserver = foundation.Protocol.extendClass ("SKPaymentTransactionObserver", () => ({

    // Handling Transactions
    updatedTransactions: objc.requiredMethod("paymentQueue:updatedTransactions:"),
    removedTransactions: objc.optionalMethod("paymentQueue:removedTransactions:"),

    // Handling Restored Transactions
    restoreCompletedTransactionsFailedWithError:      objc.optionalMethod("paymentQueue:restoreCompletedTransactionsFailedWithError:"),
    paymentQueueRestoreCompletedTransactionsFinished: objc.optionalMethod("paymentQueueRestoreCompletedTransactionsFinished:")

}));
