let containerStyles =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~alignItems="center",
    ~padding="5px",
    (),
  );
let countryFlagContainerStyles =
  ReactDOMRe.Style.make(~marginRight="10px", ());
let controlContainerStyles =
  ReactDOMRe.Style.make(~display="flex", ~alignItems="center", ());
let searchStyles =
  ReactDOMRe.Style.make(~marginLeft="10px", ~color="#ADADAD", ());
let selectContainerStyles =
  ReactDOMRe.Style.make(~zIndex="2", ~position="absolute", ());

// I did not found a method to represent this customStyles object rather than hardcoding it in JS :(
let customStyles = [%bs.raw
  {|
  {
    menu: (provided, state) => ({
      ...provided,
      bottom: "auto",
      width: "230px",
      height: "160px",
      overlay: "hidden",
      margin: "0",
      borderRadius: "0",
      zIndex: "2",
    }),

    control: (_, { selectProps: { width }}) => ({
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.20)",

        fontFamily: "ArialMT",
        fontSize: "14px",
        color: "#333333",
        lineHeight: "18px",
        marginLeft: "-1px",
        marginTop: "2px",

        width: "230px",
        display: "flex",
        height: "35px",
        zIndex: "2"
      }),

    option: (provided, state) => ({
            ...provided,
            padding: "4px 10px",
            fontFamily: "ArialMT",
            fontSize: "14px",
            color: "#333333",
            lineHeight: "18px",
            height: "auto"
        }),

    input: (provided, state) => ({
        ...provided,
        marginLeft: "24px"
    })
  }
  |}
];

[@react.component]
let make = (~countries, ~onChange, ~filterOption) => {
  let components = {
    "MenuList": CustomCountryList.make,
    "IndicatorSeparator": React.null,
    "DropdownIndicator": React.null,
    "Option": CustomOption.make,
  };

  <div style=selectContainerStyles>
    <Bindings.Select
      filterOption
      components
      options=countries
      onChange
      autoFocus=true
      menuIsOpen=true
      styles=customStyles
      placeholder={
        <div style=controlContainerStyles>
          <Search />
          <div style=searchStyles> {React.string("Search")} </div>
        </div>
      }
    />
  </div>;
};
