import { Button, Input } from "@/shared/ui";
import { MonitorUp } from "lucide-react";
import { useRef } from "react";
import { readJsonFile } from "./read-json-file";
import { useBoundStore } from "@/shared/appStore";
import { useReactFlow } from "@xyflow/react";

export function ImportProjectButton() {
  const { setViewport } = useReactFlow();
  const setNodes = useBoundStore((state) => state.setNodes);
  const setEdges = useBoundStore((state) => state.setEdges);
  const setViewportSync = useBoundStore((state) => state.setViewportSync);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const result = await readJsonFile(file);
      setEdges(result.edges);
      setNodes(result.nodes);
      setViewportSync(result.viewport);
      setViewport(result.viewport);
    }
  };
  return (
    <div className="relative">
      <Input
        type="file"
        ref={fileInputRef}
        accept=".json"
        onChange={uploadFile}
        className="absolute inset-0 w-0 h-0 hidden"
      />

      <Button onClick={handleClick}>
        Импорт проекта
        <MonitorUp />
      </Button>
    </div>
  );
}
