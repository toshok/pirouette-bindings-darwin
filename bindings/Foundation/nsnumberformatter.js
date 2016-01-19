// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticProperty, instanceProperty, instanceSelector, sig } from '../objc';
import { NSObject } from 'nsobject';
import { NSFormatter } from 'nsformatter';

export let NSNumberFormatter = NSFormatter.extendClass("NSNumberFormatter", {

    // Configuring formatter behavior and style
    formatterBehavior: instanceProperty(),
    numberStyle: instanceProperty(),
    generatesDecimalNumbers: instanceProperty(),

    // Converting between number and strings
    //getObjectValue: instanceSelector("getObjectValue:forString:range:error:"),
    numberFromString: instanceSelector("numberFromString:"),
    stringFromNumber: instanceSelector("stringFromNumber:"),
    localizedStringFromNumber: instanceSelector("localizedStringFromNumber:numberStyle:"),

    // Managing localization of numbers
    locale: instanceProperty(),

    // Configuring rounding behavior
    roundingIncrement: instanceProperty(),
    roundingMode: instanceProperty(),

    // Configuring numeric formats
    formattingContext: instanceProperty(),
    formatWidth: instanceProperty(),
    negativeFormat: instanceProperty(),
    positiveFormat: instanceProperty(),
    multiplier: instanceProperty(),

    // Configuring numeric symbols
    percentSymbol: instanceProperty(),
    perMillSymbol: instanceProperty(),
    minusSign: instanceProperty(),
    plusSign: instanceProperty(),
    exponentSymbol: instanceProperty(),
    zeroSymbol: instanceProperty(),
    nilSymbol: instanceProperty(),
    notANumberSymbol: instanceProperty(),
    negativeInfinitySymbol: instanceProperty(),
    positiveInfinitySymbol: instanceProperty(),

    // Configuring the format of currency
    currencySymbol: instanceProperty(),
    currencyCode: instanceProperty(),
    internationalCurrencySymbol: instanceProperty(),
    currencyGroupingSeparator: instanceProperty(),

    // Configuring numeric preffixes and suffixes
    positivePrefix: instanceProperty(),
    positiveSuffix: instanceProperty(),
    negativePrefix: instanceProperty(),
    negativeSuffix: instanceProperty(),

    // Configuring separators and grouping size
    groupingSeparator: instanceProperty(),
    useGroupingSeparator: instanceProperty(),
    decimalSeparator: instanceProperty(),
    alwaysShowDecimalSeparator: instanceProperty(),
    currencyDecimalSeparator: instanceProperty(),
    groupingSize: instanceProperty(),
    secondaryGroupingSize: instanceProperty(),

    // Managing the padding of numbers
    paddingCharacter: instanceProperty(),
    paddingPosition: instanceProperty(),

    // Managing input and output attributes
    allowsFloats: instanceProperty(),
    minimum: instanceProperty(),
    maximum: instanceProperty(),
    minimumIntegerDigits: instanceProperty(),
    minimumFractionDigits: instanceProperty(),
    maximumIntegerDigits: instanceProperty(),
    maximumFractionDigits: instanceProperty(),

    // Configuring significant digits
    usesSignificantDigits: instanceProperty(),
    minimumSignificantDigits: instanceProperty(),
    maximumSignificantDigits: instanceProperty(),

    // Managing leniency behavior
    lenient: instanceProperty({ get: 'isLenient' }),

    // Managing the validation of partial numeric strings
    partialStringValidationEnabled: instanceProperty({ get: 'isPartialStringValidationEnabled' }),
});

NSNumberFormatter.newFormatter = function() {
    return NSNumberFormatter.new();
};

