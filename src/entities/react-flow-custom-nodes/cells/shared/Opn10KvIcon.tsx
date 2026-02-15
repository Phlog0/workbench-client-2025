import { OpnIcon, VykatnoyRazjemIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";
import { IsThereDevice } from "@/shared/react-flow/nodes/shared";
import { memo } from "react";
export const Opn10KvIcon = memo(function Opn10KvIcon({
  value = "Нет",
  className,
  color,
}: {
  className?: string;
  value?: IsThereDevice;
  color?: string;
}) {
  return (
    <div className={className}>
      {/* <img src={VERTICAL_LINE} alt="" /> */}

      {value === "Есть" ? <OpnIcon color={color} /> : <VykatnoyRazjemIcon color={color} />}
    </div>
  );
});
