import { useDnD } from "@/app/DnDContext/DnDContext";
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

export const SiderbarItems = () => {
  const [type, setType] = useDnD();
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="flex flex-col gap-4 p-2">
      {items.map((item) => (
        <Button
          onDragStart={(event) => onDragStart(event, item.type)}
          draggable
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
