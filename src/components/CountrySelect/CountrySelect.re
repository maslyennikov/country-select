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
      })
  }
  |}
];

[@react.component]
let make = (~countries, ~filterOption=?) => {
  let decoratedCountries =
    countries
    |> Array.map(countryEntry =>
         {
           "label":
             <div style=containerStyles>
               <div style=countryFlagContainerStyles>
                 <Bindings.CountryFlag
                   code={countryEntry.value}
                   width="15"
                   height="12"
                 />
               </div>
               <div> {React.string(countryEntry.label)} </div>
             </div>,
           "value": countryEntry.label,
         }
       );

  <>
    {switch (filterOption) {
     | None =>
       <Bindings.Select
         components={
           "MenuList": CustomCountryList.make,
           "Menu": CustomMenu.make,
           "IndicatorSeparator": CustomIndicatorSeparator.make,
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
         }
         options=countries
         onChange={option => Js.log(option)}
         defaultMenuIsOpen=true
         styles=customStyles
       />
     }}
  </>;
};
