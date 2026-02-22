import { LoginForm } from "@/features/auth";
import { useBoundStore } from "@/shared/appStore";
import { APP_ROUTES, LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  const navigate = useNavigate();
  const checkAuth = useBoundStore(state => state.checkAuth);
  const isAuth = useBoundStore(state => state.isAuth);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      if (localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)) {
        checkAuth();
      }
    }, 0);

    const timeoutId2 = setTimeout(() => {
      if (searchParams.get("activated")) {
        toast.success("Вы успешно активировали аккаунт по почте! :)");
        setSearchParams("");
        return;
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [checkAuth, searchParams, setSearchParams]);

  useEffect(() => {
    if (isAuth) {
      navigate(APP_ROUTES.PROJECTS_LIST);
    }
  }, [navigate, isAuth]);
  return (
    <div className="w-full min-h-screen grid place-content-center">
      {/* <h1>{isAuth ? "Авторизован!" : "Нет!"}</h1> */}
      <LoginForm />
    </div>
  );
}
