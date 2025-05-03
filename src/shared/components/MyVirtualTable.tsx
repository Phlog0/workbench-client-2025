import React, { useEffect, useState } from "react";
import { Spinner } from "shared/ui";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import TableHeaderRenderer from "./TableHeaderRenderer";
import { useGetProjectData } from "../lib/api/use-get-project-data";
import useStore from "../appStore/store";
import { CustomRowRenderer } from "./custom-row-renderer";
type HandleClick = {
  rowData: (string | number)[];
  index: number;
};

type MyVirtualTableProps = {
  param?: string;
};
export const MyVirtualTable: React.FC<MyVirtualTableProps> = ({
  param = "",
}) => {
  const selectReadyMadeSolution = useStore(
    (state) => state.selectReadyMadeSolution
  );

  const selectedNodeIds = useStore((state) => state.selectedNodeIds);
  const selectedNodeId = selectedNodeIds[0];
  const { isLoading, isError, error, data } = useGetProjectData({ q: param });

  const [widths, setWidths] = useState<null | number[]>(null);
  const [maxDataKey, setMaxDataKey] = useState(0);
  useEffect(() => {
    if (data) {
      const quantity = Object.values(data?.body[0]).length;
      setMaxDataKey(quantity - 1);
      setWidths(Array(quantity).fill(1 / quantity));
    }
  }, [data]);
  const handleClick = ({ rowData, index }: HandleClick) => {
    selectReadyMadeSolution({
      nodeId: selectedNodeId,
      keyOne: param,
      value: data?.body[index],
    });
  };
  console.log(data);
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
              rowRenderer={CustomRowRenderer}
            >
              {Object.values(data?.tableHeaders).map((col, index) => (
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
