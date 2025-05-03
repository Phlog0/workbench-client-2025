import { OPN, VERTICAL_LINE } from "@/shared/assets/other";
import { OpnIcon, VerticalLine } from "@/shared/assets/ui";
import { memo } from "react";
export const OpnCell10Kv = memo(function OpnCell10Kv({
  value = "нет",
  className,
}: {
  className?: string;
  value?: string;
}) {
  console.log(value);``
  return (
    <div className={className}>
      {/* <img src={VERTICAL_LINE} alt="" /> */}

      {value === "есть" && <OpnIcon height={200} strokeWidth={6} />}
    </div>
  );
});
