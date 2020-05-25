[@react.component]
let make = (~countries, ~filterOption=?, ~components=?) => {
  <>
    {switch (filterOption) {
     | None => <Bindings.Select components options=countries />
     | Some(filterOption) =>
       <Bindings.Select filterOption components options=countries />
     }}
  </>;
};
