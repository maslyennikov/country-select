open Types;
open React;

[@react.component]
let make = (~countries: array(country)) => {
  let (isOpen, setIsOpen) = useState(() => false);
  let (selectValue, setSelectValue) = useState(() => "Select...");

  let toggleOpen = _ => {
    setIsOpen(_ => !isOpen);
  };
  let onSelectChange = (value: country) => {
    toggleOpen();
    setSelectValue(_ => value.label);
    Js.log(value);
  };

  //  This is the custom filter
  let filterOption = (country, inputValue: string) => {
    let {label} = country;

    label
    |> Js.String.toLowerCase
    |> Js.String.includes(inputValue |> Js.String.toLowerCase);
  };

  <Dropdown
    isOpen
    target={<SelectControl selectValue onClick=toggleOpen />}
    onClose=toggleOpen>
    <CountrySelect countries filterOption onChange=onSelectChange />
  </Dropdown>;
  //  <CountrySelect countries filterOption />;
};
