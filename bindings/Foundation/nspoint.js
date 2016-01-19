// This file is part of Pirouette.  for licensing information, see the LICENSE file

export function NSPoint(x, y) {
  this.x = x;
  this.y = y;
}

NSPoint.getTypeSignature = function() {
  return "{CGPoint=ff}";
};
