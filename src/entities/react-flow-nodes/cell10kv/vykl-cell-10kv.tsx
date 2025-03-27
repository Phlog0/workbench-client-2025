import {
  VYKL_R,
  VYKL_VN_1,
  VYKL_VN_2,
  VYKL_VN_3,
  VYKL_VV,
  NO_VYKL,
} from "shared/assets/vykl";

export function VyklCell10kv({
  className,
  value = "нет",
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div>
      {value === "нет" && <img src={NO_VYKL} />}
      {value === "вв" && <img src={VYKL_VV} />}
      {value === "вн" && <img src={VYKL_VN_1} />}
      {value === "р" && <img src={VYKL_R} />}
    </div>
  );
}
