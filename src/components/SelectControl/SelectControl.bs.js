'use strict';

var React = require("react");
var ArrowDown$ReasonReactExamples = require("../Icons/ArrowDown.bs.js");

var controlContainerStyles = {
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.20)",
  color: "#333333",
  display: "flex",
  fontFamily: "ArialMT",
  fontSize: "14px",
  height: "26px",
  lineHeight: "18px",
  padding: "2px 10px",
  width: "119px",
  borderRadius: "3px",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box"
};

var placeholderContainerStyles = {
  overflow: "hidden",
  whiteSpace: "nowrap"
};

function SelectControl(Props) {
  var onClick = Props.onClick;
  var selectValue = Props.selectValue;
  return React.createElement("div", {
              style: controlContainerStyles,
              onClick: onClick
            }, React.createElement("div", {
                  style: placeholderContainerStyles
                }, selectValue), React.createElement(ArrowDown$ReasonReactExamples.make, { }));
}

var make = SelectControl;

exports.controlContainerStyles = controlContainerStyles;
exports.placeholderContainerStyles = placeholderContainerStyles;
exports.make = make;
/* react Not a pure module */
