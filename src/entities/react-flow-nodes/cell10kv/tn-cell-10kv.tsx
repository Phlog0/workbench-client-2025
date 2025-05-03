import { TnIcon } from "@/shared/assets/ui";
import { memo } from "react";
import { HEIGHT } from "./measures";
export const TnCell10kv = memo(function TnCell10kv({
  className,
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div className={className}>
      <TnIcon height={HEIGHT} />
    </div>
  );
});
