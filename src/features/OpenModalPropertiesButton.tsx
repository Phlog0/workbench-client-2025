import { useBoundStore } from "@/shared/appStore";
import { getThemeSelector } from "@/shared/appStore/slices/selectors";

import { cn } from "@/shared/lib";
import { ModalComponent } from "@/shared/ui";
import { SiderbarProperties } from "@/widgets";

export function OpenModalPropertiesButton() {
  const projectTheme = useBoundStore(getThemeSelector);
  return (
    <div className="properties-button">
      <ModalComponent
        isOverflowContainerEnabled={true}
        content={<SiderbarProperties isModalOpen={true} className="w-full" />}
        dialogTitle="Свойства"
        triggerTitle={<div className="flex items-center ">Свойства</div>}
        className={cn("properties-button")}
        projectTheme={projectTheme}
      />
    </div>
  );
}
