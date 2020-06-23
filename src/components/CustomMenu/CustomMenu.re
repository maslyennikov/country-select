let searchContainerStyles =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~width="230px",
    ~height="35px",
    ~justifyContent="center",
    ~alignItems="center",
    (),
  );
[@react.component]
let make =
    (
      ~label,
      ~value,
      ~theme,
      ~setValue,
      ~data,
      ~innerProps,
      ~innerRef,
      ~isSelected,
      ~isFocused,
      ~isDisabled,
      ~selectProps,
      ~selectOption,
      ~options,
      ~isMulti,
      ~hasValue,
      ~getStyles,
      ~cx,
      ~children,
    ) => {
  <>
    <div style=searchContainerStyles> {React.string("This is a test")} </div>
    <Bindings.Menu
      getStyles
      cx
      label
      theme
      setValue
      data
      innerProps
      innerRef
      isSelected
      isFocused
      isDisabled
      selectProps
      selectOption
      options
      isMulti
      value
      hasValue
      className="optionsMenu">
      children
    </Bindings.Menu>
  </>;
};