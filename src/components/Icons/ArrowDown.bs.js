'use strict';

var React = require("react");

function ArrowDown(Props) {
  return React.createElement("svg", {
              height: "5px",
              width: "8px",
              version: "1.1",
              viewBox: "0 0 8 5",
              xmlns: "http://www.w3.org/1999/xlink"
            }, React.createElement("g", {
                  id: "Landing",
                  fill: "none",
                  stroke: "none"
                }, React.createElement("g", {
                      id: "Artboard",
                      transform: "translate(-286.000000, -197.000000)"
                    }, React.createElement("g", {
                          id: "Group",
                          transform: "translate(185.000000, 186.000000)"
                        }, React.createElement("g", {
                              id: "form"
                            }, React.createElement("g", {
                                  id: "button/default/s/no-icon/primary"
                                }, React.createElement("path", {
                                      id: "bg",
                                      d: "M115.998894,0.5 L3.0011061,0.5 C2.3083602,0.5 1.68370209,0.779671949 1.23201966,1.23238143 C0.778909477,1.6865219 0.5,2.31446357 0.5,3.00793008 L0.5,22.9920699 C0.5,23.6858439 0.779573535,24.3127705 1.23208339,24.7663093 C1.68468669,25.2199417 2.31018461,25.5 3.0011061,25.5 L115.998894,25.5 C116.69164,25.5 117.316298,25.2203281 117.76798,24.7676186 C118.221091,24.3134781 118.5,23.6855364 118.5,22.9920699 L118.5,3.00793008 C118.5,2.31415613 118.220426,1.6872295 117.767917,1.23369071 C117.315313,0.780058276 116.689815,0.5 115.998894,0.5 Z",
                                      fill: "#FFFFFF",
                                      stroke: "#000000"
                                    }), React.createElement("g", {
                                      id: "icons/other/arrow-black",
                                      transform: "translate(101.000000, 9.000000)"
                                    }, React.createElement("rect", {
                                          id: "box",
                                          height: "8",
                                          width: "8",
                                          x: "0",
                                          y: "0"
                                        }), React.createElement("polygon", {
                                          id: "icon",
                                          fill: "#333333",
                                          points: "0 2 8 2 4 7"
                                        }))))))));
}

var make = ArrowDown;

exports.make = make;
/* react Not a pure module */
