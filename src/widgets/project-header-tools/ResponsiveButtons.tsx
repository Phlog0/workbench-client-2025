import { ContactMe } from "@/entities/me";
import { cn } from "@/shared/lib";
import { DrawerUI } from "@/shared/ui";

export function ResponsiveButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <DrawerUI
        title="Связаться со мной"
        content={<ContactMe />}
        trigger={"Связаться со мной"}
        description="Главное меню"
      />
    </div>
  );
}
