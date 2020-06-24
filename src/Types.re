type country = {
  label: string,
  value: string,
};

type fetchingState =
  | LoadingCountries
  | ErrorFetchingCountries
  | LoadedCountries(array(country));
