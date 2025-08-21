import { memo } from "react";
import { TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cell-10kv/options";
import {
  SwitcherRIcon,
  SwitcherVn1Icon,
  SwitcherVvIcon,
} from "@/shared/assets/electrical-entities-icons/cell-10kv/switchers";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";
export const Vykl10KvIcon = memo(function Vykl10KvIcon({
  className,
  value = "Нет",
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div className={className}>
      {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.no && <VerticalLineIcon />}
      {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vv && <SwitcherVvIcon />}
      {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.vn && <SwitcherVn1Icon />}
      {value === TYPE_OF_SWITCHING_DEVICE_CELL_10KV_OPTIONS.r && <SwitcherRIcon />}
    </div>
  );
});
