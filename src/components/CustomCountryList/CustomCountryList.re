type itemProps = {
  index: int,
  style: ReactDOMRe.style,
};

[@react.component]
let make = (~children, ~maxHeight) => {
  let height = 27;

  <Bindings.FixedSizeList
    height=160 itemCount={Array.length(children)} itemSize=height>
    {props => <div style={props.style}> {children[props.index]} </div>}
  </Bindings.FixedSizeList>;
};
