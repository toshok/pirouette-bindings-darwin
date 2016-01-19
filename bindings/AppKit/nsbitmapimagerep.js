
import { staticSelector, instanceSelector, instanceProperty } from '../objc';
import { NSImageRep } from 'nsimagerep';

export let NSBitmapImageRep = NSImageRep.extendClass("NSBitmapImageRep", () => ({
    // Creating an NSBitmapImageRep Object
    //
    imageRepWithData:         		     staticSelector("imageRepWithData:"),
    imageRepsWithData:        		     staticSelector("imageRepsWithData:"),
    colorize:                 		     instanceSelector("colorizeByMappingGray:toColor:blackMapping:whiteMapping:"),
    initWithBitmapDataPlanesAndBitmapFormat: instanceSelector("initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:"),
    initWithBitmapDataPlanes: 		     instanceSelector("initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:"),
    initWithCGImage:          		     instanceSelector("initWithCGImage:"),
    initWithCIImage:          		     instanceSelector("initWithCIImage:"),
    initWithData:             		     instanceSelector("initWithData:"),
    initWithFocusedViewRect:  		     instanceSelector("initWithFocusedViewRect:"),
    initForIncrementalLoad:   		     instanceSelector(),

    // Getting Information About the Image
    //
    bitmapFormat:    instanceProperty({ set: null }),
    bitsPerPixel:    instanceProperty({ set: null }),
    bytesPerPlane:   instanceProperty({ set: null }),
    bytesPerRow:     instanceProperty({ set: null }),
    isPlanar:        instanceProperty({ set: null }),
    numberOfPlanes:  instanceProperty({ set: null }),
    samplesPerPixel: instanceProperty({ set: null }),

    // Getting Image Data
    //
    bitmapData:          instanceProperty({ set: null }),
    getBitmapDataPlanes: instanceSelector("getBitmapDataPlanes:"),

    // Producing Representations of the Image
    //
    TIFFRepresentationOfImageRepsInArray:                 staticSelector("TIFFRepresentationOfImageRepsInArray:"),
    TIFFRepresentationOfImageRepsInArrayUsingCompression: staticSelector("TIFFRepresentationOfImageRepsInArray:usingCompression:factor:"),
    TIFFRepresentation:                                   instanceSelector(),
    TIFFRepresentationUsingCompression:                   instanceSelector("TIFFRepresentationUsingCompression:factor:"),
    representationOfImageRepsInArray:                     staticSelector("representationOfImageRepsInArray:usingType:properties:"),
    representationUsingType:                              instanceSelector("representationUsingType:properties:"),

    // Managing Compression Types
    //
    getTIFFCompressionTypes:             staticSelector("getTIFFCompressionTypes:count:"),
    localizedNameForTIFFCompressionType: staticSelector("localizedNameForTIFFCompressionType:"),
    canBeCompressedUsing:                instanceSelector("canBeCompressedUsing:"),
    setCompression:                      instanceSelector("setCompression:factor:"),
    getCompression:                      instanceSelector("getCompression:factor:"),
    setProperty:                         instanceSelector("setProperty:withValue:"),
    valueForProperty:                    instanceSelector("valueForProperty:"),

    // Loading Image Incrementally
    //
    incrementalLoadFromData: instanceSelector("incrementalLoadFromData:complete:"),

    // Managing Pixel Values
    //
    setColorAt: instanceSelector("setColor:atX:y:"),
    colorAt:    instanceSelector("colorAtX:y:"),
    setPixelAt: instanceSelector("setPixel:atX:y:"),
    getPixelAt: instanceSelector("getPixel:atX:y:"),

    // Getting a Core Graphics Image
    //
    CGImage: instanceSelector(),

    // Managing ColorSpaces
    //
    bitmapImageRepByConvertingToColorSpace:  instanceSelector("bitmapImageRepByConvertingToColorSpace:renderingIntent:"),
    bitmapImageRepByRetaggingWithColorSpace: instanceSelector("bitmapImageRepByRetaggingWithColorSpace:"),
    colorSpace:                              instanceProperty({ set: null })
}));
