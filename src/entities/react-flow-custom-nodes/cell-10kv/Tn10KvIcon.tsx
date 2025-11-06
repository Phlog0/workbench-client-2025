import { TnIcon } from "@/shared/assets/electrical-entities-icons/cell-10kv";
import { memo } from "react";
export const Tn10KvIcon = memo(function Tn10KvIcon({
  className,
}: {
  className?: string;
  value?: string;
}) {
  return <TnIcon className={className} />;
});
