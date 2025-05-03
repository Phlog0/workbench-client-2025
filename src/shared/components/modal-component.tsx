import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shared/ui";
import { cn } from "../lib/react-std";
import useStore from "../appStore/store";
import { getThemeSelector } from "../appStore/my-selectors";
import { ProjectTheme } from "../appStore/types";
export const ModalComponent = ({
  content,
  className,
  dialogTitle,
  triggerTitle,
  projectTheme,
  isOverflowContainerEnabled = false,
}: {
  className?: string;
  content: ReactNode;
  triggerTitle: string | ReactNode;
  dialogTitle: string;

  isOverflowContainerEnabled?: boolean;
  projectTheme?: ProjectTheme;
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex items-center justify-center",

          className
        )}
      >
        {triggerTitle}
      </DialogTrigger>
      <DialogContent
        className={cn("h-screen max-w-screen overflow-hidden", {
          "": projectTheme === "light",
          "bg-slate-800": projectTheme === "dark",
        })}
      >
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="h-full overflow-hidden">
            <div
              className={cn("h-[87vh] container-save-scroll", {
                "overflow-auto": isOverflowContainerEnabled,
              })}
            >
              {content}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
