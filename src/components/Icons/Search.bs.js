'use strict';

var React = require("react");

function Search(Props) {
  return React.createElement("svg", {
              height: "13px",
              width: "13px",
              version: "1.1",
              viewBox: "0 0 13 13",
              xmlns: "http://www.w3.org/2000/svg"
            }, React.createElement("defs", undefined, React.createElement("path", {
                      id: "path-1",
                      d: "M2,2.00185753 C2,0.896262143 2.90277026,0 4.00581726,0 L229.994183,0 C231.101965,0 232,0.887227058 232,2.00185753 L232,196.998142 C232,198.103738 231.09723,199 229.994183,199 L4.00581726,199 C2.89803498,199 2,198.112773 2,196.998142 L2,2.00185753 Z"
                    }), React.createElement("filter", {
                      id: "filter-2",
                      height: "106.0%",
                      width: "105.2%",
                      filterUnits: "objectBoundingBox",
                      x: "-2.6%",
                      y: "-2.5%"
                    }, React.createElement("feMorphology", {
                          operator: "dilate",
                          radius: "1",
                          result: "shadowSpreadOuter1"
                        }), React.createElement("feOffset", {
                          dx: "0",
                          dy: "1",
                          result: "shadowOffsetOuter1"
                        }), React.createElement("feGaussianBlur", {
                          result: "shadowBlurOuter1",
                          stdDeviation: "1.5"
                        }), React.createElement("feComposite", {
                          in2: "SourceAlpha",
                          operator: "out",
                          result: "shadowBlurOuter1"
                        }), React.createElement("feColorMatrix", {
                          values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
                        })), React.createElement("polygon", {
                      id: "path-3",
                      points: "0 0 209.683594 0 230 0 230 35 175.808594 35 0 35"
                    }), React.createElement("filter", {
                      id: "filter-4",
                      height: "102.9%",
                      width: "100.4%",
                      filterUnits: "objectBoundingBox",
                      x: "-0.2%",
                      y: "-1.4%"
                    }, React.createElement("feOffset", {
                          dx: "0",
                          dy: "-1",
                          result: "shadowOffsetInner1"
                        }), React.createElement("feComposite", {
                          in2: "SourceAlpha",
                          k2: "-1",
                          k3: "1",
                          operator: "arithmetic",
                          result: "shadowInnerInner1"
                        }), React.createElement("feColorMatrix", {
                          values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0"
                        }))), React.createElement("g", {
                  id: "Landing",
                  fill: "none",
                  stroke: "none"
                }, React.createElement("g", {
                      id: "Artboard",
                      transform: "translate(-194.000000, -228.000000)"
                    }, React.createElement("g", {
                          id: "Group",
                          transform: "translate(183.000000, 186.000000)"
                        }, React.createElement("g", {
                              id: "popup/popover/standard/text+search",
                              transform: "translate(0.000000, 29.000000)"
                            }, React.createElement("g", {
                                  id: "bg"
                                }, React.createElement("use", {
                                      fill: "black"
                                    }), React.createElement("path", {
                                      d: "M229.994183,-0.5 L4.00581726,-0.5 C3.31622573,-0.5 2.68916389,-0.219780297 2.23489451,0.233592305 C1.78120327,0.686387899 1.5,1.31157756 1.5,2.00185753 L1.5,196.998142 C1.5,197.693425 1.78004223,198.317616 2.23207243,198.768754 C2.68552254,199.221309 3.31263174,199.5 4.00581726,199.5 L229.994183,199.5 C230.683774,199.5 231.310836,199.21978 231.765105,198.766408 C232.218797,198.313612 232.5,197.688422 232.5,196.998142 L232.5,2.00185753 C232.5,1.30657451 232.219958,0.682383759 231.767928,0.23124593 C231.314477,-0.221309018 230.687368,-0.5 229.994183,-0.5 Z",
                                      fill: "#FFFFFF",
                                      stroke: "#000000"
                                    })), React.createElement("g", {
                                  id: "search",
                                  transform: "translate(0.000000, 2.000000)"
                                }, React.createElement("g", {
                                      id: "bg"
                                    }, React.createElement("use", {
                                          fill: "#FFFFFF"
                                        }), React.createElement("use", {
                                          fill: "black",
                                          filter: "url(#filter-4)"
                                        })), React.createElement("g", {
                                      id: "icons/14px/black/search",
                                      transform: "translate(10.000000, 10.000000)"
                                    }, React.createElement("rect", {
                                          id: "box",
                                          height: "14",
                                          width: "14",
                                          x: "0",
                                          y: "0"
                                        }), React.createElement("path", {
                                          id: "icon",
                                          d: "M6,1 C8.76142375,1 11,3.23857625 11,6 C11,7.01954236 10.6948479,7.96781264 10.1708943,8.75846025 L13.4700003,12.0600004 L12.0600004,13.4700003 L8.75846025,10.1708943 C7.96781264,10.6948479 7.01954236,11 6,11 C3.23857625,11 1,8.76142375 1,6 C1,3.23857625 3.23857625,1 6,1 Z M6,2.79999995 C4.23268877,2.79999995 2.79999995,4.23268877 2.79999995,6 C2.79999995,7.76731123 4.23268877,9.20000005 6,9.20000005 C7.76731123,9.20000005 9.20000005,7.76731123 9.20000005,6 C9.20000005,4.23268877 7.76731123,2.79999995 6,2.79999995 Z",
                                          fill: "#333333"
                                        }))))))));
}

var make = Search;

exports.make = make;
/* react Not a pure module */
