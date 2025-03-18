import { MySelect } from "@/shared/components";
import { useGetCurrentNode } from "@/shared/components/model/use-get-current-node";

export function TypeOfCell({
  className,
  selectedNodeId,
}: {
  className?: string;
  selectedNodeId: string;
}) {
  // api - запрос

  const { node } = useGetCurrentNode(selectedNodeId);
  return (
    <MySelect
      label="type of cell"
      options={["type_1", "type_2", "type_3"]}
      selectId={selectedNodeId}
      propValue={node?.typeOfCell}
      prop={"typeOfCell"}
      selectedNodeId={selectedNodeId}
    />
  )
}
