import { authApiService } from "./auth-api-instance";
import { projectApiService } from "./projects-api-service";

export { projectApiService } from "./projects-api-service";
export const $api = {
  auth: authApiService,
  projects: projectApiService,
} as const;

export type { SuccessGetProjectResponse } from "./projects-api-service";
