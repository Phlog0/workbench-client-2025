import { OpnDevice } from "./opn-device";
import { IsThereDevice } from "@/shared/types/react-flow-node-types";
import {
  IS_THERE_OPN_KEY_1_10KV,
  IS_THERE_OPN_DEVICE_OPTIONS_10KV,
  IS_THERE_OPN_LABEL_10KV,
} from "@/shared/constants/10kv";
import { TOpn } from "@/shared/types";
import { ProjectPropertySelect } from "@/entities/project-property";
export function IsThereOpnDevice({
  className,
  selectedNodeId,
  isThereOpnDevice,
  opnDevice,
}: {
  className?: string;
  selectedNodeId: string;
  isThereOpnDevice?: IsThereDevice;
  opnDevice?: TOpn;
}) {
  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={IS_THERE_OPN_KEY_1_10KV}
        label={IS_THERE_OPN_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={IS_THERE_OPN_DEVICE_OPTIONS_10KV}
        valueFromProp={isThereOpnDevice || "Нет"}
        // setPropValue={setIsThereOpnDevice}
      />
      {isThereOpnDevice === "Есть" && (
        <OpnDevice selectedNodeId={selectedNodeId} opnDevice={opnDevice} />
      )}
    </div>
  );
}
