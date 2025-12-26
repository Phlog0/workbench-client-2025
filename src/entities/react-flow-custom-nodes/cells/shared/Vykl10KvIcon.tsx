import { memo, useMemo } from "react";
import { TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import {
  SwitcherRIcon,
  SwitcherVn1Icon,
  SwitcherVvIcon,
} from "@/shared/assets/electrical-entities-icons/cell-10kv/switchers";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";
import {
  TmpdaaCell10Kv,
  TSwitchingDeviceCell10Kv,
  TTypeOfSwitchingDeviceCell10Kv,
} from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { TriangleAlert } from "lucide-react";
import { IsThereDevice } from "@/shared/react-flow/nodes/shared";
import { TSwitchCell04Kv } from "@/shared/react-flow/nodes/cells/cell-04kv/types";
export const Vykl10KvIcon = memo(function Vykl10KvIcon({
  className,
  value = "Нет",
  mpdaa,
  switchingDevice,
  typeOfMicroprocessorDevice,
}: {
  className?: string;
  value?: TTypeOfSwitchingDeviceCell10Kv;
  mpdaa?: TmpdaaCell10Kv;
  switchingDevice?: TSwitchingDeviceCell10Kv | TSwitchCell04Kv;
  typeOfMicroprocessorDevice?: IsThereDevice; //TODO Сделать аллиасы для IsThereDevice на каждое свойство, которое его использует
}) {
  const hasEmptyFields = useMemo(() => {
    if (!switchingDevice) return true;
    return Object.values({ ...switchingDevice, typeOfDevice: undefined }).every(
      (item) => item === "" || item === undefined || item === null,
    );
  }, [switchingDevice]);
  const hasInvalidVv = useMemo(() => {
    if (!(value === "ВВ (Вакуумные выключатели)")) {
      return false;
    }
    if (typeOfMicroprocessorDevice === "Нет") return true;

    if (!mpdaa) return true;
    return Object.values(mpdaa).every((item) => item === "" || item === undefined || item === null);
  }, [mpdaa, typeOfMicroprocessorDevice, value]);

  const iconColor = hasEmptyFields ? "yellow" : "black";
  return (
    <>
      <div className={className}>
        {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.no && <VerticalLineIcon />}
        <div className="relative">
          {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vv && (
            <SwitcherVvIcon color={iconColor} />
          )}
          {hasInvalidVv && <TriangleAlert className="bg-black text-red-700 absolute top-0" />}
        </div>
        {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vn && (
          <SwitcherVn1Icon color={iconColor} />
        )}
        {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.r && (
          <SwitcherRIcon color={iconColor} />
        )}
      </div>
    </>
  );
});
