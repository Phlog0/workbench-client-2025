import { fetchAPI } from "@/shared/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Spinner } from "shared/ui";
import { Project } from "@/shared/appStore/project-response-types";
import { ProjectCard } from "@/entities/project-card";

export const Menu = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<Project[]> => {
      const response = await fetch(`${fetchAPI}projects`);
      return response.json();
    },
  });

  if (isPending && !data) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="w-screen outline-dashed">
      <h2 className="text-center text-3xl">Проекты</h2>
      <div className="max-w-[1300px] px-4 mx-auto flex items-center flex-wrap gap-4 border-black border-4 bg-blue-100">
        {data?.map((p) => (
          <>
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
            <ProjectCard {...p} />
          </>
        ))}
      </div>
    </div>
  );
};
