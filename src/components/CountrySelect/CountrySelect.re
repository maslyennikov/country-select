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
           "value": c.label,
         }
       );

  <>
    {switch (filterOption) {
     | None =>
       <Bindings.Select
         components={"MenuList": CountryList.make}
         options=decoratedCountries
         onChange={country => Js.log(country)}
       />
     | Some(filterOption) =>
       <Bindings.Select
         filterOption
         components={"MenuList": CountryList.make}
         options=decoratedCountries
         onChange={option => Js.log(option)}
       />
     }}
  </>;
};
