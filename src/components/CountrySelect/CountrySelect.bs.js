'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReactSelect = require("react-select");
var ReactWorldFlags = require("react-world-flags");
var CustomMenu$ReasonReactExamples = require("../CustomMenu/CustomMenu.bs.js");
var CountryList$ReasonReactExamples = require("../CountryList/CountryList.bs.js");

var containerStyles = {
  display: "flex",
  padding: "5px",
  alignItems: "center"
};

var countryFlagContainerStyles = {
  marginRight: "10px"
};

function CountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = Props.filterOption;
  var decoratedCountries = $$Array.map((function (countryEntry) {
          return {
                  label: React.createElement("div", {
                        style: containerStyles
                      }, React.createElement("div", {
                            style: countryFlagContainerStyles
                          }, React.createElement(ReactWorldFlags.default, {
                                code: countryEntry.value,
                                height: "12",
                                width: "15"
                              })), React.createElement("div", undefined, countryEntry.label)),
                  value: countryEntry.label
                };
        }), countries);
  return React.createElement(React.Fragment, undefined, filterOption !== undefined ? React.createElement(ReactSelect.default, {
                    options: decoratedCountries,
                    filterOption: filterOption,
                    components: {
                      MenuList: CountryList$ReasonReactExamples.make,
                      Menu: CustomMenu$ReasonReactExamples.make
                    },
                    onChange: (function (option) {
                        console.log(option);
                        
                      })
                  }) : React.createElement(ReactSelect.default, {
                    options: decoratedCountries,
                    components: {
                      MenuList: CountryList$ReasonReactExamples.make,
                      Menu: CustomMenu$ReasonReactExamples.make
                    },
                    onChange: (function (country) {
                        console.log(country);
                        
                      })
                  }));
}

var make = CountrySelect;

exports.containerStyles = containerStyles;
exports.countryFlagContainerStyles = countryFlagContainerStyles;
exports.make = make;
/* react Not a pure module */
