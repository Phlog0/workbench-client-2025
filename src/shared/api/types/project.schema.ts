import { ProjectTypeArray } from "@/shared/constants";
import { RFJsonObject } from "@/shared/react-flow/types";
import { z } from "zod/v4";
export const positionSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});
export const ProjectInfoSchema = z.object({
  id: z.string(),
  projectType: z.enum(ProjectTypeArray),
  title: z.string().nonempty({ error: "Обязательное поле" }).trim(),
  description: z.string().nonempty({ error: "Обязательное поле" }).trim(),
  createdAt: z.date(),
  updatedAt: z.date(),

  markerColor: z.string(),
  position: positionSchema,
});
export const CreateProjectInfoSchema = ProjectInfoSchema.pick({
  projectType: true,
  title: true,
  description: true,
  markerColor: true,
  position: true,
}).extend({
  prompt: z.string().trim().optional(),
});

export const UpdateProjectInfoSchema = CreateProjectInfoSchema.omit({
  position: true,
  prompt: true,
});

export type CreateProjectInfo = z.infer<typeof CreateProjectInfoSchema>;
export type UpdateProjectInfo = z.infer<typeof UpdateProjectInfoSchema>;
// export const CreateProjectInfoSchema = z.object({
//   projectType: z.enum(["ТП", "КТП", "РП"]),
//   title: z.string().nonempty({ error: "Обязательное поле" }).trim(),
//   description: z.string().nonempty({ error: "Обязательное поле" }).trim(),
//   prompt: z.string().trim().optional(),
//   markerColor: z.string(),
//   position: positionSchema,
// });

export type ProjectInfo = z.infer<typeof ProjectInfoSchema>;

export type ProjectId = ProjectInfo["id"];
export type ProjectType = ProjectInfo["projectType"];

export type SuccessUpdateProjectResponse = { message: string };

export type SuccessDeleteProjectResponse = { message: string };
export type SuccessAddProjectResponse = { message: string; newProject: ProjectInfo };
export type SuccessSyncProjectScheme = {
  message: string;
};
export type SuccessGetProjectScheme = {
  projectScheme: RFJsonObject | null;
};
