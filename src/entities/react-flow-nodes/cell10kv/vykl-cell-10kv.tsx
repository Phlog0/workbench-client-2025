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
  VerticalLine,
} from "@/shared/assets/ui";
import { HEIGHT } from "./measures";
import { memo } from "react";
export const VyklCell10kv = memo(function VyklCell10kv({
  className,
  value = "нет",
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div>
      {value === "нет" && <VerticalLine height={HEIGHT} />}
      {value === "вв" && <SwithcerVvIcon height={HEIGHT} />}
      {value === "вн" && <SwithcerVn1Icon height={HEIGHT} />}
      {value === "р" && <SwithcerRIcon height={HEIGHT} />}
    </div>
  );
});
