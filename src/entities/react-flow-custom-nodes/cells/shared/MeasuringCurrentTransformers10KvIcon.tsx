import {
  Tt2AbcIcon,
  Tt2AcIcon,
  Tt3AbcIcon,
  Tt3AcIcon,
  Tt4AbcIcon,
  Tt4AcIcon,
} from "@/shared/assets/electrical-entities-icons/cell-10kv/tt";
import { memo, useMemo } from "react";
import { TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS } from "@/shared/react-flow/nodes/cells/cell-10kv/options";
import {
  TMeasuringCurrentTransformersDeviceCell10Kv,
  TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv,
} from "@/shared/react-flow/nodes/cells/cell-10kv/types";
import { VerticalLineIcon } from "@/shared/assets/electrical-entities-icons";
import {
  TMeasuringCurrentTransformersDeviceCell04Kv,
  TTypeOfMeasuringCurrentTransformersDeviceCell04Kv,
} from "@/shared/react-flow/nodes/cells/cell-04kv/types";

export const MeasuringCurrentTransformers10KvIcon = memo(
  function MeasuringCurrentTransformers10KvIcon({
    className,
    value = "Нет",
    transformersData,
    color,
  }: {
    className?: string;
    color?: string;
    value?:
      | TTypeOfMeasuringCurrentTransformersDeviceOptionsCell10Kv
      | TTypeOfMeasuringCurrentTransformersDeviceCell04Kv;
    transformersData?:
      | TMeasuringCurrentTransformersDeviceCell10Kv
      | TMeasuringCurrentTransformersDeviceCell04Kv;
  }) {
    const hasEmptyFields = useMemo(() => {
      if (!transformersData) return true;
      return Object.values(transformersData).every(
        item => item === "" || item === undefined || item === null
      );
    }, [transformersData]);
    const iconColor = hasEmptyFields ? "yellow" : color;
    return (
      <div className={className}>
        {/* {Object.entries(myObject).map(([key, component]) => {
        if (value === key) return { component };
      })} */}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_CELL_10KV_OPTIONS.no && (
          <VerticalLineIcon color={color} />
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
  }
);
