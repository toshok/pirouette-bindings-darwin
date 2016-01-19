// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

//console.log("UIWebViewDelegate");
export let UIWebViewDelegate = Protocol.extendClass("UIWebViewDelegate", () => ({

    // Loading Content
    shouldStartLoad: optionalMethod("webView:shouldStartLoadWithRequest:navigationType:"),
    didStartLoad:    optionalMethod("webViewDidStartLoad:"),
    didFinishLoad:   optionalMethod("webViewDidFinishLoad:"),
    didFailLoad:     optionalMethod("webView:didFailLoadWithError:")

}));
