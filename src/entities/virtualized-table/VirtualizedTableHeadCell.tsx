import { flexRender, Header } from "@tanstack/react-table";
import { TableHeadUi } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { TableModelApi } from "@/features/project-card/api";
import { ColumnFilter } from "./Filters";

type TableHeadCellProps = {
  header: Header<TableModelApi, unknown>;
};

export function VirtualizedTableHeadCell({ header }: TableHeadCellProps) {
  return (
    <TableHeadUi
      key={header.id}
      className="relative flex flex-col overflow-auto h-full"
      style={{
        width: header.getSize(),
      }}
    >
      <div className="">
        <ColumnFilter column={header.column} />
      </div>
      <div
        className={cn("min-h-20", header.column.getCanSort() ? "cursor-pointer select-none" : "")}
        onClick={header.column.getToggleSortingHandler()}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        {{
          asc: " 🔼",
          desc: " 🔽",
        }[header.column.getIsSorted() as string] ?? null}
      </div>
      <div
        className={cn("absolute top-0 right-0 h-full bg-blue-500 w-4 cursor-e-resize z-100", {
          "bg-blue-800": header.column.getIsResizing(),
        })}
        onMouseDown={(e) => {
          e.stopPropagation();
          header.getResizeHandler()(e);
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          e.stopPropagation();
          header.getResizeHandler()(e);
        }}
      />
    </TableHeadUi>
  );
}
