let containerStyles =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~alignItems="center",
    ~padding="5px",
    (),
  );
let countryFlagContainerStyles =
  ReactDOMRe.Style.make(~marginRight="10px", ());

[@react.component]
// Here I tried to use spread operator which didn't work.
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
    ) => {
  <Bindings.Option
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
    hasValue>
    <div style=containerStyles>
      <div style=countryFlagContainerStyles>
        <Bindings.CountryFlag code=value width="15" height="12" />
      </div>
      <div> {React.string(label)} </div>
    </div>
  </Bindings.Option>;
};
