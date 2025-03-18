import useStore from "@/shared/appStore/store";
import { MySelect } from "@/shared/components";
import { useReactFlow } from "@xyflow/react";
import { SwitchingDeviceVv } from "./switching-device-vv";
import { SwitchingDeviceVn } from "./switching-device-vn";
import { SwitchingDeviceR } from "./switching-device-r";
import { useState } from "react";

export function TypeOfSwitchingDevice({ className }: { className?: string }) {
  const options = ["нет", "вв", "вн", "р"];
  const { getNode } = useReactFlow();
  const { selectedNodeId } = useStore();
  const nodeInfo = getNode(selectedNodeId as string);
  // const typeOfCell = nodeInfo?.["typeOfCell"];

  const [typeOfCell, setTypeOfCell] = useState(
    String(nodeInfo?.["typeOfCell"]) || "нет"
  );

  return (
    <div>
      <MySelect
        prop="typeOfCell"
        selectId="typeOfSwitchingDevice"
        label="Тип коммутационного аппарата"
        selectedNodeId={selectedNodeId}
        options={options}
        propValue={typeOfCell}
        setPropValue={setTypeOfCell}
      />
      {typeOfCell === "вв" && (
        <SwitchingDeviceVv selectedNodeId={selectedNodeId} />
      )}
      {typeOfCell === "вн" && (
        <SwitchingDeviceVn selectedNodeId={selectedNodeId} />
      )}
      {typeOfCell === "р" && (
        <SwitchingDeviceR selectedNodeId={selectedNodeId} />
      )}
    </div>
  );
}
