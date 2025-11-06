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
      <Link to={`/projects/${id}`} className="bg-slate-300 rounded-xl block p-5">
        <h2 className="ellipsed-text">{projectType}</h2>
        <h2 className="ellipsed-text">{title}</h2>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-52 h-16 ellipsed-text">
          {description}
        </p>
        {createdAt && <div className="ellipsed-text">Создано: {createdAtRuFormat(createdAt)}</div>}
        {updatedAt && (
          <div className="ellipsed-text">Обновлено: {updatedAtRuFormat(updatedAt)}</div>
        )}
      </Link>
      <div>
        <EditCardButton id={id} description={description} projectType={projectType} title={title} />
        <DeleteCardButton id={id} />
      </div>{" "}
    </div>
  );
};
