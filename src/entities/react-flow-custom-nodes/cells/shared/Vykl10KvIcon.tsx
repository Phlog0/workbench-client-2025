import { memo } from "react";
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
import {
  TmpdaaCell35Kv,
  TTypeOfSwitchingDeviceCell35Kv,
} from "@/shared/react-flow/nodes/cells/cell-35kv/types";
export const Vykl10KvIcon = memo(function Vykl10KvIcon({
  className,
  value = "Нет",

  color,
  hasEmptyFields,
  hasInvalidVv,
}: {
  className?: string;
  color?: string;
  value?: TTypeOfSwitchingDeviceCell10Kv | TTypeOfSwitchingDeviceCell35Kv;
  mpdaa?: TmpdaaCell10Kv | TmpdaaCell35Kv;
  switchingDevice?: TSwitchingDeviceCell10Kv | TSwitchCell04Kv;
  typeOfMicroprocessorDevice?: IsThereDevice;
  hasEmptyFields?: boolean;
  hasInvalidVv?: boolean;
}) {
  const iconColor = hasEmptyFields ? "yellow" : color;
  return (
    <>
      <div className={className}>
        {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.no && (
          <VerticalLineIcon color={color} />
        )}
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
