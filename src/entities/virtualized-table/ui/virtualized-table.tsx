import React, { useEffect, useState } from "react";
import { Spinner } from "shared/ui";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import { VirtualizedTableHeaderRenderer } from "./virtualized-table-header-renderer";
import { useGetDictionaryData } from "@/features/project-card/api";

import { CustomRowRenderer } from "./custom-row-renderer";
import { useBoundStore } from "@/shared/appStore";

type HandleClick = {
  rowData: (string | number)[];
  index: number;
};

type VirtualizedTableProps = {
  param?: string;
  key_1: string; // ТАКОЙ, ЧТО ЯВЛЯЕТСЯ КЛЮЧОМ ДЛЯ ОБЪЕКТОВ switching-device, opn, ...
};
export const VirtualizedTable: React.FC<VirtualizedTableProps> = ({ param, key_1 }) => {
  const selectReadyMadeSolution = useBoundStore((state) => state.selectReadyMadeSolution);

  const selectedNodeIds = useBoundStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0];
  const { isLoading, isError, error, data } = useGetDictionaryData({ query: param });

  const [widths, setWidths] = useState<null | number[]>(null);
  const [maxDataKey, setMaxDataKey] = useState(0);
  useEffect(() => {
    if (data) {
      const quantity = Object.values(data?.tableBody[0]).length;
      setMaxDataKey(quantity - 1);
      setWidths(Array(quantity).fill(1 / quantity));
    }
  }, [data]);
  const handleClick = ({ rowData, index }: HandleClick) => {
    selectReadyMadeSolution({
      nodeId: selectedNodeId,
      keyOne: key_1, // ТАКОЙ, ЧТО ЯВЛЯЕТСЯ КЛЮЧОМ ДЛЯ ОБЪЕКТОВ switching-device, opn, ...
      value: data?.tableBody[index],
    });
  };
  if (isLoading)
    return (
      <div className="absolute z-10 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
        <Spinner />
      </div>
    );
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    data &&
    widths && (
      <div className="h-[100vh]">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <Table
                width={width}
                height={height}
                headerHeight={40}
                rowHeight={30}
                rowCount={data?.tableBody?.length}
                rowGetter={({ index }) => Object.values(data?.tableBody[index])}
                onRowClick={handleClick}
                rowRenderer={CustomRowRenderer}
              >
                {Object.values(data?.tableHeaders).map((col, index) => (
                  <Column
                    // key={index}
                    label={`${col}`}
                    dataKey={`${index}`}
                    width={widths?.[index] * width}
                    headerRenderer={() =>
                      VirtualizedTableHeaderRenderer({
                        widths: widths,
                        autoSizerWidth: width,
                        setWidths: setWidths,
                        dataKey: `${index}`,
                        label: col,
                        maxDataKey: maxDataKey,
                      })
                    }
                  />
                ))}
              </Table>
            );
          }}
        </AutoSizer>
      </div>
    )
  );
};
