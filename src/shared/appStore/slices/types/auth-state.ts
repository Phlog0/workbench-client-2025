import { UserDto } from "@/shared/api/types/auth-response";

export type AuthState = {
  user: UserDto | null;
  isAuth: boolean;
};

export type AuthActions = {
  setAuth: (val: boolean) => void;
  setUser: (val: UserDto | null) => void;
  // login: (values: TLoginForm) => Promise<void>;
  // registration: (values: TRegistrationForm) => Promise<void>;
  // logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export type AuthSlice = AuthState & AuthActions;
