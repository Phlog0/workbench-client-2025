import { useVirtualizer, Virtualizer } from "@tanstack/react-virtual";
import { Row, Table } from "@tanstack/react-table";
import { TableBodyUi } from "@/shared/ui";
import { VirtualizedTableBodyRow } from "./VirtualizedTableBodyRow";
import { TableModelApi } from "@/features/project-card/api";

interface TableBodyProps {
  columnVirtualizer: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
  table: Table<TableModelApi>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  virtualPaddingLeft?: number;
  virtualPaddingRight?: number;
  keyOne: string | number;
  setIsModalOpen: (value: boolean) => void;
}

export function VirtualizedTableBody({
  columnVirtualizer,
  table,
  tableContainerRef,
  virtualPaddingLeft,
  virtualPaddingRight,
  keyOne,
  setIsModalOpen,
}: TableBodyProps) {
  const { rows } = table.getRowModel();
  //dynamic row height virtualization - alternatively you could use a simpler fixed row height strategy without the need for `measureElement`
  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" && navigator.userAgent.indexOf("Firefox") === -1
        ? (element: HTMLElement) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  return (
    <TableBodyUi
      style={{
        display: "grid",
        height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
        position: "relative", //needed for absolute positioning of rows
      }}
    >
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index] as Row<TableModelApi>;

        return (
          <VirtualizedTableBodyRow
            columnVirtualizer={columnVirtualizer}
            key={row.id}
            row={row}
            rowVirtualizer={rowVirtualizer}
            virtualPaddingLeft={virtualPaddingLeft}
            virtualPaddingRight={virtualPaddingRight}
            virtualRow={virtualRow}
            keyOne={keyOne}
            setIsModalOpen={setIsModalOpen}
            table={table}
          />
        );
      })}
    </TableBodyUi>
  );
}
