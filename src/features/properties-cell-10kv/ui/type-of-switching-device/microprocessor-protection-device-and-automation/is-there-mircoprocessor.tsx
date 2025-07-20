import { MicroprocessorProtectionDevice } from "./microprocessor-protection-device";
import { IsThereDevice } from "@/shared/types/react-flow-node-types";
import {
  IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV,
  IS_THERE_MICROPROCESSOR_DEVICE_LABEL_10KV,
  IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV,
} from "@/shared/constants/10kv";
import { Tmpdaa } from "@/shared/types/properties-types";
import { ProjectPropertySelect } from "@/entities/project-property";

export function IsThereMicroprocessorDevice({
  className,
  selectedNodeId,
  isThereMicroProc,
  microProc,
}: {
  className?: string;
  selectedNodeId: string;
  isThereMicroProc?: IsThereDevice;
  microProc?: Tmpdaa;
}) {
  return (
    <div className={className}>
      <ProjectPropertySelect
        key1={IS_THERE_MICROPROCESSOR_DEVICE_KEY_1_10KV}
        label={IS_THERE_MICROPROCESSOR_DEVICE_LABEL_10KV}
        selectedNodeId={selectedNodeId}
        options={IS_THERE_MICROPROCESSOR_DEVICE_OPTIONS_10KV}
        valueFromProp={isThereMicroProc || "Нет"}
      />
      {isThereMicroProc === "Есть" && (
        <MicroprocessorProtectionDevice selectedNodeId={selectedNodeId} microProc={microProc} />
      )}
    </div>
  );
}
