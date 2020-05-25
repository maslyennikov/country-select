module Select = {
  [@bs.module "react-select"] [@react.component]
  external make:
    (
      ~options: list('t),
      ~defaultInputValue: string=?,
      ~defaultMenuIsOpen: bool=?,
      ~onInputChange: string => string=?,
      ~filterOption: ('b, string) => bool=?
    ) =>
    React.element =
    "default";
};

module CountryFlag = {
  [@bs.module "react-world-flags"] [@react.component]
  external make:
    (~code: string, ~height: string=?, ~width: string=?) => React.element =
    "default";
};
