'use strict';

var React = require("react");
var Blanket$ReasonReactExamples = require("../Blanket/Blanket.bs.js");

function Dropdown(Props) {
  var children = Props.children;
  var isOpen = Props.isOpen;
  var target = Props.target;
  var onClose = Props.onClose;
  return React.createElement("div", undefined, target, isOpen ? children : null, isOpen ? React.createElement(Blanket$ReasonReactExamples.make, {
                    onClick: onClose
                  }) : null);
}

var make = Dropdown;

exports.make = make;
/* react Not a pure module */
