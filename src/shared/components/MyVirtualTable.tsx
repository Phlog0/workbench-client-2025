import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getTableData } from "../../entities/lib";
import { Spinner } from "shared/ui";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once
import TableHeaderRenderer from "./TableHeaderRenderer";
type HandleClick = {
  rowData: unknown;
  index: number;
};
export const MyVirtualTable = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => getTableData("tn"),
  });
  if (isPending && data) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;
  const [widths, setWidths] = useState<null | number[]>(null);
  const [maxDataKey, setMaxDataKey] = useState(0);
  useEffect(() => {
    if (data) {
      const quantity = Object.values(data.body[0]).length;
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
