import {
  Tt2Abc,
  Tt2Ac,
  Tt3Abc,
  Tt3Ac,
  Tt4Abc,
  Tt4Ac,
  VerticalLine,
} from "@/shared/assets/ui";
import { HEIGHT } from "./measures";
import { memo } from "react";
// import { currentImageObject } from "@/shared/mock-data";
const isMeasuringCurrentTransformersDeviceOptions: string[] = [
  "нет",
  "2 Трансформатора тока 2 обмотки",
  "2 Трансформатора тока 3 обмотки",
  "2 Трансформатора тока 4 обмотки",
  "3 Трансформатора тока 2 обмотки",
  "3 Трансформатора тока 3 обмотки",
  "3 Трансформатора тока 4 обмотки",
];
// const components = [VerticalLine, Tt2Abc];
// const myObject: { [key: string]: JSX.Element } =
//   isMeasuringCurrentTransformersDeviceOptions.reduce((acc, str, index) => {
//     acc[str] = components[index];
//     return acc;
//   }, {});

export const MeasuringCurrentTransformers10Kv = memo(
  function MeasuringCurrentTransformers10Kv({
    className,
    value = "нет",
  }: {
    className?: string;
    value?: string;
  }) {
    console.log(value);
    return (
      <div>
        {/* {Object.entries(myObject).map(([key, component]) => {
        if (value === key) return { component };
      })} */}
        {value === isMeasuringCurrentTransformersDeviceOptions[0] && (
          <VerticalLine height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[1] && (
          <Tt2Ac height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[2] && (
          <Tt3Ac height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[3] && (
          <Tt4Ac height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[4] && (
          <Tt2Abc height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[5] && (
          <Tt3Abc height={HEIGHT} />
        )}
        {value === isMeasuringCurrentTransformersDeviceOptions[6] && (
          <Tt4Abc height={HEIGHT} />
        )}
      </div>
    );
  }
);
