//! в shared
import { Spinner, Toaster } from "shared/ui";
import { FlowLayout, NotFoundPage, ProjectsMenu, SignInPage, SignUpPage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/shared/constants";

export const AppRouter = () => {
  const router = createBrowserRouter([
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
  ]);

  return (
    <div className="font-cascadiaMono">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
};
