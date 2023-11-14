import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const SelectComponent = (props) => {
  const handleChange = (value) => {
    // props.onChange(
    //   props.getId ? props.items[event.target.value]?._id : event.target.value
    // );

    console.log(value);
  };

  return (
    <Autocomplete
      label={props.label}
      className='w-full'
      size={"sm"}
      onInputChange={handleChange}
      defaultSelectedKeys={props.selectedOption}
      isInvalid={props.errorMessage ? true : false}
      errorMessage={props.errorMessage}>
      {props.items?.map((item, key) => (
        <AutocompleteItem key={key}>
          {item.label ?? item.value}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default SelectComponent;
