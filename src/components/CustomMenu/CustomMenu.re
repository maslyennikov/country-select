type propsType = {children: React.element};

[@react.component]
let make = (~children) => {
  <>
    <div> {React.string("This is a test")} </div>
    <Bindings.Menu> children </Bindings.Menu>
  </>;
};
