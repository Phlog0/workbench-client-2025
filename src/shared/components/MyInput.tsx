import React, { memo, useEffect, useRef, useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { Input, Label } from "shared/ui";
import useStore from "../appStore/store";
import { useReactFlow } from "@xyflow/react";
import { useThrottledCallback } from "use-debounce";
import { cn } from "../lib/react-std";
type TMyInput = {
  label: string;
  inputId: string;
  className?: string;
  keyOne: string;
  keyTwo: string;
  inputType?: string;
  selectedNodeId: string;
  defaultValue?: string | number;
};
export const MyInput = memo(function MyInput({
  className,
  inputId,
  selectedNodeId,
  label,
  inputType = "text",
  keyOne,
  keyTwo,
  defaultValue = "", //мб в будущем с сервака?
}: TMyInput) {
  const { getNode } = useReactFlow();
  const nodeValue = getNode(selectedNodeId as string);
  console.log(nodeValue);
  const nodes = useStore((state) => state.nodes);
  const currentNode = nodes.find((item) => item.id === selectedNodeId);

  // const nodeId = useStore((state) => state.selectedNodeId);
  const [text, setText] = useState(defaultValue);
  // const [state, setState] = useState(selectedNodeId);

  useEffect(() => {
    setText(currentNode?.[keyOne]?.[keyTwo] || defaultValue);
  }, [selectedNodeId, currentNode?.[keyOne]?.[keyTwo]]);
  const changeInputPropertyTCell10Kv = useStore(
    (state) => state.changeInputPropertyTCell10Kv
  );

  const throttled = useThrottledCallback((value, eventNodeId: string) => {
    // setText(value);
    changeInputPropertyTCell10Kv({
      keyOne,
      keyTwo,
      nodeId: eventNodeId,
      value,
    });
  }, 1000);

  return (
    <form className="flex flex-col items-start">
      <Label htmlFor={inputId}>{label} </Label>
      <Input
        className={className}
        id={inputId}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          throttled(e.target.value, selectedNodeId);
        }}
        type={inputType}
      />
    </form>
  );
});
