import { Project } from "@/shared/appStore/project-response-types";
import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({
  createdAt,
  id,
  info,
  projectType,
  title,
  updatedAt,
}: Project) => {
  const createdAtRu = new Intl.DateTimeFormat("ru", {
    dateStyle: "medium",
  }).format(new Date(createdAt));
  const updatedAtRu = new Intl.DateTimeFormat("ru", {
    dateStyle: "medium",
  }).format(new Date(updatedAt));
  return (
    <Link to={`/projects/${id}`} className="border-black border-4 p-4">
      <h2>{title}</h2>
      <p>{info}</p>
      <div>Создано: {createdAtRu}</div>
      <div>Обновлено: {updatedAtRu}</div>
    </Link>
  );
};
