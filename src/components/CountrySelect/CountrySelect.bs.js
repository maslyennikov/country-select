'use strict';

var React = require("react");
var ReactSelect = require("react-select");

function CountrySelect(Props) {
  var countries = Props.countries;
  var filterOption = Props.filterOption;
  var components = Props.components;
  return React.createElement(React.Fragment, undefined, filterOption !== undefined ? React.createElement(ReactSelect.default, {
                    options: countries,
                    filterOption: filterOption,
                    components: components
                  }) : React.createElement(ReactSelect.default, {
                    options: countries,
                    components: components
                  }));
}

var make = CountrySelect;

exports.make = make;
/* react Not a pure module */
