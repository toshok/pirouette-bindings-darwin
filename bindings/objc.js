/* -*- Mode: js2; tab-width: 4; indent-tabs-mode: nil; js2-basic-offset: 4 -*-
 * vim: set ts=4 sw=4 et tw=99 ft=js:
 */

// This file is part of Pirouette.  for licensing information, see the LICENSE file

import * as objc_internal from '@objc_internal';

let foundation_NSObject = undefined;
export function __internalSetNSObject(o) {
    foundation_NSObject = o;
}

export const sig = {
    Class:     function() { return "//"; },
    Selector:  function() { return ":"; },
    Char:      function() { return "c"; },
    UChar:     function() { return "C"; },
    Short:     function() { return "s"; },
    UShort:    function() { return "S"; },
    Int:       function() { return "i"; },
    UInt:      function() { return "I"; },
    Long:      function() { return "l"; },
    ULong:     function() { return "L"; },
    LongLong:  function() { return "q"; },
    ULongLong: function() { return "Q"; },
    Float:     function() { return "f"; },
    Double:    function() { return "d"; },
    Bool:      function() { return "c"; },  // objective c's type signatures permit a 'B' which is BOOL, but it looks like the bindings all use 'c' for bool instead. :/
    Void:      function() { return "v"; },
    Ptr:       function() { return "^"; },
    CharStar:  function() { return "*"; },
    NSObject:  function() { return "@"; },
    NSString:  function() { return "@"; },
    ArrayOf:   function(s) { return function() { return `[${typeSignature([s])}]`; }; },
    PointerTo: function(s) { return function() { return `^${typeSignature([s])}`; }; },
    // some things we're hardcoding here until/unless we move them into their respective bindings
    CVTimeStamp: function() { return "{?=IiqQdq{CVSMPTETime=ssIIIssss}QQ}"; },
    CGAffineTransform: function() { return "{CGAffineTransform=ffffff}"; },
    CGContext: function() { return "{CGContext=}"; },
    NSInteger: function() { return "q"; }, // XXX osx/arm64 specific
    NSUInteger: function() { return "Q"; } // XXX osx/arm64 specific
};

export function typeSignature(types) {
    let getTypeSignature = function (t) {
        if (typeof t === "string") return t;
        if (t.getTypeSignature) return t.getTypeSignature();
        if (typeof t === "function") return t();
        throw new Error(`unable to find a type signature mapping for type ${t}`);
    };
    return types.map(function(t) { return getTypeSignature(t); }).join('');
};

export function selectorInvoker(sel) {
    let sel_invoke = objc_internal.selectorInvoker(sel);
    return function () {
        return sel_invoke.apply(this, [sel].concat(Array.prototype.slice.call(arguments)));
    };
}

function signatureFromTypeGetters(returnTypeGetter, paramTypesGetter) {
    let fsig = null;
    if (returnTypeGetter) {
        let paramTypes = paramTypesGetter ? paramTypesGetter() : [];
        fsig = typeSignature([returnTypeGetter(), sig.NSObject, sig.Selector].concat(paramTypes));
    }
    return fsig;
}


export function instanceSelector (selector) {
    //console.log (`adding instanceSelector for ${seletor}`);
    let instance_info = Object.create(null);
    instance_info.sel = selector;
    instance_info.makeUIAppearance = function() {
        instance_info._ck_appearance = true;
        return instance_info;
    };
    instance_info.returns = function (rType) {
        if (typeof (rType) === "function") {
            instance_info.returnTypeGetter = rType;
        }
        else {
            instance_info.returnTypeGetter = function() { return rType; };
        }
        return instance_info;
    };
    instance_info.params = function (pTypes) {
        if (typeof (pTypes) === "function") {
            instance_info.paramTypesGetter = pTypes;
        }
        else {
            instance_info.paramTypesGetter = function() { return pTypes; };
        }
        return instance_info;
    };
    instance_info.impl = function (fn) {
        instance_info.body = fn;
        return instance_info;
    };
    instance_info.register = function(cls, name) {
        //console.log (`instance_info.register, name = ${name}, selector = ${selector}`);

        instance_info.sel = instance_info.sel || name;
        instance_info.declaringType = cls;

        let install_selector_attribute;
        let f;

        if (instance_info.body) {
            f = instance_info.body;
            install_selector_attribute = true;
        }
        else {
            f = selectorInvoker(instance_info.sel);
            install_selector_attribute = false;
        }

        let fsig = null;

        try {
            fsig = signatureFromTypeGetters(instance_info.returnTypeGetter, instance_info.paramTypesGetter);
        }
        catch (e) {
            console.warn (`exception registering ${selector}, type error`);
        }
        if (!fsig) fsig = "@@:";

        if (install_selector_attribute) {
            new SelectorAttribute (f, instance_info.sel, fsig);
        }
        else {
            f._ck_typeSig = fsig;
        }

        f._ck_appearance = instance_info._ck_appearance;
        f._ckInfo = instance_info;

        Object.defineProperty (cls.prototype, name, { value: f, configurable: true });
    };
    return instance_info;
};

