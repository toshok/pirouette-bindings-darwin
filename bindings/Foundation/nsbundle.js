// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { staticSelector, staticProperty, instanceSelector, instanceProperty } from '../objc';
import { NSObject } from 'nsobject';

export let NSBundle = NSObject.extendClass("NSBundle", () => ({

  // Initializing an NSBundle
  bundleWithURL: staticSelector("bundleWithURL:"),
  bundleWithPath: staticSelector("bundleWithPath:"),
  initWithURL: instanceSelector("initWithURL:"),
  initWithPath: instanceSelector("initWithPath:"),

  // Getting an NSBundle
  bundleForClass: staticSelector("bundleForClass:"),
  bundleWithIdentifier: staticSelector("bundleWithIdentifier:"),
  mainBundle: staticProperty(),
  allBundles: staticProperty(),
  allFrameworks: staticProperty(),

  // Getting a Bundled Class
  classNamed: instanceSelector("classNamed:"),
  principalClass: instanceSelector(),

  // Finding Resources
  pathForResource: instanceSelector("pathForResource:ofType:"),
  //XXX pathForResourceInDirectory: staticSelector("pathForResource:ofType:inDirectory:"),
  pathForResourceInDirectory: instanceSelector("pathForResource:ofType:inDirectory:"),
  pathForResourceInDirectoryForLocalization: instanceSelector("pathForResource:ofType:inDirectory:forLocalization:"),

  //XXX pathsForResourcesOfType: staticSelector("pathsForResourcesOfType:inDirectory:"),
  pathsForResourcesOfType: instanceSelector("pathsForResourcesOfType:inDirectory:"),
  pathsForResourcesOfTypeForLocalization: instanceSelector("pathsForResourcesOfType:inDirectory:forLocalization:"),

  URLForResource: instanceSelector("URLForResource:withExtension:"),
  URLForResourceInSubdirectory: instanceSelector("URLForResource:withExtension:subdirectory:"),
  URLForResourceForlocalization: instanceSelector("URLForResource:withExtension:subdirectory:localization:"),
  URLForResourceInBundleWithURL: staticSelector("URLForResource:withExtension:subdirectory:inBundleWithURL:"),

  URLsForResourcesWithExtension: instanceSelector("URLsForResourcesWithExtension:subdirectory:"),
  URLsForResourcesWithExtensionForLocalization: instanceSelector("URLsForResourcesWithExtension:subdirectory:localization:"),
  URLsForResourcesWithExtensionInBundleWithURL: staticSelector("URLsForResourcesWithExtension:subdirectory:inBundleWithURL:"),

  resourcePath: instanceSelector(),

  // Getting the Bundle Directory
  bundleURL: instanceProperty({ set: null }),
  bundlePath: instanceProperty({ set: null }),

  // Getting Bundle Information
  bundleIdentifier: instanceProperty({ set: null }),
  infoDictionary: instanceProperty({ set: null }),
  objectForInfoDictionaryKey: instanceSelector("objectForInfoDictionaryKey:"),
  builtInPlugInsURL: instanceProperty({ set: null }),
  builtInPlugInsPath: instanceProperty({ set: null }),
  executableURL: instanceProperty({ set: null }),
  executablePath: instanceProperty({ set: null }),
  URLForAuxiliaryExecutable: instanceSelector("URLForAuxiliaryExecutable:"),
  pathForAuxiliaryExecutable: instanceSelector("pathForAuxiliaryExecutable:"),
  privateFrameworksURL: instanceProperty({ set: null }),
  privateFrameworksPath: instanceProperty({ set: null }),
  sharedFrameworksURL: instanceProperty({ set: null }),
  sharedFrameworksPath: instanceProperty({ set: null }),
  sharedSupportURL: instanceProperty({ set: null }),
  sharedSupportPath: instanceProperty({ set: null }),
  resourceURL: instanceProperty({ set: null }),

  // Managing Localized Resources
  localizedStringForKey: instanceSelector("localizedStringForKey:value:table:"),

  // Loading a Bundle’s Code
  executableArchitectures: instanceProperty({ set: null }),
  preflightAndReturnError: instanceSelector("preflightAndReturnError:"),
  load: instanceSelector(),
  loadAndReturnError: instanceSelector("loadAndReturnError:"),
  isLoaded: instanceProperty({ set: null }),
  unload: instanceSelector(),

  // Managing Localizations
  preferredLocalizationsFromArray: staticSelector("preferredLocalizationsFromArray:"),
  preferredLocalizationsFromArrayForPreferences: staticSelector("preferredLocalizationsFromArray:forPreferences:"),
  localizations: instanceProperty({ set: null }),
  developmentLocalization: instanceProperty({ set: null }),
  preferredLocalizations: instanceProperty({ set: null }),
  localizedInfoDictionary: instanceProperty({ set: null })
}));
