import { TableUi } from "@/shared/ui";
import { Table } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { RefObject, useRef } from "react";
import { VirtualizedTableHead } from "./VirtualizedTableHeader";
import { VirtualizedTableBody } from "./VirtualizedTableBody";
import { TableModelApi } from "@/features/project-card/api";

type TableContainerProps = {
  table: Table<TableModelApi>;
  keyOne: string | number;
  setIsModalOpen: (value: boolean) => void;
};
export function VirtualizedTableContainer({ table, keyOne, setIsModalOpen }: TableContainerProps) {
  const visibleColumns = table.getVisibleLeafColumns();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableCellElement>({
    count: visibleColumns.length,
    estimateSize: (index) => visibleColumns[index].getSize(), //estimate width of each column for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    horizontal: true,
    overscan: 3, //how many columns to render on each side off screen each way (adjust this for performance)
  });
  const virtualColumns = columnVirtualizer.getVirtualItems();
  //different virtualization strategy for columns - instead of absolute and translateY, we add empty columns to the left and right
  let virtualPaddingLeft: number | undefined;
  let virtualPaddingRight: number | undefined;

  if (columnVirtualizer && virtualColumns?.length) {
    virtualPaddingLeft = virtualColumns[0]?.start ?? 0;
    virtualPaddingRight =
      columnVirtualizer.getTotalSize() - (virtualColumns[virtualColumns.length - 1]?.end ?? 0);
  }
  return (
    <div
      className="container"
      ref={tableContainerRef}
      style={{
        overflow: "auto", //our scrollable table container
        position: "relative", //needed for sticky header
        height: "800px", //should be a fixed height
      }}
    >
      {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
      <TableUi style={{ display: "grid" }}>
        <VirtualizedTableHead
          columnVirtualizer={columnVirtualizer}
          table={table}
          virtualPaddingLeft={virtualPaddingLeft}
          virtualPaddingRight={virtualPaddingRight}
        />
        <VirtualizedTableBody
          columnVirtualizer={columnVirtualizer}
          table={table}
          tableContainerRef={tableContainerRef as RefObject<HTMLDivElement>}
          virtualPaddingLeft={virtualPaddingLeft}
          virtualPaddingRight={virtualPaddingRight}
          keyOne={keyOne}
          setIsModalOpen={setIsModalOpen}
        />
      </TableUi>
    </div>
  );
}
