import { createdAtRuFormat, updatedAtRuFormat } from "@/shared/lib";

import { Link } from "react-router-dom";
import { EditCardButton } from "./EditCardButton";
import { ProjectInfo } from "@/shared/api/types";

import { DeleteCardButton } from "./DeleteCardButton";

export const ProjectCard = ({
  createdAt,
  id,
  description,
  projectType,
  title,
  updatedAt,
}: ProjectInfo) => {
  return (
    <div>
      <Link to={`/projects/${id}`} className="bg-slate-300 rounded-xl block p-4">
        <h2>{projectType}</h2>
        <h2>{title}</h2>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-52 h-16 ">
          {description}
        </p>
        {createdAt && <div>Создано: {createdAtRuFormat(createdAt)}</div>}
        {updatedAt && <div>Обновлено: {updatedAtRuFormat(updatedAt)}</div>}
      </Link>
      <div>
        <EditCardButton id={id} description={description} projectType={projectType} title={title} />
        <DeleteCardButton id={id} />
      </div>{" "}
    </div>
  );
};
