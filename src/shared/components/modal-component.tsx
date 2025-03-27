import { ReactNode } from "react";
import {
  Button,
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
export const ModalComponent = ({
  content,
  className,
  dialogTitle,
  triggerTitle,
}: {
  className?: string;
  content: ReactNode;
  triggerTitle: string | ReactNode;
  dialogTitle: string;
}) => {
  const projectTheme = useStore(getThemeSelector);

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
        className={cn("max-w-full h-screen", {
          "": projectTheme === "light",
          "bg-slate-800": projectTheme === "dark",
        })}
      >
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="h-full">{content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
