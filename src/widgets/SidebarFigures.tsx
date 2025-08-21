import { useDnD } from "@/app/DnDContext/DnDContext";

import { cn } from "@/shared/lib/cn";

import { RF_NODE_TYPES, RFNodeTypesValues } from "@/shared/react-flow/nodes";
import { Button } from "shared/ui";

const items = [
  {
    title: "Секция 10 кВ",
    type: RF_NODE_TYPES.section10Kv,
  },
  {
    title: "Ячейка 10 кВ",
    type: RF_NODE_TYPES.cell10Kv,
  },
  {
    title: "Силовой трансформатор 10(6)/04",
    type: RF_NODE_TYPES.powerTransformer1004Kv,
  },
  {
    title: "Секция 04 кВ",
    type: RF_NODE_TYPES.section04Kv,
  },
  {
    title: "Ячейка 04 кВ",
    type: RF_NODE_TYPES.cell04Kv,
  },
  // {
  //   title: "Секция 04 кВ",
  //   type: RF_NODE_TYPES.,
  // },
  // {
  //   title: "Ячейка 04 кВ",
  //   type: RF_NODE_TYPES.,
  // },
];

export const SidebarFigures = ({ className }: { className?: string }) => {
  const [_, setType] = useDnD();
  const onDragStart = (event: React.DragEvent, nodeType: RFNodeTypesValues) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className={cn("project-items outline-1 outline-double dark:bg-slate-800", className)}>
      <div className="flex flex-col gap-4 p-2">
        {items.map((item) => (
          <Button key={item.type} onDragStart={(event) => onDragStart(event, item.type)} draggable>
            {item.title}
          </Button>
        ))}
      </div>
    </aside>
  );
};
