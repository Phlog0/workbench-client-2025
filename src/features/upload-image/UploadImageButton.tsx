import { Button, Input } from "@/shared/ui";
import { Image as ImageIcon } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/shared/lib";

import { useUploadImageHandle } from "./use-upload-image";
import { WidgetSpinner } from "@/shared/ui/spinners";
export function UploadImageButton({
  className,
  reactFlowWidth,
  reactFLowHeight,
}: {
  className?: string;
  reactFlowWidth?: number;
  reactFLowHeight?: number;
}) {
  const { uploadFileHandle, widgetLoading } = useUploadImageHandle(reactFlowWidth, reactFLowHeight);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {widgetLoading && <WidgetSpinner />}
      <div className={cn("relative", className)}>
        <Input
          type="file"
          ref={fileInputRef}
          accept="image/png, image/jpeg"
          onChange={uploadFileHandle}
          className="absolute inset-0 w-0 h-0 hidden"
        />

        <Button onClick={handleClick}>
          Загрузить изображение
          <ImageIcon />
        </Button>
      </div>
    </>
  );
}
