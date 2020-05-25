'use strict';

var React = require("react");
var ReactSelect = require("react-select");

function CountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = Props.filterOption;
  return React.createElement(React.Fragment, undefined, filterOption !== undefined ? React.createElement(ReactSelect.default, {
                    options: countries,
                    filterOption: filterOption
                  }) : React.createElement(ReactSelect.default, {
                    options: countries
                  }));
}

var make = CountrySelect;

exports.make = make;
/* react Not a pure module */
