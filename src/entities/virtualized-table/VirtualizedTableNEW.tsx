import { Spinner } from "shared/ui/spinners";

import { TableBodyApi, useGetDictionaryData } from "@/features/project-card/api";

import { useBoundStore } from "@/shared/appStore";
import { useShallow } from "zustand/shallow";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui";
import {
  CellContext,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { cn } from "@/shared/lib";
import { ColumnFilter } from "./Filters";

type VirtualizedTableProps = {
  param?: string;
  key_1: string; // ТАКОЙ, ЧТО ЯВЛЯЕТСЯ КЛЮЧОМ ДЛЯ ОБЪЕКТОВ switching-device, opn, ...

  isModalOpen?: boolean;
  setIsModalOpen: (value: boolean) => void;
};
export const VirtualizedTableNEW = ({ param, key_1, setIsModalOpen }: VirtualizedTableProps) => {
  const selectReadyMadeSolution = useBoundStore((state) => state.selectReadyMadeSolution);

  const selectedNodeIds = useBoundStore(useShallow((state) => state.selectedNodeIds));
  const selectedNodeId = selectedNodeIds[0];

  const folderType = useBoundStore((state) => state.folderType);
  const { isLoading, isError, error, data } = useGetDictionaryData({
    query: param,
    dictionaryFolder: folderType,
  });

  const columns = useMemo(() => {
    const viewportWidth = document.documentElement.clientWidth;
    if (data?.tableColumns) {
      const columnCount = Object.entries(data?.tableColumns).length;
      console.log(viewportWidth / columnCount);
      return Object.entries(data?.tableColumns).map((colConfig) => ({
        accessorKey: colConfig[0],
        header: colConfig[1],
        size: Math.max(viewportWidth / columnCount, 160),
        enableColumnFilter: true,
        cell: (info: CellContext<Record<string, string | number>, string>) => info.getValue(),
      }));
    }
    return [];
  }, [data?.tableColumns]);

  console.log({ data });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  // const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // https://tanstack.com/table/latest/docs/framework/react/examples/filters?panel=sandbox
  const table = useReactTable({
    data: data?.tableBody ?? [],
    columns: columns ?? [],
    getCoreRowModel: getCoreRowModel(),

    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
    state: {
      rowSelection,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading)
    return (
      <div className="absolute z-10 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
        <Spinner />
      </div>
    );
  if (isError) {
    if (error?.apiError?.status === 404) {
      return <span>Error: {error?.apiError?.details}</span>;
    }

    return (
      <span>
        {error.message}: {error.apiError.status}
      </span>
    );
  }
  // </TableHead>
  const handleClick = (row: Row<TableBodyApi>) => {
    row.getToggleSelectedHandler();
    const currnetRowData = table.getRow(row.id).original;
    selectReadyMadeSolution({
      nodeId: selectedNodeId,
      keyOne: key_1, // ТАКОЙ, ЧТО ЯВЛЯЕТСЯ КЛЮЧОМ ДЛЯ ОБЪЕКТОВ switching-device, opn, ...
      values: currnetRowData,
    });
    setIsModalOpen(false);
  };

  return (
    <>
      {data?.tableBody && data.tableColumns && (
        <Table
          className="border relative"
          style={{
            width: table.getCenterTotalSize(),
          }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeader key={headerGroup.id} className="sticky top-0 overflow-y-scroll ">
              <tr className="border-4 shadow-2xs bg-slate-100">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className={cn(
                      "relative select-none ",

                      {
                        "cursor-pointer select-none grow": header.column.getCanSort(),
                      },
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.column.getCanFilter() ? (
                      <div className="h-[49%] w-full">
                        <ColumnFilter column={header.column} />
                      </div>
                    ) : null}
                    <div className=" min-h-8 h-[50%] overflow-y-auto w-full">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                    <div
                      className={cn(
                        "absolute top-0 right-0 h-full bg-blue-500 w-4 cursor-e-resize z-100",
                        {
                          "bg-blue-800": header.column.getIsResizing(),
                        },
                      )}
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
                  </TableHead>
                ))}
              </tr>
            </TableHeader>
          ))}
          <TableBody className="flex-1">
            {table.getRowModel().rows.map((row) => (
              <TableRow
                style={{ minHeight: "500px" }}
                key={row.id}
                className={cn(
                  "cursor-pointer h-[100px]",
                  `${row.getIsSelected() ? "bg-blue-400" : null}`,
                  "hover:bg-blue-200",
                )}
                onClick={() => handleClick(row)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="h-[100px]" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};
