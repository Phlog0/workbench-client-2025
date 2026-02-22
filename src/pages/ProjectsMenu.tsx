// !!to WIDGETS! Анимация не работает

import { Spinner } from "shared/ui/spinners";

import { AddCardButton, ProjectCard } from "@/features/project-card/ui";

import { useGetProjectsList } from "@/features/project-card/api";

import { useEffect } from "react";
import { useBoundStore } from "@/shared/appStore";
import { toast } from "sonner";
import { LogoutButton } from "@/features/auth";
import { $api } from "@/shared/api/services";
import { Button } from "@/shared/ui";
export const ProjectsMenu = () => {
  const { isPending, error, data } = useGetProjectsList();
  const user = useBoundStore(state => state.user);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (user?.activated === null) {
        toast.warning(`Не забудьте активировать свой аккаунт!`, {
          closeButton: true,
          id: "account-activation-warning", // уникальный ID
        });
      }
    }, 0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [user?.activated]);

  const testHandle = async () => {
    const data = await $api.projects.getAllProjects();
    console.warn("[JWT_TEST]: ", data);
  };
  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="px-20 min-h-screen">
      <header className="flex items-center justify-center flex-wrap gap-4 sticky top-0 left-0 theme-bg">
        <h1 className="text-center text-3xl py-4">Проекты</h1>
        <AddCardButton />
        <LogoutButton />
        <Button
          onClick={testHandle}
          type="button"
        >
          JWT TEST
        </Button>
      </header>
      <div className="grid grid-rows-[max-content_1fr] h-full">
        <div className="overflow-auto grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 min-h-0">
          {data?.map(item => (
            <ProjectCard
              key={`${item.id}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
