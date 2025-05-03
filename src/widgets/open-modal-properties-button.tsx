import { getThemeSelector } from "@/shared/appStore/my-selectors";
import useStore from "@/shared/appStore/store";
import { BurgerMenu } from "@/shared/assets/ui";
import { ModalComponent } from "@/shared/components";
import { cn } from "@/shared/lib/react-std";
import { Button } from "@/shared/ui";
import { SiderbarProperties } from "@/widgets";

export function OpenModalPropertiesButton() {
  const handleClick = () => {};
  const projectTheme = useStore(getThemeSelector);
  return (
    // <Button className="hidden max-xl:inline-flex" onClick={handleClick}>
    <ModalComponent
      isOverflowContainerEnabled={true}
      content={<SiderbarProperties headerMode={true} />}
      dialogTitle="Свойства"
      triggerTitle={
        <div className="flex items-center">
          <BurgerMenu />
          Свойства
        </div>
      }
      className={cn("properties-button")}
      projectTheme={projectTheme}
    />
    // </Button>
  );
}
