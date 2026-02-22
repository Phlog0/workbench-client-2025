import { APP_ROUTES } from "@/shared/constants";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigationLink = APP_ROUTES.PROJECTS_LIST;
  const navigate = useNavigate();
  useEffect(() => {
    navigate(navigationLink);
  }, [navigate, navigationLink]);
  return (
    <div className="grid place-content-center h-screen">
      <h1>Упс! Здесь ничего нет</h1>
      <Link
        className="text-blue-500 underline"
        to={navigationLink}
      >
        Логин
      </Link>
    </div>
  );
}