export function Attribute(obj) {
    Attribute.add (obj, this);
}

Attribute.add = function (obj, attr) {
    if (!obj._ck_attributes)
        obj._ck_attributes = [];
    obj._ck_attributes.unshift(attr);
};

Attribute.find = function(obj, attrType) {
    if (!obj._ck_attributes) return [];
    // XXX ES6-port: this breaks traceur
    // return [ attr for (attr of obj._ck_attributes) if (attr instanceof attrType) ];
};

export function RegisterAttribute(obj, name) {
    //console.log ("In RegisterAttribute ctor");
    name = name || obj.name;
    Attribute.call(this, obj);

    Object.defineProperty (obj, "_ck_register", { value: name, configurable: true });

    let superclass_name = "";
    if (obj.__super__ &&
        obj.__super__.constructor &&
        obj.__super__.constructor._ck_register) {
        superclass_name = obj.__super__.constructor._ck_register;
    }

    objc_internal.registerJSClass(obj, obj.prototype, obj._ck_register, superclass_name);
};

export function SelectorAttribute(obj, sel_name, type_sig) {
    //console.log (`In SelectorAttribute (${sel_name}, ${type_sig})`);
    Attribute.call(this, obj);
    obj._ck_exported = true;
    obj._ck_sel = sel_name;
    obj._ck_typeSig = type_sig || "@@:";
};
/*
export class MixinProtocolAttribute extends Attribute {
  constructor(obj, protocol) {
    super(obj);

    for (let key in protocol) {
      let value = protocol[key];

      if (protocol.hasOwnProperty(key)) {
	// class/static
        if (value.required) {
          if (value.method) {
            obj[key] = value.tramp || selectorInvoker(value.method);
            obj[key]._ck_typeSig = value.sig || "@@:";
	  }
          else if (value.property) {
            let accessors = Object.create(null);
	    if (value.get) accessors.get = value.get;
            if (value.set) accessors.set = value.set;
            addProperty(obj, value.property, accessors);
	  }
	}
      }
      else {
        // instance
        if (value.required)
	  if (value.method) {
            obj.prototype[key] = value.tramp || selectorInvoker(value.method);
            obj.prototype[key]._ck_typeSig = value.sig || "@@:";
	  }
	  else if (value.property) {
            addProperty(obj.prototype, value.property);
	  }
	}
      }

    }
  }
}
*/

export function ConformsToProtocolAttribute(obj, protocol) {
    //console.log ("In ConformsToProtocolAttribute ctor");
    Attribute.call(this, obj);
    this.protocol = protocol;

    Object.getOwnPropertyNames(protocol.prototype).forEach(function (key) {
        let protocol_item = protocol.prototype[key];

        // can't be a protocol item without these
        if (!protocol_item.method && !protocol_item.property) return;

        let selector = protocol_item.method || protocol_item.property;

        // can't be a protocol item without this
        if (!protocol_item.register) return;

        // this *should* be invalid;
        if (key === 'constructor') return;

        let fn = obj.prototype[key];
        if (typeof (fn) === "function") {
            //console.log (`found protocol entry ${protocol._ck_register}.${key} (selector ${selector})!`);

            let inst_info = instanceSelector(selector);
            if (protocol_item.returnTypeGetter) inst_info.returns(protocol_item.returnTypeGetter);
            if (protocol_item.paramTypesGetter) inst_info.params(protocol_item.paramTypesGetter);

            // set @fn to be called when the selector is invoked
            inst_info.impl(fn);

            inst_info.register(obj, key);

            //fn._ckProtocolInfo = { sel: value.method, sig: value.sig };
        }
    });

    // FIXME
    // there's not much more that's necessary here..  if the attribute is present
    //   we need to synthesize a conformsToProtocol: method which will iterate all
    //   CTPA's and return yes/no.
    //
    // we should also probably verify that required methods are implemented?  maybe not?...
    //
    console.log("need to implement ConformsToProtocolAttribute");
};
ConformsToProtocolAttribute.doesObjectConformTo = function(obj, protocol) {
    // XXX ES6-port: this breaks traceur
    // return (conforms for conforms in (Attribute.find obj, ConformsToProtocolAttribute) when conforms.protocol is protocol).length > 0
};

