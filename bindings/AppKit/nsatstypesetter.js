import { staticSelector, instanceProperty, instanceSelector } from '../objc'
import { NSTypesetter } from 'nstypesetter'

export let NSATSTypesetter = NSTypesetter.extendClass("NSATSTypesetter", () => ({

    // Getting a Typesetter
    //
    sharedTypesetter: staticSelector(),

    // Managing the Layout Manager
    //
    layoutManager:      instanceSelector(),
    usesFontLeading:    instanceProperty(),
    typesetterBehavior: instanceProperty(),
    hyphenationFactor:  instanceProperty(),

    // Managing the Text Container
    //
    currentTextContainer: instanceProperty({ set: null }), // read-only
    lineFragmentPadding: instanceProperty(),

    // Mapping Screen and Printer Fonts
    substituteFontForFont: instanceSelector("substituteFontForFont:"),

    // Managing Text Tabs
    //
    textTabForGlyphLocation: instanceSelector("textTabForGlyphLocation:writingDirection:maxLocation:"),

    // Bidirectional Text Processing
    //
    bidiProcessingEnabled: instanceProperty(),

    // Accessing Paragraph Typesetting Information
    //
    attributedString:                   instanceProperty(),
    setParagraphAndSeparatorGlyphRange: instanceSelector("setParagraphGlyphRange:separatorGlyphRange:"),
    paragraphGlyphRange:                instanceProperty({ set: null }), // read-only
    paragraphSeparatorGlyphRange:       instanceProperty({ set: null }), // read-only

    // Paragraph Layout
    //
    layoutParagraphAtPoint: instanceSelector("layoutParagraphAtPoint:"),

    // Line and Paragraph Spacing
    //
    lineSpacingAfterGlyph:       instanceSelector("lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:"),
    paragraphSpacingAfterGlyph:  instanceSelector("paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:"),
    paragraphSpacingBeforeGlyph: instanceSelector("paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:"),

    // Glyph Caching
    //
    setHardInvalidation: instanceSelector("setHardInvalidation:forGlyphRange:"),

    // Laying out Glyphs
    //
    boundingBoxForControlGlyph:   instanceSelector("boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:"),
    getLineFragmentRect:          instanceSelector("getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:"),
    hyphenCharacterForGlyph:      instanceSelector("hyphenCharacterForGlyphAtIndex:"),
    hyphenationFactorForGlyph:    instanceSelector("hyphenationFactorForGlyphAtIndex:"),
    shouldBreakLineByHyphenating: instanceSelector("shouldBreakLineByHyphenatingBeforeCharacterAtIndex:"),
    shouldBreakLineByWord:        instanceSelector("shouldBreakLineByWordBeforeCharacterAtIndex:"),
    willSetLineFragmentRect:      instanceSelector("willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:"),

    // Interfacing with Glyph Storage
    //
    characterRangeForGlyphRange:     instanceSelector("characterRangeForGlyphRange:actualGlyphRange:"),
    deleteGlyphsInRange:             instanceSelector("deleteGlyphsInRange:"),
    getGlyphsInRange:                instanceSelector("getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:"),
    glyphRangeForCharacterRange:     instanceSelector("glyphRangeForCharacterRange:actualCharacterRange:"),
    insertGlyph:                     instanceSelector("insertGlyph:atGlyphIndex:characterIndex:"),
    setAttachmentSize:               instanceSelector("setAttachmentSize:forGlyphRange:"),
    setBidiLevels:                   instanceSelector("setBidiLevels:forGlyphRange:"),
    setDrawsOutsideLineFragment:     instanceSelector("setDrawsOutsideLineFragment:forGlyphRange:"),
    setLineFragmentRect:             instanceSelector("setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:"),
    setLocationWithAdvancements:     instanceSelector("setLocation:withAdvancements:forStartOfGlyphRange:"),
    setNotShownAttribute:            instanceSelector("setNotShownAttribute:forGlyphRange:"),
    substituteGlyphs:                instanceSelector("substituteGlyphsInRange:withGlyphs:"),
    lineFragmentRectForProposedRect: instanceSelector("lineFragmentRectForProposedRect:remainingRect:")
}));
