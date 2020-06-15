'use strict';

var React = require("react");
var ReactSelect = require("react-select");

function CustomMenu(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "This is a test"), React.createElement(ReactSelect.components.Menu, {
                  children: children
                }));
}

var make = CustomMenu;

exports.make = make;
/* react Not a pure module */
