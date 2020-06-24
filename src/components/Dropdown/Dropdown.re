[@react.component]
let make = (~children, ~isOpen, ~target, ~onClose) => {
  <div>
    target
    {isOpen
       ? {
         children;
       }
       : {
         React.null;
       }}
    {isOpen ? <Blanket onClick=onClose /> : React.null}
  </div>;
};
