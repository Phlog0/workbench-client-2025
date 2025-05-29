import React from "react";
import Draggable from "react-draggable";
import { SortDirectionType } from "react-virtualized";
import { resizeColumn } from "./resize-column";
// import { BsArrowsCollapseVertical } from "react-icons/bs";

interface ITableHeaderRenderer {
  dataKey: string;
  label: any;
  widths: number[];
  setWidths: React.Dispatch<React.SetStateAction<number[] | null>>;
  autoSizerWidth: number;
  maxDataKey: number;
  //   columnData: any;
  //   disableSort: boolean;
  //   sortBy: string;
  //   sortDirection: SortDirectionType;
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
          onDrag={(event, { deltaX }) =>
            resizeColumn({
              dataKey,
              deltaX,
              widths,
              setWidths,
              autoSizerWidth,
            })
          }
          zIndex={999}
          position={{ x: 0 }}
        >
          <span className="z-50 cursor-col-resize absolute right-0 bg-white">|||</span>
        </Draggable>
      )}
    </div>
  );
};
