'use strict';

var React = require("react");
var CountrySelect$ReasonReactExamples = require("./CountrySelect.bs.js");

function SmartCountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = function (country, inputValue) {
    return country.value.toLowerCase().includes(inputValue.toLowerCase());
  };
  return React.createElement(CountrySelect$ReasonReactExamples.make, {
              countries: countries,
              filterOption: filterOption
            });
}

var make = SmartCountrySelect;

exports.make = make;
/* react Not a pure module */
