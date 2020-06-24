let controlContainerStyles =
  ReactDOMRe.Style.make(
    ~background="#FFFFFF",
    ~border="1px solid rgba(0,0,0,0.20)",
    ~borderRadius="3px",
    ~fontFamily="ArialMT",
    ~fontSize="14px",
    ~color="#333333",
    ~lineHeight="18px",
    ~width="119px",
    ~height="26px",
    ~alignItems="center",
    ~display="flex",
    ~padding="2px 10px",
    ~boxSizing="border-box",
    ~justifyContent="space-between",
    (),
  );
let placeholderContainerStyles =
  ReactDOMRe.Style.make(~overflow="hidden", ~whiteSpace="nowrap", ());

[@react.component]
let make = (~onClick, ~selectValue) => {
  <div onClick style=controlContainerStyles>
    <div style=placeholderContainerStyles> {React.string(selectValue)} </div>
    <ArrowDown />
  </div>;
};
