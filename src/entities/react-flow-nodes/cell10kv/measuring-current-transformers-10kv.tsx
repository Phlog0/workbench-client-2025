import {
  TT_0,
  TT_2_ABC,
  TT_2_AC,
  TT_3_ABC,
  TT_3_AC,
  TT_4_ABC,
  TT_4_AC,
} from "shared/assets/transformers";
import { isMeasuringCurrentTransformersDeviceOptions } from "@/shared/mock-data";
import { currentImageObject } from "@/shared/mock-data";
export function MeasuringCurrentTransformers10Kv({
  className,
  value = "нет",
}: {
  className?: string;
  value?: string;
}) {
  console.log(currentImageObject, value);
  return (
    <div>
      <img src={currentImageObject[value]} alt="" />
    </div>
  );
}
