[@react.component]
let make = (~countries, ~filterOption=?) => {
  <>
    {switch (filterOption) {
     | None => <Bindings.Select options=countries />
     | Some(filterOption) =>
       <Bindings.Select filterOption options=countries />
     }}
  </>;
};
