module Select = {
  [@bs.module "react-select"] [@react.component]
  external make:
    (
      ~options: list('a),
      ~onInputChange: string => string=?,
      ~filterOption: ('b, string) => bool=?,
      ~components: 'c=?,
      ~onChange: 'a => unit=?
    ) =>
    React.element =
    "default";
};

module Option = {
  [@bs.module "react-select"] [@bs.scope "components"] [@react.component]
  external make:
    (
      ~children: React.element=?,
      ~getStyles: (string, 'a) => 'b=?,
      ~cx: unit => unit=?,
      ~label: string=?,
      ~value: 'a=?,
      ~theme: 'a=?,
      ~setValue: 'a=?,
      ~data: 'a=?,
      ~innerProps: 'a=?,
      ~innerRef: 'a=?,
      ~isSelected: bool=?,
      ~isFocused: bool=?,
      ~isDisabled: bool=?,
      ~selectProps: 'a=?,
      ~selectOption: 'a=?,
      ~options: array('a)=?,
      ~isMulti: 'a=?,
      ~hasValue: bool=?
    ) =>
    React.element =
    "Option";
};

module CountryFlag = {
  [@bs.module "react-world-flags"] [@react.component]
  external make:
    (~code: string, ~height: string=?, ~width: string=?) => React.element =
    "default";
};
