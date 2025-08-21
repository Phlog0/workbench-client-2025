import { Button, Input } from "@/shared/ui";
import { Image as ImageIcon } from "lucide-react";
import { useRef } from "react";
import { readImageFile } from "./read-image-file";
import { useBoundStore } from "@/shared/appStore";
import { v4 as uuidv4 } from "uuid";
import { TImageNode } from "@/shared/react-flow/nodes/image";
import { useReactFlow } from "@xyflow/react";
import { cn } from "@/shared/lib";
export function UploadImageButton({
  className,
  reactFLowHeight,
  reactFlowWidth,
}: {
  className?: string;
  reactFlowWidth?: number;
  reactFLowHeight?: number;
}) {
  const addNode = useBoundStore((state) => state.addNode);

  const { getViewport } = useReactFlow();
  const viewport = getViewport();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const result = await readImageFile(file);

      let positionX = viewport.x;
      let positionY = viewport.y;
      if (reactFLowHeight && reactFlowWidth) {
        positionX = positionX + reactFlowWidth / 2;
        positionY = positionY + reactFLowHeight / 2;
      }

      const newImageNode: TImageNode = {
        id: uuidv4(),
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
  };
  return (
    <div className={cn("relative", className)}>
      <Input
        type="file"
        ref={fileInputRef}
        accept="image/png, image/jpeg"
        onChange={uploadFile}
        className="absolute inset-0 w-0 h-0 hidden"
      />

      <Button onClick={handleClick}>
        Загрузить изображение
        <ImageIcon />
      </Button>
    </div>
  );
}
