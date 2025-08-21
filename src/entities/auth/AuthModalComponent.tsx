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
import { ProjectTheme } from "@/shared/appStore/slices/types";
const modalVariantsSize = {
  full: {
    dialogContent: "h-screen max-w-screen",
    dialogDescription: "h-[87vh]",
  },
};
export const AuthModalComponent = ({
  content,

  dialogTitle,
  triggerTitle,
  dialogDescription,
  open,
  setOpen,
  className,
}: {
  className?: string;
  content: ReactNode;
  triggerTitle: string | ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  projectTheme?: ProjectTheme;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [localOpen, setLocalOpen] = useState(false);

  const isOpen = open || localOpen;
  const handleOpenChange = setOpen || setLocalOpen;
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className={className}>{triggerTitle}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="h-full overflow-hidden">
            {dialogDescription}
            {/* // отредачить данные */}
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button>Отмена</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
