import { ReactNode, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shared/ui";
import { cn } from "../../lib/cn";
import type { ProjectTheme } from "../../appStore/slices/types";
import { cva } from "class-variance-authority";

const modalVariantsSize = {
  full: {
    dialogContent: "h-screen max-w-screen",
    dialogDescription: "h-[87vh]",
  },
};
export const ModalComponent = ({
  content,

  dialogTitle,
  triggerTitle,
  dialogDescription,
}: {
  className?: string;
  content: ReactNode;
  triggerTitle: string | ReactNode;
  dialogTitle: string;
  dialogDescription?: string;

  isOverflowContainerEnabled?: boolean;
  projectTheme?: ProjectTheme;
  openProp?: boolean;
}) => {
  const modalComponentVariants = cva({
    variants: {
      size: {
        default: "",
        full: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  // console.log({ openProp });
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger
        asChild
        className={cn(
          "flex items-center justify-center",

          className,
        )}
      > */}
      <DialogTrigger asChild>
        <Button>{triggerTitle}</Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden max-w-screen max-h-screen overflow-y-scroll">
        {/* <DialogContent
        className={cn("h-screen max-w-screen overflow-hidden", {
          "": projectTheme === "light",
          "bg-slate-800": projectTheme === "dark",
        })}
      > */}
        <DialogHeader className="">
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && <DialogDescription>{dialogDescription}</DialogDescription>}
        </DialogHeader>
        {/* <div
          className={cn("h-[87vh] container-save-scroll", {
            "overflow-auto": isOverflowContainerEnabled,
          })}
        ></div> */}
        <div className=" max-h-full grow">{content}</div>
        <DialogFooter className="sticky bottom-0 bg-slate-500 pb-4">
          <DialogClose asChild>
            <Button>Отмена</Button>
          </DialogClose>
        </DialogFooter>
        {/* <DialogClose /> */}
      </DialogContent>

      {/* <DialogFooter>aaa</DialogFooter> */}
    </Dialog>
  );
};
