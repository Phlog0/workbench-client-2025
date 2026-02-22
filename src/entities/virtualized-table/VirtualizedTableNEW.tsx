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
  const folderType = useBoundStore(state => state.folderType);
  const { isLoading, isError, error, data } = useGetDictionaryData({
    query: param,
    dictionaryFolder: folderType,
  });

  const columns = useMemo(() => {
    const viewportWidth = document.documentElement.clientWidth;
    if (data?.tableColumns) {
      const columnCount = Object.entries(data?.tableColumns).length;

      return Object.entries(data?.tableColumns).map(colConfig => ({
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

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
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
    if (error.status === 404) {
      return (
        <div>
          <h2>{error.status}</h2>
          <p>Файл не найден</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{error.status}</h2>
          <p>{error.message.toString()}</p>
        </div>
      );
    }
  }

  return (
    <VirtualizedTableContainer
      setIsModalOpen={setIsModalOpen}
      keyOne={key_1}
      table={table}
    />
  );
};
