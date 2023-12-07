import { Chip } from "@nextui-org/react";
import Autocomplete from "@/components/html/Autocomplete";
import Tooltip from "@/components/Tooltip";

const EditableBadge = (props) => {
  return props.editable ? (
    <Tooltip
      buttonChild={
        <Chip isDisabled color="primary" variant="shadow">
          {props.editCreateValue}
        </Chip>
      }
      position="bottom"
    >
      <Autocomplete
        onChange={props.onChange}
        items={props.items}
        value={props.value}
        label={props.label}
      />
    </Tooltip>
  ) : (
    <Chip isDisabled color="primary" variant="shadow">
      {props.text}
    </Chip>
  );
};

export default EditableBadge;
