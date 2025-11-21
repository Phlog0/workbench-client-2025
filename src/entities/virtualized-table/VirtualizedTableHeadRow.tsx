import { HeaderGroup } from "@tanstack/react-table";
import { Virtualizer } from "@tanstack/react-virtual";

import { TableHeadUi, TableRowUi } from "@/shared/ui";
import { VirtualizedTableHeadCell } from "./VirtualizedTableHeadCell";
import { TableModelApi } from "@/features/project-card/api";

interface TableHeadRowProps {
  columnVirtualizer: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
  headerGroup: HeaderGroup<TableModelApi>;
  virtualPaddingLeft: number | undefined;
  virtualPaddingRight: number | undefined;
}

export function VirtualizedTableHeadRow({
  columnVirtualizer,
  headerGroup,
  virtualPaddingLeft,
  virtualPaddingRight,
}: TableHeadRowProps) {
  const virtualColumns = columnVirtualizer.getVirtualItems();
  return (
    <TableRowUi key={headerGroup.id} className="flex w-full">
      {virtualPaddingLeft ? (
        //fake empty column to the left for virtualization scroll padding
        <TableHeadUi className="flex" style={{ width: virtualPaddingLeft }} />
      ) : null}
      {virtualColumns.map((virtualColumn) => {
        const header = headerGroup.headers[virtualColumn.index];
        return <VirtualizedTableHeadCell key={header.id} header={header} />;
      })}
      {virtualPaddingRight ? (
        //fake empty column to the right for virtualization scroll padding
        <TableHeadUi className="flex" style={{ width: virtualPaddingRight }} />
      ) : null}
    </TableRowUi>
  );
}
