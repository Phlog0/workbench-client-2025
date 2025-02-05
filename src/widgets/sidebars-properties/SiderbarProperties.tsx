import { useShallow } from "zustand/react/shallow";
import useStore from "shared/appStore/store";
import { useReactFlow } from "@xyflow/react";
import { MyInput, MySelect, ModalButton } from "@/shared/components";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const data = {
  data: "sampleText",
  inputType: "text",
  label: "type of Cell",
  keyOne: "one",
  keyTwo: "two",
  inputId: "#id1",
};

const selectData = {
  label: "select",
  selectId: "typeOfCell",
  value: "a",
  query: "a",
};

export const SiderbarProperties = () => {
  const { getNode } = useReactFlow();
  const { selectedNodeId } = useStore();
  const nodeInfo = getNode(selectedNodeId as string);
  return (
    <div>
      <h2>{JSON.stringify(selectedNodeId)}</h2>
      <MyInput {...data} />
      <MySelect {...selectData} />
      <ModalButton />
    </div>
  );
};
