import React from "react";
import Draggable from "react-draggable";
import { resizeColumn } from "./resizeColumn";

interface ITableHeaderRenderer {
  dataKey: string;
  label: string;
  widths: number[];
  setWidths: React.Dispatch<React.SetStateAction<number[] | null>>;
  autoSizerWidth: number;
  maxDataKey: number;
}

export const VirtualizedTableHeaderRenderer = ({
  dataKey,
  label,
  widths,
  setWidths,
  autoSizerWidth,
  maxDataKey,
}: //   columnData,
//   disableSort,
//   sortBy,
//   sortDirection,
ITableHeaderRenderer) => {
  // console.log(+dataKey, quantity - 1);
  return (
    <div
      key={dataKey}
      className="flex justify-between w-full bg-white relative"
      // style={{ width: `${autoSizerWidth}px` }}
    >
      <div className="overflow-hidden text-ellipsis">{label}</div>
      {maxDataKey !== +dataKey && (
        <Draggable
          axis="x"
          //   defaultClassName={styles.dragHandle}
          //   defaultClassNameDragging={styles.dragHandleActive}
          onDrag={(_, { deltaX }) =>
            resizeColumn({
              dataKey,
              deltaX,
              widths,
              setWidths,
              autoSizerWidth,
            })
          }
          zIndex={999}
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          position={{ x: 0 }}
        >
          <span className="z-5 cursor-col-resize absolute right-0 bg-white">|||</span>
        </Draggable>
      )}
    </div>
  );
};
