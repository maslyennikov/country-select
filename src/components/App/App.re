open React;
open Types;

[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = () => {
  let (countriesState, setCountriesState) = useState(() => LoadingCountries);

  useEffect0(() => {
    let fetchUrl = "https://gist.githubusercontent.com/rusty-key/659db3f4566df459bd59c8a53dc9f71f/raw/4127f9550ef063121c564025f6d27dceeb279623/counties.json";

    fetch(fetchUrl)
    |> Js.Promise.then_(response => response##json())
    |> Js.Promise.then_(jsonResponse => {
         setCountriesState(_previousState => LoadedCountries(jsonResponse));
         Js.Promise.resolve();
       })
    |> Js.Promise.catch(_err => {Js.Promise.resolve()})
    |> ignore;

    None;
  });

  <>
    {switch (countriesState) {
     | LoadingCountries => React.string("Loading")
     | ErrorFetchingCountries => React.string("Error")
     | LoadedCountries(data) => <SmartCountrySelect countries=data />
     }}
  </>;
};