// save ourselves some long lines with this function
function does_not_conform_to(o, p) {
    return ConformsToProtocolAttribute.doesObjectConformTo(o, p);
}

export function override () {
    let override_info = Object.create(null);
    override_info.impl = function(fn) {
        override_info.body = fn;
        return override_info;
    };
    override_info.register = function(cls, name) {
        // find the selector we're overriding
        let overridden = null;
        let s = cls.__super__;
        while (s) {
            if (s.hasOwnProperty(name)) {
	            overridden = s[name];
	            break;
            }
            s = s.__super__;
        }

        if (!overridden) {
            console.warn (`Failed to find overridden method for ${name}`);
            throw new Error(`Failed to find overridden method for ${name}`);
        }

        let inst_info = instanceSelector(overridden.sel);
        if (overridden.returnTypeGetter) inst_info.returnTypeGetter = overridden.returnTypeGetter;
        if (overridden.paramTypesGetter) inst_info.paramTypesGetter = overridden.paramTypesGetter;

        if (override_info.impl) inst_info.impl(override_info.impl);

        inst_info.register(cls, name);
    };
    return override_info;
};

export function staticSelector (selector) {
    let static_info = {ck: {sel: selector, instance: false}};
    static_info.makeUIAppearance = function() {
        static_info.ck.uiappearance = true;
        return static_info;
    };
    static_info.returns = function (typeGetter) {
        static_info.ck.returnType = typeGetter;
        return static_info;
    };
    static_info.params = function (typeGetter) {
        static_info.ck.paramsType = typeGetter;
        return static_info;
    };
    static_info.impl = function (fn) {
        static_info.ck.impl = fn;
        return static_info;
    };
    static_info.register = function(cls, name) {
        Object.defineProperty (cls, name, { value: selectorInvoker(selector || name), configurable: true });
        static_info.ck.sel = static_info.ck.sel || name;
    };
    return static_info;
};

// optsToPropertyDesc converts from something that *looks* like a normal JS property descriptor into a JS property descriptor.
//
// @opts can have any combination of the following properties:
//
//   ivar:     { string
//   get:      { string | function | null | undefined }
//   set:      { string | function | null | undefined }
//
//
// in order:
//
//   .ivar       Shouldn't need to be specified by user code.  Set via the outlet function below so IB
//               oulets get registered property with the objc runtime.
//
//   get/set:    The accessors work with several different types of values (or no value at all):
//
//               function: the function is used directly as the accessor.  providing both get/set functions
//                         gives you basically the same behavior as Object.defineProperty with a JS accessor
//                         property.
//
//               string:   the string is interpreted directly as the JS selector (remember the ':' with the setter!)
//
//       null/undefined:     the value is not readable (if get:) or writable (if set:)
//
//               If the access is not present, we default to the string case, and use the name of the property
//               to compute the selector.
//
// as an example:
//
//     foo: objc.instanceProperty()
//
// will register a property on the prototype as if it had been specified as:
//
//     foo.objc.instanceProperty({ get: "foo", set: "setFoo:" })
//
// if it was specified as:
//
//     bar: objc.instanceProperty({ set: null })
//
// we'd end up with a readonly property mapping to an objc selector for the getter, as if we'd specified:
//
//     foo.objc.instanceProperty({ get: "foo", set: null })

function optsToPropertyDesc (name, opts) {
    // if opts are left off, and name = 'foo',
    // we assume the getter is 'foo' and the setter is
    // 'setFoo:'
    let getter = null;
    let setter = null;

    if (!opts) {
        getter = selectorInvoker(name);
        setter = selectorInvoker(`set${name[0].toUpperCase()}${name.slice(1)}:`);
    }
    else {
        // the value for the set/get members of opts overrides this above behavior.
        //
        // that is, if an attribute is missing, we default to the same behavior as above.  if
        // it is present and null, we don't add it.  so, to generate a read-only property with
        // the default getter name, pass { set: null }
        if ("get" in opts) {
            if (opts.get) {
	            if (typeof opts.get === 'string')
	                getter = selectorInvoker(opts.get);
	            else if (typeof opts.get === 'function')
	                getter = opts.get;
	            else
	                throw "you can only use a string or a function for get:";
            }
        }
        else {
            //console.log (`default getter ${name}`);
            getter = selectorInvoker(name);
        }

        if ("set" in opts) {
            if (opts.set) {
	            if (typeof opts.set === 'string')
	                setter = selectorInvoker(opts.set);
	            else if (typeof opts.set === 'function')
	                setter = opts.set;
	            else
	                throw "you can only use a string or a function for set:";
            }
        }
        else {
            //console.log ("default setter");
            setter = selectorInvoker(`set${name[0].toUpperCase()}${name.slice(1)}:`);
        }

        if ("ivar" in opts) {
            if (setter) setter._ck_ivar = opts.ivar;
            if (getter) getter._ck_ivar = opts.ivar;
        }
    }

    let descriptor = { configurable: true };
    if (setter) descriptor.set = setter;
    if (getter) descriptor.get = getter;

    return descriptor;
}


