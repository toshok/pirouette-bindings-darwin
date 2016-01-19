// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { __internalSetNSObject, extendClass, createExtendClass, instanceSelector } from '../objc';

import * as objc_internal from '@objc_internal';
let PirouetteObject = objc_internal.PirouetteObject;
let allocInstance = objc_internal.allocInstance;

// console.log("NSObject");
export let NSObject = extendClass("NSObject", PirouetteObject, () => ({

    constructor: function (handle) {
      this.handle = handle;

      if (!handle) {
	// construct the native object if we aren't supplied a handle
	this.handle = this.constructor.alloc();
      }

      // then make sure to associate the handle to this object
      PirouetteObject.setHandle.call(this, this.handle);
    },

    toString: function () {
      return `[${this.constructor._ck_register} ${this.handle.toString()}]`;
    },

    init: instanceSelector()

}));
__internalSetNSObject(NSObject);

NSObject.alloc = function() {
  //console.log (`NSObject.alloc(${this._ck_register})`);
  return allocInstance (this._ck_register);
};

NSObject.getTypeSignature = function() {
  return "@";
};

NSObject.new = function() {
    let instance = new this.prototype.constructor;

    let initMeth = this.prototype['init']; // init is guaranteed to always exist.
    initMeth.call(instance);

    return instance;
};

NSObject.newWith = function(newInfo) {
  let methodname = `initWith${newInfo.initWith}`;
  let meth = this.prototype[methodname];
  if (typeof meth !== 'function') {
    let err = `no method '${methodname}' defined in ${this.name}.prototype`;
    console.log(err);
    throw err;
  }

  let instance = new this.prototype.constructor;

  meth.apply(instance, newInfo.args);

  return instance;
};

console.log("creating NSObject.extendClass");
createExtendClass(NSObject);

/*
 @mixinProtocol: (p) -> new ck.MixinProtocolAttribute @, p
 @conformsToProtocol: (p) -> new ck.ConformsToProtocolAttribute @, p

 @outlet: (name, type) -> ck.outlet @::, name, type
 */
