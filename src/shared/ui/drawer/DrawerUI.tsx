import { ReactNode } from "react";
import { Button } from "../button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";
import { cn } from "@/shared/lib";

export function DrawerUI({
  content,
  title,
  trigger,
  description,
  direction = "bottom",
  className,
}: {
  trigger: ReactNode;
  content: ReactNode;
  title: string;
  description?: string;
  direction?: "top" | "right" | "bottom" | "left";
  className?: string;
}) {
  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <Button>{trigger}</Button>
      </DrawerTrigger>

      <DrawerContent className={cn("theme-bg theme-text z-50", className)}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {content}
        {/* <div>
        <ChangeThemeButton />
        <ExitProjectButton />
        <ContactMe />
        <OpenModalPropertiesButton />
        <RemoveReactFlowNodeButton />
      </div> */}
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Закрыть</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
