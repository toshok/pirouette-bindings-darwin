// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { extendClass } from '../objc';

/*
  @getTypeSignature: -> "@"

  @register: (n = @name) ->
  @mixinProtocol: (p) -> new ck.MixinProtocolAttribute @, p

  @requiredMethod: (n,args) -> method: n, required: true, tramp: args?.tramp, sig: args?.sig
  @optionalMethod: (n,args) -> method: n, tramp: args?.tramp, sig: args?.sig

  @requiredProperty: (n,accessors) -> property: n, required: true, get: accessors?.get, set: accessors?.set
  @optionalProperty: (n,accessors) -> property: n, get: accessors?.get, set: accessors?.set
*/

export let Protocol = extendClass("Protocol", Object);
