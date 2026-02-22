import { HTMLInputTypeAttribute } from "react";
import { Input, Label } from "shared/ui";
// import { useThrottledCallback } from "use-debounce";
import { useBoundStore } from "@/shared/appStore";
import { throttle } from "lodash";
import { ReactFlowNodeId } from "@/shared/react-flow/nodes/shared";
import { cn } from "@/shared/lib";

type TMyInput = {
  label: string;

  className?: string;
  keyOne: string;
  keyTwo: string | null;
  inputType?: HTMLInputTypeAttribute;
  selectedNodeId: ReactFlowNodeId;
  value?: string | number;
  isDisabled?: boolean;
};
export const ProjectPropertyInput = ({
  className,

  selectedNodeId,
  label,
  inputType = "text",
  keyOne,
  keyTwo = null,
  value = "",
  isDisabled = false,
}: TMyInput) => {
  // const [text, setText] = useState(value);
  // useEffect(() => {
  //   setText(value);
  // }, [selectedNodeId, value]);
  const changeInputPropertyTCell10Kv = useBoundStore(state => state.changeInputPropertyTCell10Kv);

  const throttled = throttle((value, eventNodeId: ReactFlowNodeId) => {
    changeInputPropertyTCell10Kv({
      keyOne,
      keyTwo,
      nodeId: eventNodeId,
      value,
    });
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setText(e.target.value);
    throttled(e.target.value, selectedNodeId);
  };

  return (
    <form className="flex flex-col items-start">
      <Label htmlFor={`${keyOne}-${keyTwo}`}>{label} </Label>
      <Input
        disabled={isDisabled}
        className={cn(className, {
          "bg-yellow-200 border-yellow-400": !value,
        })}
        id={`${keyOne}-${keyTwo}`}
        value={value}
        onChange={handleChange}
        type={inputType}
      />
    </form>
  );
};
