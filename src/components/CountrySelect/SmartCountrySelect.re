open Types;

[@react.component]
let make = (~countries: list(country)) => {
  //  This is the custom filter
  let filterOption = (country, inputValue: string) => {
    let {label} = country;

    label
    |> Js.String.toLowerCase
    |> Js.String.includes(inputValue |> Js.String.toLowerCase);
  };

  <CountrySelect
    countries
    filterOption
    components={"Option": CustomOption.make}
  />;
};
