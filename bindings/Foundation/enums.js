
import { makeEnum } from '../objc';

export let NSComparisonResult = makeEnum({
    getTypeSignature: function() { return "i"; },

    ascending: -1,
    same:       0,
    descending: 1
});

export let NSFormattingUnitStyle = makeEnum({
    getTypeSignature: function() { return "i"; },

    styleShort: 1,
    styleMedium: 2,
    styleLong: 3
});

export let NSFormattingContext = makeEnum({
    getTypeSignature: function() { return "i"; },

    unknown: 0,
    dynamic: 1,
    standalone: 2,
    listItem: 3,
    beginningOfSentence: 4,
    middleOfSentence: 5
});

export let NSNumberFormatterBehavior = makeEnum({
    getTypeSignature: function() { return "i"; },

    default: 0,
    version_10_0: 1000,
    version_10_4: 1040
});

export let NSNumberFormatterStyle = makeEnum({
    getTypeSignature: function() { return "i"; },

    noStyle: 0,
    decimal: 1,
    currency: 2,
    percent: 3,
    scientific: 4,
    spellOut: 5
});

export let NSNumberFormatterPadPosition = makeEnum({
    getTypeSignature: function() { return "i"; },

    beforePrefix: 0,
    afterPrefix: 1,
    beforeSuffix: 2,
    afterSuffix: 3
});

