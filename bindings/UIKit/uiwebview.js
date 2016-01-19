// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { autoboxProperty, instanceProperty, instanceSelector } from '../objc';
import { UIView } from 'uiview';
import { UIWebViewDelegate } from 'uiwebviewdelegate';

//console.log("UIWebView");
export let UIWebView = UIView.extendClass ("UIWebView", () => ({

    // Setting the Delegate
    delegate: autoboxProperty(UIWebViewDelegate),

    // Loading Content
    loadData:       instanceSelector("loadData:MIMEType:textEncodingName:baseURL:"),
    loadHTMLString: instanceSelector("loadHTMLString:baseURL:"),
    loadRequest:    instanceSelector("loadRequest:"),
    stopLoading:    instanceSelector("stopLoading"),
    reload:         instanceSelector("reload"),
    loading: instanceProperty(),
    request: instanceProperty(),

    // Moving Back and Forward
    goBack:    instanceSelector("goBack"),
    goForward: instanceSelector("goForward"),
    canGoBack: instanceProperty(),
    canGoForward: instanceProperty(),

    // Setting Web Content Properties
    scalesPageToFit: instanceProperty(),
    scrollView: instanceProperty(),
    detectsPhoneNumbers: instanceProperty(), // Deprecated in iOS 3.0

    // Running JavaScript
    stringByEvaluatingJavaScriptFromString: instanceSelector("stringByEvaluatingJavaScriptFromString:"),

    // Detecting Types of Data
    dataDetectorTypes: instanceProperty(),

    // Managing Media Playback
    allowsInlineMediaPlayback: instanceProperty(),
    mediaPlaybackRequiresUserAction: instanceProperty(),
    mediaPlaybackAllowsAirPlay: instanceProperty()

}));
