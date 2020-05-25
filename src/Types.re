type country = {
  label: string,
  value: string,
};

type state =
  | LoadingCountries
  | ErrorFetchingCountries
  | LoadedCountries(list(country));
