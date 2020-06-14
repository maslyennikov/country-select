'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReactWindow = require("react-window");

function CountryList(Props) {
  Props.options;
  var children = Props.children;
  var maxHeight = Props.maxHeight;
  return React.createElement(ReactWindow.FixedSizeList, {
              itemCount: children.length,
              height: maxHeight,
              itemSize: 35,
              children: (function (props) {
                  return React.createElement("div", {
                              style: props.style
                            }, Caml_array.caml_array_get(children, props.index));
                })
            });
}

var make = CountryList;

exports.make = make;
/* react Not a pure module */
