open Types;
type propsRecord = {
  index: int,
  style: ReactDOMRe.style,
};

[@react.component]
let make = (~options: array(country), ~children, ~maxHeight) => {
  let height = 35;

  <Bindings.FixedSizeList
    height=maxHeight itemCount={Array.length(children)} itemSize=height>
    {props => <div style={props.style}> {children[props.index]} </div>}
  </Bindings.FixedSizeList>;
};
