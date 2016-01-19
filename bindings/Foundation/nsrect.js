// This file is part of Pirouette.  for licensing information, see the LICENSE file

export function NSRect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

NSRect.getTypeSignature = function() {
  return "{CGRect={CGPoint=ff}{CGSize=ff}}";
};
