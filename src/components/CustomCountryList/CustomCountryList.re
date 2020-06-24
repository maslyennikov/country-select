type itemProps = {
  index: int,
  style: ReactDOMRe.style,
};

[@react.component]
let make = (~children) => {
  let height = 27;

  // Here I used react-window for lazy loading of the options
  <Bindings.FixedSizeList
    height=160 itemCount={Array.length(children)} itemSize=height>
    {props => <div style={props.style}> {children[props.index]} </div>}
  </Bindings.FixedSizeList>;
};
