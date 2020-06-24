'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Dropdown$ReasonReactExamples = require("../Dropdown/Dropdown.bs.js");
var CountrySelect$ReasonReactExamples = require("./CountrySelect.bs.js");
var SelectControl$ReasonReactExamples = require("../SelectControl/SelectControl.bs.js");

function SmartCountrySelect(Props) {
  var countries = Props.countries;
  var match = React.useState((function () {
          return false;
        }));
  var setIsOpen = match[1];
  var isOpen = match[0];
  var match$1 = React.useState((function () {
          return "Select...";
        }));
  var setSelectValue = match$1[1];
  var toggleOpen = function (param) {
    return Curry._1(setIsOpen, (function (param) {
                  return !isOpen;
                }));
  };
  var onSelectChange = function (value) {
    Curry._1(setIsOpen, (function (param) {
            return !isOpen;
          }));
    Curry._1(setSelectValue, (function (param) {
            return value.label;
          }));
    console.log(value);
    
  };
  var filterOption = function (country, inputValue) {
    return country.label.toLowerCase().includes(inputValue.toLowerCase());
  };
  return React.createElement(Dropdown$ReasonReactExamples.make, {
              children: React.createElement(CountrySelect$ReasonReactExamples.make, {
                    countries: countries,
                    onChange: onSelectChange,
                    filterOption: filterOption
                  }),
              isOpen: isOpen,
              target: React.createElement(SelectControl$ReasonReactExamples.make, {
                    onClick: toggleOpen,
                    selectValue: match$1[0]
                  }),
              onClose: toggleOpen
            });
}

var make = SmartCountrySelect;

exports.make = make;
/* react Not a pure module */
