'use strict';

var React = require("react");
var ReactSelect = require("react-select");
var ReactWorldFlags = require("react-world-flags");

var containerStyles = {
  display: "flex",
  padding: "5px",
  alignItems: "center"
};

var countryFlagContainerStyles = {
  marginRight: "10px"
};

function CustomOption(Props) {
  var label = Props.label;
  var value = Props.value;
  var theme = Props.theme;
  var setValue = Props.setValue;
  var data = Props.data;
  var innerProps = Props.innerProps;
  var innerRef = Props.innerRef;
  var isSelected = Props.isSelected;
  var isFocused = Props.isFocused;
  var isDisabled = Props.isDisabled;
  var selectProps = Props.selectProps;
  var selectOption = Props.selectOption;
  var options = Props.options;
  var isMulti = Props.isMulti;
  var hasValue = Props.hasValue;
  var getStyles = Props.getStyles;
  var cx = Props.cx;
  return React.createElement(ReactSelect.components.Option, {
              children: React.createElement("div", {
                    style: containerStyles
                  }, React.createElement("div", {
                        style: countryFlagContainerStyles
                      }, React.createElement(ReactWorldFlags.default, {
                            code: value,
                            height: "12",
                            width: "15"
                          })), React.createElement("div", undefined, label)),
              getStyles: getStyles,
              cx: cx,
              label: label,
              theme: theme,
              setValue: setValue,
              data: data,
              innerProps: innerProps,
              innerRef: innerRef,
              isSelected: isSelected,
              isFocused: isFocused,
              isDisabled: isDisabled,
              selectProps: selectProps,
              selectOption: selectOption,
              options: options,
              isMulti: isMulti,
              hasValue: hasValue
            });
}

var make = CustomOption;

exports.containerStyles = containerStyles;
exports.countryFlagContainerStyles = countryFlagContainerStyles;
exports.make = make;
/* react Not a pure module */
