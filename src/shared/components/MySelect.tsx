import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from "shared/ui";
import useStore from "shared/appStore/store";
import { AllNodesPropertiesTypes } from "../appStore/properties-types";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { reactFLowSelectors } from "../appStore/my-selectors";

type MySelect = {
  label?: string;
  // propValue?: AllNodesPropertiesTypes[keyof AllNodesPropertiesTypes];
  propValue?: string;
  setPropValue: React.Dispatch<React.SetStateAction<string>>; // я типо сверху буду провоцировать ре-рендер. Похоже на антипатерн
  options: string[];
  q?: string;
  prop: keyof AllNodesPropertiesTypes; //ключ, который отвечает за select (ex.: typeOfCell)
  selectedNodeId: string;
};

export const MySelect = ({
  label,
  propValue,
  setPropValue,
  options,
  q,
  prop,
  selectedNodeId,
}: MySelect) => {
  const { changeSelectPropery } = useStore();
  const handleChange = (value: string) => {
    setPropValue(value);
    changeSelectPropery({ nodeId: selectedNodeId, prop, value });
  };

  // const {
  //   nodes,
  //   edges,
  //   onNodesChange,
  //   onEdgesChange,
  //   onConnect,
  //   setSelectedNodeId,
  //   addNode,
  // } = useStore(useShallow(reactFLowSelectors));

  const nodes = useStore((state) => state.nodes);
  return (
    <div>
      <Label>{label}</Label>
      <Select
        data-id={prop}
        // defaultValue={value}
        value={propValue}
        onValueChange={(value) => handleChange(value)}
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
