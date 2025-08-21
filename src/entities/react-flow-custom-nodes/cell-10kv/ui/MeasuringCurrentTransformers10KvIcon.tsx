import {
  Tt2AbcIcon,
  Tt2AcIcon,
  Tt3AbcIcon,
  Tt3AcIcon,
  Tt4AbcIcon,
  Tt4AcIcon,
} from "@/shared/assets/electrical-entities-icons/cell-10kv/tt";
import { memo, useMemo, useState } from "react";
// import { currentImageObject } from "@/shared/mock-data";
import { TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cell-10kv/options";
import {
  TMeasuringCurrentTransformersDeviceCell10Kv,
  TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv,
} from "@/shared/react-flow/nodes/cell-10kv/types";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";

// const components = [VerticalLine, Tt2Abc];
// const myObject: { [key: string]: JSX.Element } =
//   isMeasuringCurrentTransformersDeviceOptions.reduce((acc, str, index) => {
//     acc[str] = components[index];
//     return acc;
//   }, {});

export const MeasuringCurrentTransformers10KvIcon = memo(
  function MeasuringCurrentTransformers10KvIcon({
    className,
    value = "Нет",
    transformersData,
  }: {
    className?: string;
    value?: TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv;
    transformersData?: TMeasuringCurrentTransformersDeviceCell10Kv;
  }) {
    // console.log(value);

    const [isWarning, setIsWarning] = useState(false);
    const hasEmptyFields = useMemo(() => {
      if (!transformersData) return true;
      return Object.values(transformersData).every(
        (item) => item === "" || item === undefined || item === null,
      );
    }, [transformersData]);
    const iconColor = hasEmptyFields ? "yellow" : undefined;
    return (
      <div className={className}>
        {/* {Object.entries(myObject).map(([key, component]) => {
        if (value === key) return { component };
      })} */}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.no && (
          <VerticalLineIcon />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt2ac && (
          <Tt2AcIcon color={iconColor} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt3ac && (
          <Tt3AcIcon color={iconColor} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt4ac && (
          <Tt4AcIcon color={iconColor} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt2abc && (
          <Tt2AbcIcon color={iconColor} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt3abc && (
          <Tt3AbcIcon color={iconColor} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.tt4abc && (
          <Tt4AbcIcon color={iconColor} />
        )}
      </div>
    );
  },
);
