'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReactWindow = require("react-window");

function CustomCountryList(Props) {
  var children = Props.children;
  return React.createElement(ReactWindow.FixedSizeList, {
              itemCount: children.length,
              height: 160,
              itemSize: 27,
              children: (function (props) {
                  return React.createElement("div", {
                              style: props.style
                            }, Caml_array.caml_array_get(children, props.index));
                })
            });
}

var make = CustomCountryList;

exports.make = make;
/* react Not a pure module */
