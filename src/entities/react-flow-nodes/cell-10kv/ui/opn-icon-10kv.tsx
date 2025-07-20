import { IsThereDevice } from "@/shared/types/react-flow-node-types";
import { OpnIcon } from "@/shared/assets/ui-icons/10kv";
import { memo } from "react";
export const OpnIcon10Kv = memo(function OpnIcon10Kv({
  value = "Нет",
  className,
}: {
  className?: string;
  value?: IsThereDevice;
}) {
  // console.log(value);
  return (
    <div className={className}>
      {/* <img src={VERTICAL_LINE} alt="" /> */}

      {value === "Есть" && <OpnIcon height={200} strokeWidth={6} />}
    </div>
  );
});
