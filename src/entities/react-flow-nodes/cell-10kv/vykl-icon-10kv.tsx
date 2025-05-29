// import {
//   VYKL_R,
//   VYKL_VN_1,
//   VYKL_VN_2,
//   VYKL_VN_3,
//   VYKL_VV,
//   NO_VYKL,
// } from "shared/assets/vykl";
import {
  SwithcerRIcon,
  SwithcerVvIcon,
  SwithcerVn1Icon,
  SwithcerVn2Icon,
  SwithcerVn3Icon,
  VerticalLineIcon,
} from "@/shared/assets/ui";
import { ICON_HEIGHT } from "@/shared/constants";
import { memo } from "react";
import { TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV } from "@/shared/constants";
export const VyklIcon10Kv = memo(function VyklIcon10Kv({
  className,
  value = "нет",
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div>
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[0] && (
        <VerticalLineIcon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[1] && (
        <SwithcerVvIcon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[2] && (
        <SwithcerVn1Icon height={ICON_HEIGHT} />
      )}
      {value === TYPE_OF_SWITCHING_DEVICE_OPTIONS_10KV[3] && <SwithcerRIcon height={ICON_HEIGHT} />}
    </div>
  );
});
