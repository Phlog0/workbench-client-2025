import { RFJsonObject } from "@/shared/react-flow/types";
import { z } from "zod/v4";

export const ProjectInfoSchema = z.object({
  id: z.string(),
  projectType: z.enum(["ТП", "КТП", "РП"]),
  title: z.string().nonempty().trim(),
  description: z.string().nonempty().trim(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type ProjectInfo = z.infer<typeof ProjectInfoSchema>;

export type ProjectId = ProjectInfo["id"];
export type ProjectType = ProjectInfo["projectType"];

export type SuccessUpdateProjectResponse = { message: string };
export type ProjectInfoTextData = Pick<ProjectInfo, "description" | "title" | "projectType">;

export type SuccessDeleteProjectResponse = { message: string };
export type SuccessAddProjectResponse = { message: string; newProject: ProjectInfo };
export type SuccessSyncProjectScheme = {
  message: string;
};
export type SuccessGetProjectScheme = {
  projectScheme: RFJsonObject | null;
};
