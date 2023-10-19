import { Select, SelectItem } from "@nextui-org/react";

const SelectComponent = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(props.items[event.target.value]._id);
    }
  };

  return (
    <Select
      label={props.label}
      className="w-full"
      size={"sm"}
      onChange={handleChange}
      isInvalid={props.errorFields ? true : false}
      errorMessage={props.errorFields}
    >
      {props.items.map((item, key) => (
        <SelectItem key={key}>{item.name}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
