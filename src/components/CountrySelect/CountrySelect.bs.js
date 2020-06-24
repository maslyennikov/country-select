'use strict';

var React = require("react");
var ReactSelect = require("react-select");
var Search$ReasonReactExamples = require("../Icons/Search.bs.js");
var CustomOption$ReasonReactExamples = require("../CustomOption/CustomOption.bs.js");
var CustomCountryList$ReasonReactExamples = require("../CustomCountryList/CustomCountryList.bs.js");

var containerStyles = {
  display: "flex",
  padding: "5px",
  alignItems: "center"
};

var countryFlagContainerStyles = {
  marginRight: "10px"
};

var controlContainerStyles = {
  display: "flex",
  alignItems: "center"
};

var searchStyles = {
  color: "#ADADAD",
  marginLeft: "10px"
};

var selectContainerStyles = {
  position: "absolute",
  zIndex: "2"
};

var customStyles = ({
    menu: (provided, state) => ({
      ...provided,
      bottom: "auto",
      width: "230px",
      height: "160px",
      overlay: "hidden",
      margin: "0",
      borderRadius: "0",
      zIndex: "2",
    }),

    control: (_, { selectProps: { width }}) => ({
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.20)",

        fontFamily: "ArialMT",
        fontSize: "14px",
        color: "#333333",
        lineHeight: "18px",
        marginLeft: "-1px",
        marginTop: "2px",

        width: "230px",
        display: "flex",
        height: "35px",
        zIndex: "2"
      }),

    option: (provided, state) => ({
            ...provided,
            padding: "4px 10px",
            fontFamily: "ArialMT",
            fontSize: "14px",
            color: "#333333",
            lineHeight: "18px",
            height: "auto"
        }),

    input: (provided, state) => ({
        ...provided,
        marginLeft: "24px"
    })
  });

function CountrySelect(Props) {
  var countries = Props.countries;
  var onChange = Props.onChange;
  var filterOption = Props.filterOption;
  var components = {
    MenuList: CustomCountryList$ReasonReactExamples.make,
    IndicatorSeparator: null,
    DropdownIndicator: null,
    Option: CustomOption$ReasonReactExamples.make
  };
  return React.createElement("div", {
              style: selectContainerStyles
            }, React.createElement(ReactSelect.default, {
                  options: countries,
                  filterOption: filterOption,
                  components: components,
                  onChange: onChange,
                  styles: customStyles,
                  autoFocus: true,
                  menuIsOpen: true,
                  placeholder: React.createElement("div", {
                        style: controlContainerStyles
                      }, React.createElement(Search$ReasonReactExamples.make, { }), React.createElement("div", {
                            style: searchStyles
                          }, "Search"))
                }));
}

var make = CountrySelect;

exports.containerStyles = containerStyles;
exports.countryFlagContainerStyles = countryFlagContainerStyles;
exports.controlContainerStyles = controlContainerStyles;
exports.searchStyles = searchStyles;
exports.selectContainerStyles = selectContainerStyles;
exports.customStyles = customStyles;
exports.make = make;
/* customStyles Not a pure module */
