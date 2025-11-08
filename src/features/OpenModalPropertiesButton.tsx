import { useBoundStore } from "@/shared/appStore";
import { getThemeSelector } from "@/shared/appStore/slices/selectors";

import { cn } from "@/shared/lib";
import { ModalComponent } from "@/shared/ui";
import { SiderbarProperties } from "@/widgets";
import { Menu } from "lucide-react";

export function OpenModalPropertiesButton() {
  const projectTheme = useBoundStore(getThemeSelector);
  return (
    // <Button className="hidden max-xl:inline-flex" onClick={handleClick}>
    <ModalComponent
      isOverflowContainerEnabled={true}
      content={<SiderbarProperties />}
      dialogTitle="Свойства"
      triggerTitle={
        <div className="flex items-center">
          <Menu />
          Свойства
        </div>
      }
      className={cn("properties-button")}
      projectTheme={projectTheme}
    />
    // </Button>
  );
}
