// This file is part of Pirouette.  for licensing information, see the LICENSE file

export function NSSize(width, height) {
  this.width = width;
  this.height = height;
}

NSSize.getTypeSignature = function() {
  return "{CGSize=ff}";
};
