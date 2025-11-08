import { ReactNode } from "react";
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
import type { ProjectTheme } from "@/shared/appStore/slices/types";

export const ModalComponent = ({
  content,

  dialogTitle,
  triggerTitle,
  dialogDescription,
  setIsModalOpen,
  isModalOpen,
}: {
  className?: string;
  content: ReactNode;
  triggerTitle: string | ReactNode;
  dialogTitle: string;
  dialogDescription?: string;

  isOverflowContainerEnabled?: boolean;
  projectTheme?: ProjectTheme;
  isModalOpen?: boolean;
  setIsModalOpen?: (value: boolean) => void;
}) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button>{triggerTitle}</Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden max-w-screen h-screen  flex flex-col">
        <DialogHeader className="mt-1">
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && <DialogDescription>{dialogDescription}</DialogDescription>}
        </DialogHeader>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 flex flex-col border rounded-lg overflow-hidden">{content}</div>
        </div>
        <DialogFooter className="sticky bottom-0 bg-slate-500 pb-4 shrink-0">
          <DialogClose asChild>
            <Button>Отмена</Button>
          </DialogClose>
        </DialogFooter>
        {/* <DialogClose /> */}
      </DialogContent>
    </Dialog>
  );
};
