import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const SelectComponent = (props) => {
  const handleChange = (value) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      label={props.label}
      className="w-full"
      size={"sm"}
      onInputChange={handleChange}
      onBlur={props.onBlur}
      isInvalid={props.errorMessage ? true : false}
      defaultSelectedKey={props.value}
      errorMessage={props.errorMessage}
    >
      {props.items?.map((item) => (
        <AutocompleteItem key={item.label ?? item.value}>
          {item.label ?? item.value}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default SelectComponent;
