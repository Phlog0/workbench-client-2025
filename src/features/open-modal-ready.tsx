import { getThemeSelector } from "@/shared/appStore/my-selectors";
import useStore from "@/shared/appStore/store";
import { ModalComponent, MyVirtualTable } from "@/shared/components";
import { cn } from "@/shared/lib/react-std";

export function OpenModalReady() {
  const projectTheme = useStore(getThemeSelector);
  return (
    <h1>убрать</h1>
    // <h1>hey</h1>
  );
}
