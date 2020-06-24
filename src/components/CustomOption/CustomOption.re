let containerStyles =
  ReactDOMRe.Style.make(~display="flex", ~alignItems="center", ());

let countryFlagContainerStyles =
  ReactDOMRe.Style.make(~marginRight="8px", ());

let labelStyles =
  ReactDOMRe.Style.make(~whiteSpace="nowrap", ~overflow="hidden", ());

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
    ) => {
  <Bindings.Option
    label
    value
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
    hasValue
    getStyles
    cx>
    <div style=containerStyles>
      <div style=countryFlagContainerStyles>
        <Bindings.CountryFlag code=value width="15" height="12" />
      </div>
      <div style=labelStyles> {React.string(label)} </div>
    </div>
  </Bindings.Option>;
};
