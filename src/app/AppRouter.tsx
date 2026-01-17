//! в shared
import { Toaster } from "shared/ui";
import {
  FlowLayout,
  LoginPage,
  NotFoundPage,
  ProjectsMenu,
  RegistrationPage,
  RequireAuth,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "@/shared/constants";
import { Spinner } from "@/shared/ui/spinners";

export const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: APP_ROUTES.REGISTRATION,
        element: <RegistrationPage />,
        loader: Spinner,
      },
      {
        path: APP_ROUTES.LOGIN,
        element: <LoginPage />,
        loader: Spinner,
      },
      {
        path: APP_ROUTES.OTHER_PAGES,
        element: <NotFoundPage />,
        loader: Spinner,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: APP_ROUTES.PROJECTS_LIST,
            element: <ProjectsMenu />,
            loader: Spinner,
          },
          {
            path: APP_ROUTES.CURRENT_PROJECT,
            element: <FlowLayout />,
            loader: Spinner,
          },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    },
  );

  return (
    <div className="font-cascadia-mono">
      <RouterProvider router={router} />
    </div>
  );
};
