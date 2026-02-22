import { ExportJsonProjectButton } from "@/features/export-json-project";
import { ImportProjectJsonButton } from "@/features/import-project";
import { SaveSchemeButton } from "@/features/save-scheme";
import { UploadImageButton } from "@/features/upload-image";
import { Button } from "@/shared/ui";
import { TableOfContents } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
export function ActionButtons({
  projectId,
  reactFLowHeight,
  reactFlowWidth,
}: {
  projectId?: string;
  reactFlowWidth?: number;
  reactFLowHeight?: number;
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setMenuOpen(false);
  });

  return (
    // <Panel position="top-right">
    <>
      <div className="flex gap-3 max-lg:hidden">
        <ExportJsonProjectButton projectId={projectId} />
        <ImportProjectJsonButton />
        <UploadImageButton
          reactFlowWidth={reactFlowWidth}
          reactFLowHeight={reactFLowHeight}
        />
        <SaveSchemeButton />
      </div>
      <div
        className="hidden gap-3 max-lg:flex"
        ref={ref}
      >
        <Button onClick={() => setMenuOpen(prev => !prev)}>
          <TableOfContents />
        </Button>
        {isMenuOpen && (
          <div className="absolute bg-black/20 top-18 left-0 p-2 rounded-3xl z-1">
            <ExportJsonProjectButton projectId={projectId} />
            <ImportProjectJsonButton />
            <UploadImageButton
              reactFlowWidth={reactFlowWidth}
              reactFLowHeight={reactFLowHeight}
            />
            <SaveSchemeButton />
          </div>
        )}
      </div>
    </>
    // </Panel>
  );
}
