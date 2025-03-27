import { TT_0, TT_2_ABC, TT_2_AC, TT_3_ABC, TT_3_AC, TT_4_ABC, TT_4_AC } from '@/shared/assets/transformers'
export const isMeasuringCurrentTransformersDeviceOptions: string[] = ["нет", "2 Трансформатора тока 2 обмотки", "2 Трансформатора тока 3 обмотки", "2 Трансформатора тока 4 обмотки", "3 Трансформатора тока 2 обмотки", "3 Трансформатора тока 3 обмотки", "3 Трансформатора тока 4 обмотки"]
export const isMeasuringCurrentTransformersDeviceParam = "isMeasuringCurrentTransformersDevice"
const images = [TT_0, TT_2_AC, TT_3_AC, TT_4_AC, TT_2_ABC, TT_3_ABC, TT_4_ABC]



export let currentImageObject: Record<string, string> = {};
isMeasuringCurrentTransformersDeviceOptions.map((item, index) => {
    currentImageObject[item] = images[index]
    // console.log(currentImageObject[item])
})
// currentImageObject = isMeasuringCurrentTransformersDeviceOptions.reduce((acc, item, index) => {
//     currentImageObject[item] = images[index]
//     return acc;
// }, {})

console.log(currentImageObject);