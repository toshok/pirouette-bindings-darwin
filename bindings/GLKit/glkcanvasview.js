// This file is part of Pirouette.  for licensing information, see the LICENSE file

import * as objc_internal from '@objc_internal';
import { instanceProperty } from '../objc';
import { EAGLContext, EAGLRenderingAPI } from '../opengles';
import { GLKView } from 'glkview';

// XXX this likely shouldn't use extendClass, since that registers the type with objc.
// or maybe it doesn't matter?

//console.log "GLKCanvasView"
export let GLKCanvasView = GLKView.extendClass("GLKCanvasView", () => ({

    getContext: function (name, args) {
      if (name === "experimental-webgl" || name === "webgl") {
	if (!this.webglcontext) {
	  this.context = new EAGLContext().initWithAPI(EAGLRenderingAPI.OpenGLES2);
          this.webglcontext = objc_internal.allocateWebGLRenderingContext(this.context);
	}
	return this.webglcontext;
      }
      else {
	throw "GLKCanvasView only supports webgl rendering";
      }
    },

    width: instanceProperty({ get: function() { return this.frame.width; },
			      set: null
			    }),

    height: instanceProperty({ get: function() { return this.frame.height; },
			       set: null
			     })
}));