function addProperty (opts, instance) {
    let info = Object.create(null);
    info.instance = instance;

    let setter = null;
    info.register = function(cls, jsprop) {
        //console.log (`registering property descriptor on ${info.instance ? "instance" : "ctor"}, for jsprop = ${jsprop}`);

        let desc = optsToPropertyDesc(jsprop, opts);
        if (info._ck_appearance) {
            if (desc.set) {
                desc.set._ck_appearance = true;
	            setter = desc.set;
            }
            if (desc.get) desc.get._ck_appearance = true;
        }

        Object.defineProperty(info.instance ? cls.prototype : cls, jsprop, desc);
    };

    info.makeUIAppearance = function() {
        if (setter) info._ck_appearance = true;
        return info;
    };

    return info;
};

export function instanceProperty(opts) {
    return addProperty(opts, true);
};

export function staticProperty(opts) {
    return addProperty(opts, false);
};

function protocolMethod(selector, required) {
    let info = Object.create(null);
    info.method = selector;
    info.required = required;
    info.returns = function (typeGetter) {
        //console.log (`setting return type for selector ${selector}`);
        info.returnTypeGetter = typeGetter;
        return info;
    };
    info.params = function (typeGetter) {
        //console.log (`setting param types for selector ${selector}`);
        info.paramTypesGetter = typeGetter;
        return info;
    };
    info.register = function(cls, jsprop) {
        cls.prototype[jsprop] = info;
    };
    return info;
}

export function optionalMethod (selector) {
    return protocolMethod (selector, false);
};

export function requiredMethod (selector) {
    return protocolMethod (selector, true);
};

export function optionalProperty(selector, args) {
    let optional_info = { property: selector, tramp: args && args.tramp, sig: args && args.sig };
    optional_info.register = function(cls, jsprop) {
        cls.prototype[jsprop] = optional_info;
    };
    return optional_info;
}

export function requiredProperty(selector, args) {
    let required_info = { property: selector, required: true, tramp: args && args.tramp, sig: args && args.sig };
    required_info.register = function(cls, jsprop) {
        cls.prototype[jsprop] = required_info;
    };
    return required_info;
}

function __extends (child, parent) {
    let can_put = function(o, p) {
        let own = Object.getOwnPropertyDescriptor(o, p);
        return !own || (own.configurable || own.writable);
    };
    Object.getOwnPropertyNames(parent).forEach(function (key) {
        if (key === "prototype") return;
        if (can_put (child, key))
            Object.defineProperty(child, key, Object.getOwnPropertyDescriptor(parent, key));
    });
    function ctor() { this.constructor = child; }
    ctor.prototype = Object.create(parent.prototype);
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
}

export function chainCtor(cls, self, args) {
    return cls.__super__.constructor.apply (self, args ? Array.prototype.slice.call(args) : []);
}

function createClass(name, baseType, description) {
    //console.log (`createClass 1 : ${name}`);

    let ctor = function () {
        chainCtor(ctor, this, arguments);
    };

    if (typeof description == "function")
        description = description();

    let type_ctor = description && description.hasOwnProperty("constructor") ? description.constructor : ctor;

    __extends (type_ctor, baseType);

    if (description) {
        Object.getOwnPropertyNames(description).forEach (function (pname) {
            if (pname === "constructor") return; // we handled this above

            let info = description[pname];
            if (info.register) {
	            info.register(type_ctor, pname);
            }
            else {
	            //console.log (`description for ${name} contains unregisterable property ${pname}, registering it on the prototype.`);
	            Object.defineProperty(type_ctor.prototype, pname, { value: info, configurable: true, writable: true });
            }
        });
    }

    return type_ctor;
};

function registerClass(cls, name) {
    cls.name = name;

    // register the class with objective-c
    new RegisterAttribute(cls, name);

    return cls;
}

