// !!to WIDGETS! Анимация не работает

import { Spinner } from "shared/ui/spinners";

import { AddCardButton, ProjectCard } from "@/features/project-card/ui";
import { motion } from "motion/react";

import { useGetProjectsList } from "@/features/project-card/api";

import { useEffect } from "react";
import { useBoundStore } from "@/shared/appStore";
import { toast } from "sonner";
import { LogoutButton } from "@/features/auth";
import { $api } from "@/shared/api/services";
import { Button } from "@/shared/ui";
export const ProjectsMenu = () => {
  const { isPending, error, data } = useGetProjectsList();
  const user = useBoundStore((state) => state.user);

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
    console.log("TEST HANDLE", data);
  };
  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <motion.section className="grid grid-rows-[max-content_1fr] grid-cols-[1200px] justify-center py-4 gap-4 honeycomb-bg h-screen max-xl:grid-cols-[700px] max-md:grid-cols-[600px] max-sm:grid-cols-[1fr] p-4">
      <div>
        <h1 className="text-center text-3xl py-4">Проекты</h1>
        <div className="overflow-auto h-full grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {data?.map((item) => (
            <ProjectCard key={`${item.id}`} {...item} />
          ))}
        </div>
      </div>
      <LogoutButton className="fixed top-3 right-3" />
      <AddCardButton className="fixed bottom-3 right-3" />
      {/* <SponsorIcon className="fixed bottom-3 right-16" /> */}
      <Button onClick={testHandle} className="fixed top-3 right-40" type="button">
        JWT TEST
      </Button>
    </motion.section>
  );
};
