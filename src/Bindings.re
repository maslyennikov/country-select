module Select = {
  [@bs.module "react-select"] [@react.component]
  external make:
    (
      ~options: list('a),
      ~defaultInputValue: string=?,
      ~defaultMenuIsOpen: bool=?,
      ~onInputChange: string => string=?,
      ~filterOption: ('b, string) => bool=?,
      ~components: 'c=?
    ) =>
    React.element =
    "default";
};

module Option = {
  [@bs.module "react-select"] [@bs.scope "components"] [@react.component]
  external make: props => React.element = "Option";
};

module CountryFlag = {
  [@bs.module "react-world-flags"] [@react.component]
  external make:
    (~code: string, ~height: string=?, ~width: string=?) => React.element =
    "default";
};
