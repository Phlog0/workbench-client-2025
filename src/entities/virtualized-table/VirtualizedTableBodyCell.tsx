import { Cell, flexRender } from "@tanstack/react-table";
import { TableCellUi } from "@/shared/ui";
import { TableModelApi } from "@/features/project-card/api";

interface TableBodyCellProps {
  cell: Cell<TableModelApi, unknown>;
}

export function VirtualizedTableBodyCell({ cell }: TableBodyCellProps) {
  return (
    <TableCellUi
      key={cell.id}
      style={{
        display: "flex",
        width: cell.column.getSize(),
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCellUi>
  );
}
