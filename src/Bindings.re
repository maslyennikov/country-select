module Select = {
  [@bs.module "react-select"] [@react.component]
  external make:
    (
      ~options: array('a),
      ~onInputChange: string => string=?,
      ~filterOption: ('b, string) => bool=?,
      ~components: 'c=?,
      ~onChange: 'a => unit=?,
      ~menuPlacement: string=?,
      ~styles: 'a=?,
      ~isClearable: bool=?,
      ~autoFocus: bool=?,
      ~backspaceRemovesValue: bool=?,
      ~controlShouldRenderValue: bool=?,
      ~hideSelectedOptions: bool=?,
      ~menuIsOpen: bool=?,
      ~placeholder: React.element=?
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
      ~value: string=?,
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
      ~isMulti: bool=?,
      ~hasValue: bool=?,
      ~children: 'a=?
    ) =>
    React.element =
    "Option";
};

module Menu = {
  [@bs.module "react-select"] [@bs.scope "components"] [@react.component]
  external make:
    (
      ~children: React.element=?,
      ~getStyles: (string, 'a) => 'b=?,
      ~cx: unit => unit=?,
      ~label: string=?,
      ~value: string=?,
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
      ~isMulti: bool=?,
      ~hasValue: bool=?
    ) =>
    React.element =
    "Menu";
};

module CountryFlag = {
  [@bs.module "react-world-flags"] [@react.component]
  external make:
    (~code: string, ~height: string=?, ~width: string=?) => React.element =
    "default";
};

module FixedSizeList = {
  [@bs.module "react-window"] [@react.component]
  external make:
    (
      ~itemCount: int,
      ~height: int,
      ~width: int=?,
      ~itemSize: int,
      ~initialScrollOffset: int=?,
      ~children: 'a=?
    ) =>
    React.element =
    "FixedSizeList";
};
