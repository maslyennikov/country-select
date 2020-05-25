'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var SmartCountrySelect$ReasonReactExamples = require("../CountrySelect/SmartCountrySelect.bs.js");

function App(Props) {
  var match = React.useState((function () {
          return /* LoadingCountries */0;
        }));
  var setCountriesState = match[1];
  var countriesState = match[0];
  React.useEffect((function () {
          fetch("https://gist.githubusercontent.com/rusty-key/659db3f4566df459bd59c8a53dc9f71f/raw/4127f9550ef063121c564025f6d27dceeb279623/counties.json").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setCountriesState, (function (_previousState) {
                            return /* LoadedCountries */[jsonResponse];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  return React.createElement("div", undefined, typeof countriesState === "number" ? (
                countriesState !== 0 ? "Error" : "Loading"
              ) : React.createElement(SmartCountrySelect$ReasonReactExamples.make, {
                    countries: countriesState[0]
                  }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
