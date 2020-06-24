'use strict';

var React = require("react");

var blanketStyles = {
  bottom: "0",
  left: "0",
  position: "fixed",
  right: "0",
  top: "0",
  zIndex: "1"
};

function Blanket(Props) {
  var onClick = Props.onClick;
  return React.createElement("div", {
              style: blanketStyles,
              onClick: onClick
            });
}

var make = Blanket;

exports.blanketStyles = blanketStyles;
exports.make = make;
/* react Not a pure module */
