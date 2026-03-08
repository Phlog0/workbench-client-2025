//! в shared
import { LoginPage, NotFoundPage, RegistrationPage, RequireAuth } from "@/pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { APP_ROUTES } from "@/shared/constants";
import { WidgetSpinner } from "@/shared/ui/spinners";
import { lazy, Suspense, useEffect } from "react";
import { useBoundStore } from "@/shared/appStore";
const FlowLayout = lazy(() => import("@/pages/FlowLayout"));
const LazyProjectsMenu = lazy(() => import("@/pages/ProjectsMenu"));
export const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: APP_ROUTES.REGISTRATION,
        element: <RegistrationPage />,
      },
      {
        path: APP_ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: APP_ROUTES.OTHER_PAGES,
        element: <NotFoundPage />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: APP_ROUTES.PROJECTS_LIST,
            element: (
              <Suspense fallback={<WidgetSpinner />}>
                <LazyProjectsMenu />
              </Suspense>
            ),
          },
          {
            path: APP_ROUTES.CURRENT_PROJECT,
            element: <FlowLayout />,
          },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_partialHydration: false,
      },
      basename: "/constructor",
    }
  );

  const changeProjectTheme = useBoundStore(state => state.changeProjectTheme);
  useEffect(() => {
    // Функция для определения и установки начальной темы
    const setInitialTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (!savedTheme) {
        if (prefersDark) {
          changeProjectTheme("dark");
        } else {
          changeProjectTheme("light");
        }
      }
      if (savedTheme === "light" || savedTheme === "dark") {
        changeProjectTheme(savedTheme);
      }
    };

    setInitialTheme();

    // Слушаем изменения системной темы
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        changeProjectTheme("dark");
      } else {
        changeProjectTheme("light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [changeProjectTheme]);

  return (
    <div className="font-cascadia-mono theme-bg theme-text">
      {/* <SocketProvider> */}
      <RouterProvider router={router} />
      {/* </SocketProvider> */}
    </div>
  );
};
