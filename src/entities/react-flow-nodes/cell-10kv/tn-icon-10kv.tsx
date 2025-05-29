import { TnIcon } from "@/shared/assets/ui";
import { memo } from "react";
import { ICON_HEIGHT } from "@/shared/constants";
export const TnIcon10Kv = memo(function TnIcon10Kv({
  className,
}: {
  className?: string;
  value?: string;
}) {
  return (
    <div className={className}>
      <TnIcon height={ICON_HEIGHT} />
    </div>
  );
});
