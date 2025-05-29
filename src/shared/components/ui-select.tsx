import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from "shared/ui";
import useStore from "shared/appStore/store";
import { TypeOfCellOptions_10KV, TypeOfSwitchingDeviceOptions_10KV } from "../constants";
import { ReactFLowNodeId } from "../appStore/appStore-types";
type SelectOptions = TypeOfCellOptions_10KV | TypeOfSwitchingDeviceOptions_10KV;

type TUiSelect = {
  label?: string;
  propValue: string;
  setPropValue: React.Dispatch<React.SetStateAction<string>>;
  options: readonly string[];
  q?: string;
  prop: string;
  selectedNodeId: ReactFLowNodeId;
};

export const UiSelect = ({
  label,
  propValue,
  setPropValue,
  options,
  q,
  prop,
  selectedNodeId,
}: TUiSelect) => {
  const { changeSelectPropery } = useStore();
  const handleChange = (value: SelectOptions) => {
    setPropValue(value);
    changeSelectPropery({ nodeId: selectedNodeId, prop, value });
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select
        data-id={prop}
        // defaultValue={value}
        value={propValue}
        onValueChange={(value) => handleChange(value as SelectOptions)}
      >
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
