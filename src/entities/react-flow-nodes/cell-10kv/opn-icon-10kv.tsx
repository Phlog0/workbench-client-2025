import { OpnIcon } from "@/shared/assets/ui";
import { memo } from "react";
export const OpnIcon10Kv = memo(function OpnIcon10Kv({
  value = "нет",
  className,
}: {
  className?: string;
  value?: string;
}) {
  // console.log(value);
  return (
    <div className={className}>
      {/* <img src={VERTICAL_LINE} alt="" /> */}

      {value === "есть" && <OpnIcon height={200} strokeWidth={6} />}
    </div>
  );
});
