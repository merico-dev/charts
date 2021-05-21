"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getCoordsOnArc = void 0;

var getCoordsOnArc = function getCoordsOnArc(angle) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return [Math.cos(angle - Math.PI / 2) * offset, Math.sin(angle - Math.PI / 2) * offset];
};

exports.getCoordsOnArc = getCoordsOnArc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nYXVnZS9nYXVnZS9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbImdldENvb3Jkc09uQXJjIiwiYW5nbGUiLCJvZmZzZXQiLCJNYXRoIiwiY29zIiwiUEkiLCJzaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQ7QUFBQSxNQUFhQyxNQUFiLHVFQUFzQixFQUF0QjtBQUFBLFNBQTZCLENBQ3pEQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsS0FBSyxHQUFHRSxJQUFJLENBQUNFLEVBQUwsR0FBVSxDQUEzQixJQUFnQ0gsTUFEeUIsRUFFekRDLElBQUksQ0FBQ0csR0FBTCxDQUFTTCxLQUFLLEdBQUdFLElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQTNCLElBQWdDSCxNQUZ5QixDQUE3QjtBQUFBLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldENvb3Jkc09uQXJjID0gKGFuZ2xlOiBhbnksIG9mZnNldCA9IDEwKSA9PiBbXG4gIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDIpICogb2Zmc2V0LFxuICBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyAyKSAqIG9mZnNldCxcbl07XG4iXX0=