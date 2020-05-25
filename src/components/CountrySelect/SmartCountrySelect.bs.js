'use strict';

var React = require("react");
var CustomOption$ReasonReactExamples = require("../CustomOption/CustomOption.bs.js");
var CountrySelect$ReasonReactExamples = require("./CountrySelect.bs.js");

function SmartCountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = function (country, inputValue) {
    return country.label.toLowerCase().includes(inputValue.toLowerCase());
  };
  return React.createElement(CountrySelect$ReasonReactExamples.make, {
              countries: countries,
              filterOption: filterOption,
              components: {
                Option: CustomOption$ReasonReactExamples.make
              }
            });
}

var make = SmartCountrySelect;

exports.make = make;
/* react Not a pure module */
