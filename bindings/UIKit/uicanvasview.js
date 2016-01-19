// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UICanvasView");

import * as objc_internal from '@objc_internal';
import { staticSelector, sig } from '../objc';
import { CAEAGLLayer } from '../coreanimation';
import { UIView } from 'uiview';

export let UICanvasView = UIView.extendClass ("UICanvasView", () => ({

  layerClass: staticSelector("layerClass").
                          returns( function () { return sig.Class; }).
			     impl( function () { return CAEAGLLayer; }),
  getContext: function (name, args) {
    if (name === "experimental-webgl" || name === "webgl") {
      if (!this.context)
	this.context = objc_internal.allocateGLContext(this.layer, args);
      return this.context;
    }
    else {
      throw "UICanvasView only supports webgl rendering";
    }
  }

}));
