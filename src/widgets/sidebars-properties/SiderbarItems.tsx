import { useDnD } from "@/app/DnDContext/DnDContext";
import { NodeTypesUnion } from "@/shared/appStore/react-flow-types";
import { cn } from "@/shared/lib/react-std";
import { Button } from "shared/ui";

const items = [
  {
    title: "Секция 10 кВ",
    type: "Section10Kv",
  },
  {
    title: "Ячейка 10 кВ",
    type: "Cell10Kv",
  },
  {
    title: "Силовой трансформатор",
    type: "PowerTransformer",
  },

  {
    title: "Секция 04 кВ",
    type: "Section04Kv",
  },
  {
    title: "Ячейка 04 кВ",
    type: "Cell04Kv",
  },
];

export const SiderbarItems = ({ className }: { className?: string }) => {
  const [type, setType] = useDnD();
  const onDragStart = (event: React.DragEvent, nodeType: NodeTypesUnion) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside
      className={cn(
        "project-items outline-1 outline-double dark:bg-slate-800",
        className
      )}
    >
      <div className="flex flex-col gap-4 p-2">
        {items.map((item) => (
          <Button
            key={item.type}
            onDragStart={(event) =>
              onDragStart(event, item.type as NodeTypesUnion)
            }
            draggable
          >
            {item.title}
          </Button>
        ))}
      </div>
    </aside>
  );
};
