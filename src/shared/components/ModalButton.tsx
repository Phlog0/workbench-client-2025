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
export const ModalButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="px-2 py-1 bg-slate-500 text-white">
         Открыть
          {/* aaa */}
        </DialogTrigger>
        <DialogContent className="max-w-full h-screen">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription className="outline-dashed h-full">
              <MyVirtualTable />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
