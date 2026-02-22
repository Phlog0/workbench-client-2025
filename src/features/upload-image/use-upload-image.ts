import { useReactFlow } from "@xyflow/react";
import { compressImage } from "./compress-image";
import { readImageFile } from "./read-image-file";
import { v4 as uuidv4 } from "uuid";
import { TImageNode } from "@/shared/react-flow/nodes/image";
import { useBoundStore } from "@/shared/appStore";
import { useCallback, useState } from "react";
export const useUploadImageHandle = (reactFlowWidth?: number, reactFLowHeight?: number) => {
  const { getViewport } = useReactFlow();
  const [widgetLoading, setWidgetLoading] = useState(false);
  const viewport = getViewport();
  const addNode = useBoundStore(state => state.addNode);
  const uploadFileHandle = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setWidgetLoading(true);
      const file = e.target.files?.[0];
      const filename = uuidv4();
      if (file) {
        const compressedBlob = await compressImage(file);
        const compressedFile = new File([compressedBlob], filename);
        const result = await readImageFile(compressedFile);

        let positionX = viewport.x;
        let positionY = viewport.y;
        if (reactFLowHeight && reactFlowWidth) {
          positionX = positionX + reactFlowWidth / 2;
          positionY = positionY + reactFLowHeight / 2;
        }

        const newImageNode: TImageNode = {
          id: `image-node-${uuidv4()}`,
          data: {
            imageSrc: result,
            rotation: 0,
          },

          position: { x: positionX, y: positionY },
          type: "Image",
        };
        addNode(newImageNode);
      }
      e.target.value = "";
      setWidgetLoading(false);
    },
    [addNode, reactFLowHeight, reactFlowWidth, viewport.x, viewport.y]
  );
  return { widgetLoading, uploadFileHandle };
};
