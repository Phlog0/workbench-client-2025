import { PossibleEdge } from "../react-flow/edges";
import { PossibleNode } from "../react-flow/nodes";
import { apiInstance } from "./api-instacne";
import {
  ProjectInfo,
  ProjectId,
  ProjectInfoTextData,
  SuccessAddProjectResponse,
  SuccessDeleteProjectResponse,
  SuccessUpdateProjectResponse,
  SuccessSyncProjectScheme,
} from "./types";
import { SuccessGetProjectScheme } from "./types/project";

export const projectApi = {
  getProjectsList: async () => {
    const response = await apiInstance.get<ProjectInfo[]>(`/api/projects/all-projects`);
    return response.data;
  },
  updateProject: async (projectId: ProjectId, projectMetaData: ProjectInfoTextData) => {
    const response = await apiInstance.patch<SuccessUpdateProjectResponse>(
      `/api/projects/${projectId}`,
      projectMetaData,
    );
    return response.data;
  },
  deleteProject: async (projectId: ProjectId) => {
    const response = await apiInstance.delete<SuccessDeleteProjectResponse>(
      `/api/projects/${projectId}`,
    );
    return response.data;
  },
  addProject: async (projectMetaData: ProjectInfoTextData) => {
    const response = await apiInstance.post<SuccessAddProjectResponse>(
      `/api/projects/`,
      projectMetaData,
    );
    return response.data;
  },

  syncProjectScheme: async (
    id: ProjectId,
    projectScheme: { nodes: PossibleNode[]; edges: PossibleEdge[] },
  ) => {
    const response = await apiInstance.patch<SuccessSyncProjectScheme>(
      `/api/projects/project-scheme/${id}`,
      projectScheme,
    );
    return response.data;
  },
  getProjectSheme: async (id: ProjectId) => {
    const response = await apiInstance.get<SuccessGetProjectScheme>(
      `/api/projects/project-scheme/${id}`,
    );
    return response.data;
  },
};
