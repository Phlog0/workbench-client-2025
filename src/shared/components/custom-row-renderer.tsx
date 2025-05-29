import {
  defaultRowRenderer as DefaultRowRenderer,
  TableRowProps,
} from "react-virtualized/dist/es/Table";
import { cn } from "../lib/react-std";
import { DialogClose } from "../ui";
export function CustomRowRenderer(props: TableRowProps) {
  // console.log({ index: props.index, data: props.rowData });
  return (
    <DialogClose>
      <DefaultRowRenderer
        {...props}
        className={cn(
          "flex flex-0 flex-shrink-0 basis-0 items-center cursor-pointer hover:bg-slate-300 transition-all"
        )}
        // disabled
      ></DefaultRowRenderer>
    </DialogClose>
  );
}
