import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shared/ui";
import { MyVirtualTable } from "./MyVirtualTable";
import { cn } from "../lib/react-std";
export const ModalButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="px-2 py-1 bg-slate-500 text-white">
          Открыть
        </DialogTrigger>
        <DialogContent className={cn("max-w-full h-screen")}>
          <DialogHeader>
            <DialogTitle>Траснформаторы напряжения</DialogTitle>
            <DialogDescription className="outline-dashed h-full">
              <MyVirtualTable />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
