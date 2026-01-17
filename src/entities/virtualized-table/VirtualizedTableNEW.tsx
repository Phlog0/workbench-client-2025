import { Spinner } from "shared/ui/spinners";

import { TableModelApi, useGetDictionaryData } from "@/features/project-card/api";

import { useBoundStore } from "@/shared/appStore";

import {
  CellContext,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";

import { useMemo, useState } from "react";

import { VirtualizedTableContainer } from "./VirtualizedTableContainer";

type VirtualizedTableProps = {
  param?: string;
  key_1: string; // ТАКОЙ, ЧТО ЯВЛЯЕТСЯ КЛЮЧОМ ДЛЯ ОБЪЕКТОВ switching-device, opn, ...

  isModalOpen?: boolean;
  setIsModalOpen: (value: boolean) => void;
};
export const VirtualizedTableNEW = ({ param, key_1, setIsModalOpen }: VirtualizedTableProps) => {
  const folderType = useBoundStore((state) => state.folderType);
  const { isLoading, isError, error, data } = useGetDictionaryData({
    query: param,
    dictionaryFolder: folderType,
  });

  const columns = useMemo(() => {
    const viewportWidth = document.documentElement.clientWidth;
    if (data?.tableColumns) {
      const columnCount = Object.entries(data?.tableColumns).length;

      return Object.entries(data?.tableColumns).map((colConfig) => ({
        accessorKey: colConfig[0],
        header: colConfig[1],
        size: Math.max(viewportWidth / columnCount, 160),
        enableColumnFilter: true,
        cell: (info: CellContext<TableModelApi, string>) => info.getValue(),
        minSize: 120,
      }));
    }

    return [];
  }, [data?.tableColumns]);

  // const tableBody = useMemo(() => data?.tableBody, [data?.tableBody]);
  // console.log({ data });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  // const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  console.log(data);
  const table = useReactTable({
    data: data?.tableBody ?? [],
    // data: data?.tableBody ?? [],
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
    return (
      <div>
        <h2>{error.statusCode}</h2>
        <p>{error.message.toString()}</p>
      </div>
    );
  }

  return <VirtualizedTableContainer setIsModalOpen={setIsModalOpen} keyOne={key_1} table={table} />;
};

// const { rows } = table.getRowModel();
//   const parentRef = useRef<HTMLDivElement>(null);
//   const virtualizer = useVirtualizer({
//     count: rows.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 100,
//     overscan: 10,
//   });

//  {data?.tableBody && data.tableColumns && (
//         <div ref={parentRef} className="overflow-auto bg-blue-900">
//           <div style={{ height: `${virtualizer.getTotalSize()}px` }} className="relative">
//             <Table
//               className="border bg-red-300 "
//               style={{
//                 width: table.getCenterTotalSize(),
//               }}
//             >
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <TableHeader key={headerGroup.id} className="sticky top-15 z-10 overflow-y-scroll">
//                   <tr className="border-4 shadow-2xs bg-slate-100">
//                     {headerGroup.headers.map((header) => (
//                       <TableHead
//                         key={header.id}
//                         style={{ width: header.getSize() }}
//                         className={cn(
//                           "relative select-none ",

//                           {
//                             "cursor-pointer select-none grow": header.column.getCanSort(),
//                           },
//                         )}
//                         onClick={header.column.getToggleSortingHandler()}
//                       >
//                         {header.column.getCanFilter() ? (
//                           <div className="h-[49%] w-full">
//                             <ColumnFilter column={header.column} />
//                           </div>
//                         ) : null}
//                         <div className=" min-h-8 h-[50%] overflow-y-auto w-full">
//                           {flexRender(header.column.columnDef.header, header.getContext())}
//                           {{
//                             asc: " 🔼",
//                             desc: " 🔽",
//                           }[header.column.getIsSorted() as string] ?? null}
//                         </div>
//                         <div
//                           className={cn(
//                             "absolute top-0 right-0 h-full bg-blue-500 w-4 cursor-e-resize z-100",
//                             {
//                               "bg-blue-800": header.column.getIsResizing(),
//                             },
//                           )}
//                           onMouseDown={(e) => {
//                             e.stopPropagation();
//                             header.getResizeHandler()(e);
//                           }}
//                           onClick={(e) => e.stopPropagation()}
//                           onTouchStart={(e) => {
//                             e.stopPropagation();
//                             header.getResizeHandler()(e);
//                           }}
//                         />
//                       </TableHead>
//                     ))}
//                   </tr>
//                 </TableHeader>
//               ))}
//               <TableBody className="flex-1">
//                 {virtualizer.getVirtualItems().map((virtualRow, index) => {
//                   const row = rows[virtualRow.index];
//                   return (
//                     <TableRow
//                       key={row.id}
//                       className={cn(
//                         "cursor-pointer",
//                         `${row.getIsSelected() ? "bg-blue-400" : null}`,
//                         "hover:bg-blue-200",
//                       )}
//                       style={{
//                         height: `${virtualRow.size}px`,
//                         transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
//                       }}
//                       onClick={() => handleClick(row)}
//                     >
//                       {row.getVisibleCells().map((cell) => (
//                         <TableCell className="" key={cell.id}>
//                           {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>{" "}
//             </Table>
//           </div>
//         </div>
//       )}
