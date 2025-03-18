import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Spinner } from "shared/ui";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import TableHeaderRenderer from "./TableHeaderRenderer";
import { getTableData } from "../lib/api/api-instacne";
type HandleClick = {
  rowData: unknown;
  index: number;
};

interface CustomError extends Error {
  message: string;
}

type MyVirtualTableProps = {
  param?: string;
};
export const MyVirtualTable: React.FC<MyVirtualTableProps> = ({
  param = "",
}) => {
  const { isPending, isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => await getTableData(param),
  });
  // console.log(isError, error, data);

  const [widths, setWidths] = useState<null | number[]>(null);
  const [maxDataKey, setMaxDataKey] = useState(0);
  useEffect(() => {
    if (data) {
      const quantity = Object.values(data?.body[0]).length;
      setMaxDataKey(quantity - 1);
      setWidths(Array(quantity).fill(1 / quantity));
    }
  }, [data]);
  const handleClick = async ({ rowData, index }: HandleClick) => {
    console.log(rowData);
    // await selectSolution({
    //   electricalPanelId: currentElectricalPanelId,
    //   prop: prop,
    //   data: data.body[index],
    // });
    // onClose();
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
      <AutoSizer>
        {({ height, width }) => {
          return (
            <Table
              width={width}
              height={height}
              headerHeight={40}
              rowHeight={30}
              rowCount={data?.body?.length}
              rowGetter={({ index }) => Object.values(data?.body[index])}
              onRowClick={handleClick}
            >
              {Object.values(data?.headers).map((col, index) => (
                <Column
                  label={`${col}`}
                  dataKey={`${index}`}
                  width={widths?.[index] * width}
                  headerRenderer={() =>
                    TableHeaderRenderer({
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
    )
  );
};
