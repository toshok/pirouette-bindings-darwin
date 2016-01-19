// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod } from '../objc';
import { Protocol } from '../foundation';

export let NSAnimationDelegate = Protocol.extendClass ("NSAnimationDelegate", () => ({
  // Controlling and Monitoring an Animation
  animationDidEnd:      optionalMethod(),
  animationDidStop:     optionalMethod(),
  animationShouldStart: optionalMethod(),
  valueForProgress:     optionalMethod(),

  // Managing Progress Marks
  reachedProgressMark:  optionalMethod()
}));

console.log ("NSAnimationDelegate done, = " + NSAnimationDelegate._ck_register);
