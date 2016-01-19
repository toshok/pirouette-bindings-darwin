
import { makeEnum } from '../objc';

export let GLKViewDrawableColorFormat = makeEnum({
   rgba8888 : 0,
   rgb565   : 1
});

export let GLKViewDrawableDepthFormat = makeEnum({
   depthNone : 0,
   depth16   : 1,
   depth24   : 2
});

export let GLKViewDrawableStencilFormat = makeEnum({
   stencilNone : 0,
   stencil8    : 1
});

export let GLKViewDrawableMultisample = makeEnum({
   multisampleNone : 0,
   multisample4X   : 1
});

export let GLKVertexAttrib = makeEnum({
   position  : 0,
   normal    : 1,
   color     : 2,
   texCoord0 : 3,
   texCoord1 : 4
});
