import { TableHeaderUi } from "@/shared/ui";
import { Table } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";
import { VirtualizedTableHeadRow } from "./VirtualizedTableHeadRow";
import { TableModelApi } from "@/features/project-card/api";

type TableHeadProps = {
  columnVirtualizer: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
  table: Table<TableModelApi>;
  virtualPaddingLeft: number | undefined;
  virtualPaddingRight: number | undefined;
};

export function VirtualizedTableHead({
  columnVirtualizer,
  table,
  virtualPaddingLeft,
  virtualPaddingRight,
}: TableHeadProps) {
  return (
    <TableHeaderUi className="grid sticky z-10 top-0 theme-bg theme-text shadow-2xl">
      {table.getHeaderGroups().map((headerGroup) => (
        <VirtualizedTableHeadRow
          columnVirtualizer={columnVirtualizer}
          headerGroup={headerGroup}
          key={headerGroup.id}
          virtualPaddingLeft={virtualPaddingLeft}
          virtualPaddingRight={virtualPaddingRight}
        />
      ))}
    </TableHeaderUi>
  );
}
