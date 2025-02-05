import { Spinner } from "shared/ui";
import { FlowLayout, Menu } from "pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
      loader: Spinner,
    },
    {
      path: "/projects/:id",
      element: <FlowLayout />,
      loader: Spinner,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
