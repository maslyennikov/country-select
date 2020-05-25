'use strict';

var React = require("react");
var ReactWorldFlags = require("react-world-flags");

function CustomOption(Props) {
  var label = Props.label;
  var value = Props.value;
  return React.createElement("div", undefined, React.createElement(ReactWorldFlags.default, {
                  code: value,
                  height: "12",
                  width: "15"
                }), label);
}

var make = CustomOption;

exports.make = make;
/* react Not a pure module */
