'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReactSelect = require("react-select");
var ReactWorldFlags = require("react-world-flags");
var CustomMenu$ReasonReactExamples = require("../CustomMenu/CustomMenu.bs.js");
var CustomCountryList$ReasonReactExamples = require("../CustomCountryList/CustomCountryList.bs.js");
var CustomIndicatorSeparator$ReasonReactExamples = require("../CustomIndicatorSeparator/CustomIndicatorSeparator.bs.js");

var containerStyles = {
  display: "flex",
  padding: "5px",
  alignItems: "center"
};

var countryFlagContainerStyles = {
  marginRight: "10px"
};

var customStyles = ({
    menu: (provided, state) => ({
      ...provided,
      bottom: "auto",
      width: "230px",
      margin: "0",
      borderRadius: "0"
    }),

    control: (_, { selectProps: { width }}) => ({
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.20)",
        borderRadius: "3px",

        fontFamily: "ArialMT",
        fontSize: "14px",
        color: "#333333",
        lineHeight: "18px",

        width: "119px",
        display: "flex",
        height: "26px"
      })
  });

function CountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = Props.filterOption;
  $$Array.map((function (countryEntry) {
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
                    options: countries,
                    filterOption: filterOption,
                    components: {
                      MenuList: CustomCountryList$ReasonReactExamples.make,
                      Menu: CustomMenu$ReasonReactExamples.make,
                      IndicatorSeparator: CustomIndicatorSeparator$ReasonReactExamples.make
                    },
                    onChange: (function (option) {
                        console.log(option);
                        
                      }),
                    defaultMenuIsOpen: true,
                    styles: customStyles
                  }) : React.createElement(ReactSelect.default, {
                    options: countries,
                    components: {
                      MenuList: CustomCountryList$ReasonReactExamples.make,
                      Menu: CustomMenu$ReasonReactExamples.make,
                      IndicatorSeparator: CustomIndicatorSeparator$ReasonReactExamples.make
                    },
                    onChange: (function (country) {
                        console.log(country);
                        
                      }),
                    defaultMenuIsOpen: true,
                    styles: customStyles
                  }));
}

var make = CountrySelect;

exports.containerStyles = containerStyles;
exports.countryFlagContainerStyles = countryFlagContainerStyles;
exports.customStyles = customStyles;
exports.make = make;
/* customStyles Not a pure module */
