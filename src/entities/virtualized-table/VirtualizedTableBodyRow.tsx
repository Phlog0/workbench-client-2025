// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";

import { Row, Table } from "@tanstack/react-table";
import { TableRowUi } from "@/shared/ui";
import { VirtualizedTableBodyCell } from "./VirtualizedTableBodyCell";
import { cn } from "@/shared/lib";
import { TableModelApi } from "@/features/project-card/api/use-get-dictionary-data";
import { useBoundStore } from "@/shared/appStore";
import { useShallow } from "zustand/shallow";

type TableBodyRowProps = {
  columnVirtualizer: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
  row: Row<TableModelApi>;
  rowVirtualizer: Virtualizer<HTMLDivElement, HTMLTableRowElement>;
  virtualPaddingLeft: number | undefined;
  virtualPaddingRight: number | undefined;
  virtualRow: VirtualItem;
  keyOne: string | number;
  setIsModalOpen: (value: boolean) => void;
  table: Table<TableModelApi>;
};

export function VirtualizedTableBodyRow({
  columnVirtualizer,
  row,
  rowVirtualizer,
  virtualPaddingLeft,
  virtualPaddingRight,
  virtualRow,
  keyOne,
  setIsModalOpen,
  table,
}: TableBodyRowProps) {
  const visibleCells = row.getVisibleCells();
  const virtualColumns = columnVirtualizer.getVirtualItems();

  const selectReadyMadeSolution = useBoundStore(state => state.selectReadyMadeSolution);
  const selectedNodeId = useBoundStore(useShallow(state => state.selectedNodeIds))[0];
  const handleClick = (row: Row<TableModelApi>) => {
    row.getToggleSelectedHandler();
    const currnetRowData = table.getRow(row.id).original;
    selectReadyMadeSolution({
      nodeId: selectedNodeId,
      keyOne: keyOne,
      values: currnetRowData,
    });
    setIsModalOpen(false);
  };

  return (
    <TableRowUi
      data-index={virtualRow.index} //needed for dynamic row height measurement
      ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
      key={row.id}
      style={{
        display: "flex",
        position: "absolute",
        transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
        width: "100%",
      }}
      className={cn(
        "cursor-pointer",
        `${row.getIsSelected() ? "bg-blue-400" : null}`,
        "hover:bg-blue-200"
      )}
      onClick={() => handleClick(row)}
    >
      {virtualPaddingLeft ? (
        //fake empty column to the left for virtualization scroll padding
        <td style={{ display: "flex", width: virtualPaddingLeft }} />
      ) : null}
      {virtualColumns.map(vc => {
        const cell = visibleCells[vc.index];
        return (
          <VirtualizedTableBodyCell
            key={cell.id}
            cell={cell}
          />
        );
      })}
      {virtualPaddingRight ? (
        //fake empty column to the right for virtualization scroll padding
        <td style={{ display: "flex", width: virtualPaddingRight }} />
      ) : null}
    </TableRowUi>
  );
}
