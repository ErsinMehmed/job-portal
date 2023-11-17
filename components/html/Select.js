import { Select, SelectItem } from "@nextui-org/react";

const SelectComponent = (props) => {
  const handleChange = (event) => {
    let value;

    switch (true) {
      case props.getId:
        value = props.items[event.target.value]?._id;
        break;
      case props.getName:
        value = props.items[event.target.value]?.name;
        break;
      case props.getValue:
        value = props.items[event.target.value]?.value;
        break;
      default:
        value = event.target.value;
    }

    props.onChange(value);
  };

  return (
    <Select
      label={props.label}
      className="w-full"
      size={"sm"}
      onChange={handleChange}
      isInvalid={props.errorMessage ? true : false}
      errorMessage={props.errorMessage}
    >
      {props.items?.map((item, key) => (
        <SelectItem key={key}>{item.name ?? item.value}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
