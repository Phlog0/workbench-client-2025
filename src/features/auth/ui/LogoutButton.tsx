import { Button } from "@/shared/ui";
import { useLogout } from "@/features/auth/api/use-logout";
import { WidgetSpinner } from "@/shared/ui/spinners";
import { cn } from "@/shared/lib";

export function LogoutButton({ className }: { className?: string }) {
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      {logoutMutation.isPending && <WidgetSpinner title="Выход из системы..." />}
      <Button className={cn("px-4", className)} type="button" onClick={handleLogout}>
        Выйти
      </Button>
    </>
  );
}