export function extendClass(name, baseType, description, protocols) {
    let ctor = createClass(name, baseType, description);
    if (protocols)
        protocols.forEach(function (p) {
			new ConformsToProtocolAttribute(ctor, p);
		});
    registerClass (ctor, name);
    createExtendClass(ctor);
    return ctor;
};

export function createExtendClass(ctor) {
    ctor.extendClass = function(name, description, protocols) {
        return extendClass(name, ctor, description, protocols);
    };
}

let autoboxCount = 0;
export function autobox(obj, protocol) {
    // check if the object (or its constructor) conforms to the protocol.  if it does
    // then we can just use the object, without the proxy
    if (does_not_conform_to(obj, protocol) || does_not_conform_to(obj.constructor, protocol)) return obj;

    let proxy_name = `ProtocolProxy${autoboxCount++}(${protocol._ck_register})`;
    let ProtocolProxy = createClass (proxy_name, foundation_NSObject, {});

    // first check for required methods.  if obj doesn't implement them, error out.
    Object.getOwnPropertyNames(protocol.prototype).forEach(function (key) {
        let value = protocol.prototype[key];

	    if (value.required && !obj[key]) {
            if (value.method) throw new Error(`${String(obj)} is missing required method ${key} from protocol ${protocol._ck_register}`);
            if (value.property) throw new Error(`${String(obj)} is missing required property ${key} from protocol ${protocol._ck_register}`);
	    }
    });

    // now loop over the items that are in obj and match up the names to those in the protocol
    Object.getOwnPropertyNames(obj).forEach(function (key) {
        let value = obj[key];
        let pv = protocol.prototype[key];

        if (!pv) {
	        //console.log (`skipping autobox key ${key}`);
	        return;
	    }

        if (pv.method) {
            ProtocolProxy.prototype[key] = value.bind(obj);
	        let fsig = signatureFromTypeGetters(pv.returnTypeGetter, pv.paramTypesGetter);
	        if (!fsig) fsig = pv.sig;
	        //console.log (`signature of protocol method ${key} is ${fsig}`);
            new SelectorAttribute(ProtocolProxy.prototype[key], pv.method, fsig);
        }
        else {
	        throw new Error (`unhandled case:  property ${key} overriding from a protocol ${String(protocol)}`);
        }
    });

    new ConformsToProtocolAttribute(ProtocolProxy, protocol);

    registerClass (ProtocolProxy, proxy_name);

    return new ProtocolProxy();
};

export function autoboxProperty(protocolType) {
    let autobox_info = Object.create(null);
    autobox_info.protocolType = protocolType;

    autobox_info.register = function (cls, jsprop) {
        let propinfo = addProperty ({ set: function (v) {
			                                   if (!autobox_info.invoker) {
				                                   //console.log (`autobox selector = set${jsprop[0].toUpperCase()}${jsprop.slice(1)}:`);
				                                   autobox_info.invoker = selectorInvoker(`set${jsprop[0].toUpperCase()}${jsprop.slice(1)}:`);
			                                   }
			                                   autobox_info.invoker.call (this, autobox(v, autobox_info.protocolType));
		                                   }
				                    }, true);
        propinfo.register (cls, jsprop);
    };

    return autobox_info;
}

export function outlet (outletType) {
    let outlet_info = Object.create(null);

    outlet_info.outletType = outletType;
    outlet_info.register = function (cls, jsprop) {
        //console.log (`registering outlet property ${jsprop}`);
        let propinfo = addProperty ({ get: function() {
			                                   //console.log(`in getter for ${jsprop}, this = ${this.constructor._ck_register}, outlet type = ${outlet_info.outletType._ck_register}`);
			                                   let ivar_val = objc_internal.getInstanceVariable(this, jsprop);
			                                   let outlet_val = ivar_val == null ? null : new outlet_info.outletType (ivar_val);
			                                   console.log(`   value is ${outlet_val}`);
			                                   return outlet_val;
		                                   },

				                      set: function(v) {
				                          //console.log(`in setter for ${jsprop}, this = ${this.constructor._ck_register}`);
				                          objc_internal.setInstanceVariable(this, jsprop, v);
				                      },
				                      ivar: jsprop
				                    }, true);
        propinfo.register (cls, jsprop);
        //console.log ("done");
    };

    return outlet_info;
};

export function makeEnum(spec) {
    let addConstant = function(obj, jsprop, v) { return Object.defineProperty(obj, jsprop, { value: v, enumerable: true }); };

    let rv = Object.create(null);
    Object.getOwnPropertyNames(spec).forEach (function (name) {
        addConstant (rv, name, spec[name]);
    });
    Object.freeze(rv); //XXX ejs freeze isn't working atm
    return rv;
};
