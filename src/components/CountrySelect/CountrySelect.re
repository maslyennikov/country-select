open Types;

let containerStyles =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~alignItems="center",
    ~padding="5px",
    (),
  );
let countryFlagContainerStyles =
  ReactDOMRe.Style.make(~marginRight="10px", ());

let customStyles = [%bs.raw
  {|
  {
    menu: (provided, state) => ({
      ...provided,
      bottom: "auto",
      width: "230px",
      margin: "0",
      borderRadius: "0"
    }),

    control: (_, { selectProps: { width }}) => ({
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.20)",
        borderRadius: "3px",

        fontFamily: "ArialMT",
        fontSize: "14px",
        color: "#333333",
        lineHeight: "18px",

        width: "119px",
        display: "flex",
        height: "26px"
      }),

    option: (provided, state) => ({
            ...provided,
            padding: "4px 10px",
            fontFamily: "ArialMT",
            fontSize: "14px",
            color: "#333333",
            lineHeight: "18px",
        })
  }
  |}
];

[@react.component]
let make = (~countries, ~filterOption=?) => {
  <>
    {switch (filterOption) {
     | None =>
       <Bindings.Select
         components={
           "MenuList": CustomCountryList.make,
           "Menu": CustomMenu.make,
           "IndicatorSeparator": CustomIndicatorSeparator.make,
           "DropdownIndicator": CustomDropdownIndicator.make,
           "Option": CustomOption.make,
         }
         options=countries
         onChange={country => Js.log(country)}
         defaultMenuIsOpen=true
         styles=customStyles
       />
     | Some(filterOption) =>
       <Bindings.Select
         filterOption
         components={
           "MenuList": CustomCountryList.make,
           "Menu": CustomMenu.make,
           "IndicatorSeparator": CustomIndicatorSeparator.make,
           "DropdownIndicator": CustomDropdownIndicator.make,
           "Option": CustomOption.make,
         }
         options=countries
         onChange={option => Js.log(option)}
         defaultMenuIsOpen=true
         styles=customStyles
       />
     }}
  </>;
};
