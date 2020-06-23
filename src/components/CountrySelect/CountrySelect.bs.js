'use strict';

var React = require("react");
var ReactSelect = require("react-select");
var CustomMenu$ReasonReactExamples = require("../CustomMenu/CustomMenu.bs.js");
var CustomOption$ReasonReactExamples = require("../CustomOption/CustomOption.bs.js");
var CustomCountryList$ReasonReactExamples = require("../CustomCountryList/CustomCountryList.bs.js");
var CustomDropdownIndicator$ReasonReactExamples = require("../CustomDropdownIndicator/CustomDropdownIndicator.bs.js");
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
      height: "160px",
      overlay: "hidden",
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
      }),

    option: (provided, state) => ({
            ...provided,
            padding: "4px 10px",
            fontFamily: "ArialMT",
            fontSize: "14px",
            color: "#333333",
            lineHeight: "18px",
            height: "auto"
        })
  });

function CountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = Props.filterOption;
  return React.createElement(React.Fragment, undefined, filterOption !== undefined ? React.createElement(ReactSelect.default, {
                    options: countries,
                    filterOption: filterOption,
                    components: {
                      MenuList: CustomCountryList$ReasonReactExamples.make,
                      Menu: CustomMenu$ReasonReactExamples.make,
                      IndicatorSeparator: CustomIndicatorSeparator$ReasonReactExamples.make,
                      DropdownIndicator: CustomDropdownIndicator$ReasonReactExamples.make,
                      Option: CustomOption$ReasonReactExamples.make
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
                      IndicatorSeparator: CustomIndicatorSeparator$ReasonReactExamples.make,
                      DropdownIndicator: CustomDropdownIndicator$ReasonReactExamples.make,
                      Option: CustomOption$ReasonReactExamples.make
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
