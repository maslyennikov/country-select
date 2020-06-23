'use strict';

var React = require("react");
var ReactSelect = require("react-select");

function Input(Props) {
  var clearValue = Props.clearValue;
  var getStyles = Props.getStyles;
  var getValue = Props.getValue;
  var hasValue = Props.hasValue;
  var isMulti = Props.isMulti;
  var options = Props.options;
  var selectOption = Props.selectOption;
  var selectProps = Props.selectProps;
  var setValue = Props.setValue;
  var emotion = Props.emotion;
  var theme = Props.theme;
  var cx = Props.cx;
  return React.createElement(React.Fragment, undefined, React.createElement(ReactSelect.components.Input, {
                  clearValue: clearValue,
                  getStyles: getStyles,
                  getValue: getValue,
                  hasValue: hasValue,
                  isMulti: isMulti,
                  options: options,
                  selectOption: selectOption,
                  selectProps: selectProps,
                  setValue: setValue,
                  emotion: emotion,
                  theme: theme,
                  cx: cx
                }));
}

var make = Input;

exports.make = make;
/* react Not a pure module */
