// import {
//   VYKL_R,
//   VYKL_VN_1,
//   VYKL_VN_2,
//   VYKL_VN_3,
//   VYKL_VV,
//   NO_VYKL,
// } from "shared/assets/vykl";
import { VerticalLineIcon } from "@/shared/assets/ui-icons/10kv";
import { ICON_HEIGHT } from "@/shared/constants/measures";
import { memo } from "react";
import { TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV } from "@/shared/constants/10kv";
import {
  SwitcherRIcon,
  SwitcherVn1Icon,
  SwitcherVvIcon,
} from "@/shared/assets/ui-icons/10kv/switchers";
export const VyklIcon10Kv = memo(function VyklIcon10Kv({
  className,
  value = "Нет",
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div>
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.no && (
        <VerticalLineIcon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vv && (
        <SwitcherVvIcon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.vn && (
        <SwitcherVn1Icon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV.r && <SwitcherRIcon height={ICON_HEIGHT} />}
    </div>
  );
});
