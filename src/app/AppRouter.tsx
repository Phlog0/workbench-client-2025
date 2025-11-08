//! в shared
import { Toaster } from "shared/ui";
import { FlowLayout, NotFoundPage, ProjectsMenu, SignInPage, SignUpPage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/shared/constants";
import { Spinner } from "@/shared/ui/spinners";

export const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: ROUTES.PROJECTS_LIST,
        element: <ProjectsMenu />,
        loader: Spinner,
      },
      {
        path: ROUTES.CURRENT_PROJECT,
        element: <FlowLayout />,
        loader: Spinner,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />,
        loader: Spinner,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
        loader: Spinner,
      },
      {
        path: ROUTES.OTHER_PAGES,
        element: <NotFoundPage />,
        loader: Spinner,
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
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster />
    </div>
  );
};
