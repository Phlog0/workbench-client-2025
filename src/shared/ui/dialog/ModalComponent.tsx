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

      <DialogContent className="overflow-hidden max-w-screen min-h-screen flex flex-col theme-bg theme-text">
        <DialogHeader className="mt-1 theme-bg theme-text">
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && <DialogDescription>{dialogDescription}</DialogDescription>}
        </DialogHeader>

        {/* <div className="flex-1 overflow-hidden outline-red-600 outline-2">
          <div className="flex-1 flex-col border rounded-lg">{content}</div>
        </div> */}
        <div
          id="tableContainer"
          className="outline-slate-600 outline-2 flex-1 border rounded-lg overflow-hidden"
        >
          {content}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Отмена</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
