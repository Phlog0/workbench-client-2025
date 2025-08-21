import { Tooltip } from "@/shared/ui";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ReactElement } from "react";
type ToolTipWrapperProps = {
  tooltipTrigger: ReactElement;
  tooltipContent: ReactElement;
};
export function ToolTipWrapper({ tooltipContent, tooltipTrigger }: ToolTipWrapperProps) {
  return (
    <Tooltip>
      <TooltipTrigger>{tooltipTrigger}</TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
}
