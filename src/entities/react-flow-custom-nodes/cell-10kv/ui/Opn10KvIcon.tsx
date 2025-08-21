import { OpnIcon, VykatnoyRazjemIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";
import { IsThereDevice } from "@/shared/react-flow/nodes";
import { memo } from "react";
export const Opn10KvIcon = memo(function Opn10KvIcon({
  value = "Нет",
  className,
}: {
  className?: string;
  value?: IsThereDevice;
}) {
  console.log({ OPN: value });
  return (
    <div className={className}>
      {/* <img src={VERTICAL_LINE} alt="" /> */}

      {value === "Есть" ? <OpnIcon /> : <VykatnoyRazjemIcon />}
    </div>
  );
});
