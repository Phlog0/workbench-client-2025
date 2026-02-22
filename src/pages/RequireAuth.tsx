import { useBoundStore } from "@/shared/appStore";
import { APP_ROUTES } from "@/shared/constants";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const isAuth = useBoundStore(state => state.isAuth);
  const user = useBoundStore(state => state.user);
  if (!isAuth || !user) {
    return (
      <Navigate
        to={APP_ROUTES.REGISTRATION}
        replace
      />
    );
  }
  return children ? children : <Outlet />;
};
