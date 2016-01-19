// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty } from '../objc';
import { CALayer } from 'calayer';

export let CATextLayer = CALayer.extendClass("CATextLayer", () => ({

    // Getting and Setting the Text
    string: instanceProperty(),

    // Text Visual Properties
    font: instanceProperty(),
    fontSize: instanceProperty(),
    foregroundColor: instanceProperty(),

    // Text Alignment and Truncation
    wrapped: instanceProperty(),
    alignmentMode: instanceProperty(),
    truncationMode: instanceProperty()

}));
