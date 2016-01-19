// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceSelector, staticSelector } from '../objc';
import { NSObject } from '../foundation';

export let GLKTextureLoader = NSObject.extendClass ("GLKTextureLoader", () => ({

    // Initialization
    initWithSharegroup: instanceSelector("initWithSharegroup:"),

    // Loading Textures from Files
    textureWithContentsOfFile: staticSelector("textureWithContentsOfFile:options:error:"),
    textureWithContentsOfFileWithQueue: instanceSelector("textureWithContentsOfFile:options:queue:completionHandler:"),

    // Loading a Texture From a URL
    textureWithContentsOfURL: staticSelector("textureWithContentsOfURL:options:error:"),
    textureWithContentsOfURLWithQueue: instanceSelector("textureWithContentsOfURL:options:queue:completionHandler:"),

    // Creating Textures from In-Memory Representations
    textureWithContentsOfData: staticSelector("textureWithContentsOfData:options:error:"),
    textureWithContentsOfDataWithQueue: instanceSelector("textureWithContentsOfData:options:queue:completionHandler:"),

    // Creating Textures from CGImages
    textureWithCGImage: staticSelector("textureWithCGImage:options:error:"),
    textureWithCGImageWithQueue: instanceSelector("textureWithCGImage:options:queue:completionHandler:"),

    // Loading Cube Maps from Files
    cubeMapWithContentsOfFile: staticSelector("cubeMapWithContentsOfFile:options:error:"),
    cubeMapWithContentsOfFileWithQueue: instanceSelector("cubeMapWithContentsOfFile:options:queue:completionHandler:"),
    cubeMapWithContentsOfFiles: staticSelector("cubeMapWithContentsOfFiles:options:error:"),
    cubeMapWithContentsOfFilesWithQueue: instanceSelector("cubeMapWithContentsOfFiles:options:queue:completionHandler:"),

    // Loading Cube Maps from URLs
    cubeMapWithContentsOfURL: staticSelector("cubeMapWithContentsOfURL:options:error:"),
    cubeMapWithContentsOfURLWithQueue: instanceSelector("cubeMapWithContentsOfURL:options:queue:completionHandler:")

}));
