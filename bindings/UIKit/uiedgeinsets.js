// This file is part of Pirouette.  for licensing information, see the LICENSE file

//console.log("UIEdgeInsets");
export function UIEdgeInsets(top, left, bottom, right) {
  this.top = top;
  this.left = left;
  this.bottom = bottom;
  this.right = right;
}

Object.defineProperty (UIEdgeInsets, "zero", {
			 get: function() { new UIEdgeInsets (0, 0, 0, 0); },
			 configurable: false
		       });
