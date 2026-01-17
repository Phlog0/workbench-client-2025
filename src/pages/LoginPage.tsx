import { LoginForm } from "@/features/auth";
import { useBoundStore } from "@/shared/appStore";
import { LOCAL_STORAGE_KEYS } from "@/shared/constants";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

export function LoginPage() {
  const checkAuth = useBoundStore((state) => state.checkAuth);
  const isAuth = useBoundStore((state) => state.isAuth);
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

  return (
    <div>
      <h1>{isAuth ? "Авторизован!" : "Нет!"}</h1>
      <LoginForm />
    </div>
  );
}
