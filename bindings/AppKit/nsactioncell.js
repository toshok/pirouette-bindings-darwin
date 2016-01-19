// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { instanceProperty, instanceSelector } from '../objc';

import { NSCell } from 'nscell';


export let NSActionCell = NSCell.extendClass("NSActionCell", () => ({

  // Configuring an NSActionCell Object
  //
  setFloatingPointFormat: instanceSelector('setFloatingPointFormat:left:right:'), // Available in OS X v10.0 through OS X v10.5

  // Obtaining and Setting Cell Values
  //
  integerValue:   instanceProperty({set: null}),       // read-only
  floatValue:     instanceProperty({set: null}),       // read-only
  intValue:       instanceProperty({set: null}),       // read-only, Available in OS X v10.0 through OS X v10.5
  setObjectValue: instanceSelector('setObjectValue:'), //            Available in OS X v10.0 through OS X v10.5
  stringValue:    instanceProperty({set: null}),       // read-only, Available in OS X v10.0 through OS X v10.5

  // Managing the Cell’s View
  //
  controlView: instanceProperty(),

  // Assigning the Target and Action
  //
  action: instanceProperty(),
  target: instanceProperty(),

  // Assigning a Tag
  //
  tag: instanceProperty()

}));
