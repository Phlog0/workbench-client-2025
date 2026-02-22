import { RegistrationForm } from "@/features/auth";
import { useBoundStore } from "@/shared/appStore";
import { APP_ROUTES, LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RegistrationPage() {
  const navigate = useNavigate();
  const isAuth = useBoundStore(state => state.isAuth);
  const checkAuth = useBoundStore(state => state.checkAuth);

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      if (localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)) {
        checkAuth();
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId1);
    };
  }, [checkAuth]);

  useEffect(() => {
    if (isAuth) {
      navigate(APP_ROUTES.PROJECTS_LIST);
    }
  }, [navigate, isAuth]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1>{isAuth ? "Авторизован!" : "Нет!"}</h1>
      <RegistrationForm />
    </div>
  );
}
