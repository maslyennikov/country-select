open Types;

[@react.component]
let make = (~countries: array(country)) => {
  //  This is the custom filter
  let filterOption = (country, inputValue: string) => {
    let {value} = country;

    value
    |> Js.String.toLowerCase
    |> Js.String.includes(inputValue |> Js.String.toLowerCase);
  };

  <CountrySelect countries filterOption />;
};
