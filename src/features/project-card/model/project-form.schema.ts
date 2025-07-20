import { ProjectInfoSchema } from "@/shared/api/types";
import { z } from "zod/v4";

export const ProjectInfoFormSchema = ProjectInfoSchema.extend({
  id: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
