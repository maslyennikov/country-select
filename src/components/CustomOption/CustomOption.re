[@react.component]
let make = (~label, ~value) => {
  <div>
    <Bindings.CountryFlag code=value width="15" height="12" />
    {React.string(label)}
  </div>;
};
