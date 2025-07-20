import {
  Tt2AbcIcon,
  Tt2AcIcon,
  Tt3AbcIcon,
  Tt3AcIcon,
  Tt4AbcIcon,
  Tt4AcIcon,
} from "@/shared/assets/ui-icons/10kv/tt";
import { VerticalLineIcon } from "@/shared/assets/ui-icons/10kv";
import { ICON_HEIGHT } from "@/shared/constants/measures";
import { memo } from "react";
// import { currentImageObject } from "@/shared/mock-data";
import {
  TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV,
  TypeOfMeasuringCurrentTransformersDeviceOptions_10KV,
} from "@/shared/constants/10kv";

// const components = [VerticalLine, Tt2Abc];
// const myObject: { [key: string]: JSX.Element } =
//   isMeasuringCurrentTransformersDeviceOptions.reduce((acc, str, index) => {
//     acc[str] = components[index];
//     return acc;
//   }, {});

export const MeasuringCurrentTransformersIcon10Kv = memo(
  function MeasuringCurrentTransformersIcon10Kv({
    className,
    value = "Нет",
  }: {
    className?: string;
    value?: TypeOfMeasuringCurrentTransformersDeviceOptions_10KV;
  }) {
    // console.log(value);
    return (
      <div>
        {/* {Object.entries(myObject).map(([key, component]) => {
        if (value === key) return { component };
      })} */}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[0] && (
          <VerticalLineIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[1] && (
          <Tt2AcIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[2] && (
          <Tt3AcIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[3] && (
          <Tt4AcIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[4] && (
          <Tt2AbcIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[5] && (
          <Tt3AbcIcon height={ICON_HEIGHT} />
        )}
        {value === TYPE_OF_MEASURING_CURRENT_TRANSFORMERS_DEVICE_OPTIONS_10KV[6] && (
          <Tt4AbcIcon height={ICON_HEIGHT} />
        )}
      </div>
    );
  },
);
