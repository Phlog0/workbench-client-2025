import { apiInstance } from "./api-instacne";
import { SignIn, SignUp, SuccessSignInResponse, SuccessSignUpResponse } from "./types";

export const authApiInstance = {
  sigUp: async (signUpData: SignUp) => {
    const response = await apiInstance.post<SuccessSignUpResponse>("/auth/sign-up", signUpData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },

  signIn: async (signInData: SignIn) => {
    const response = await apiInstance.post<SuccessSignInResponse>("/auth/sign-in", signInData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },
};
