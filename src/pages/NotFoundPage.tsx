import { APP_ROUTES } from "@/shared/constants";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(APP_ROUTES.LOGIN), 2000);
  }, []);
  return (
    <div className="grid place-content-center h-screen">
      <h1>Упс! Здесь ничего нет, скоро вы перейдете на страницу авторизации</h1>
      <Link className="text-blue-500 underline" to={APP_ROUTES.LOGIN}>
        Логин
      </Link>
    </div>
  );
}
