import React, { useEffect, useRef, useState } from "react";
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
  defaultValue?: string;
};
export const MyInput = ({
  className,
  inputId,
  selectedNodeId,
  label,
  inputType = "text",
  keyOne,
  keyTwo,
  defaultValue = "", //мб в будущем с сервака?
}: TMyInput) => {
  const { getNode } = useReactFlow();

  const nodeId = useStore((state) => state.selectedNodeId);
  const [text, setText] = useState(defaultValue);
  const [state, setState] = useState(nodeId);
  const prevStateRef = useRef<string | null>(null);
  useEffect(() => {
    prevStateRef.current = state;
  }, [state]); // Срабатывает при каждом изменении state
  useEffect(() => {
    setText(defaultValue);
  }, [nodeId]);
  const changeInputPropertyTCell10Kv = useStore(
    (state) => state.changeInputPropertyTCell10Kv
  );

  const throttled = useThrottledCallback((value, eventNodeId: string) => {
    // setText(value);
    console.log(eventNodeId);
    changeInputPropertyTCell10Kv({
      keyOne,
      keyTwo,
      nodeId: eventNodeId,
      value,
    });
  }, 1000);

  //todo THROTTLE тут пригодица
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setText(value);
      changeInputPropertyTCell10Kv({
        keyOne,
        keyTwo,
        nodeId: prevStateRef.current as string,
        value,
      });
    },
    1000
  );

  return (
    <form className="flex flex-col items-start">
      <Label htmlFor={inputId}>{label} </Label>
      <Input
        className={className}
        id={inputId}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          throttled(e.target.value, nodeId);
        }}
        type={inputType}
      />
    </form>
  );
};
