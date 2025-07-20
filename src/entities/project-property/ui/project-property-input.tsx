import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { Input, Label } from "shared/ui";
// import { useThrottledCallback } from "use-debounce";
import { useBoundStore } from "@/shared/appStore";
import { ReactFlowNodeId } from "@/shared/appStore/slices/types";
import { throttle } from "lodash";

type TMyInput = {
  label: string;

  className?: string;
  keyOne: string;
  keyTwo: string;
  inputType?: HTMLInputTypeAttribute;
  selectedNodeId: string;
  value?: string | number;
};
export const ProjectPropertyInput = ({
  className,

  selectedNodeId,
  label,
  inputType = "text",
  keyOne,
  keyTwo,
  value = "", //мб в будущем с сервака?
}: TMyInput) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [selectedNodeId, value]);
  const changeInputPropertyTCell10Kv = useBoundStore((state) => state.changeInputPropertyTCell10Kv);

  const throttled = throttle((value, eventNodeId: ReactFlowNodeId) => {
    changeInputPropertyTCell10Kv({
      keyOne,
      keyTwo,
      nodeId: eventNodeId,
      value,
    });
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    throttled(e.target.value, selectedNodeId);
  };

  return (
    <form className="flex flex-col items-start">
      <Label htmlFor={`${keyOne}-${keyTwo}`}>{label} </Label>
      <Input
        className={className}
        id={`${keyOne}-${keyTwo}`}
        value={text}
        onChange={handleChange}
        type={inputType}
      />
    </form>
  );
};
