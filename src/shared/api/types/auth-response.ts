export interface UserDto {
  email: string;
  activated: Date;
  id: number;
}
export interface SuccessAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserDto;
}

export interface BadAuthResponse {
  message: string | string[];
  error: string;
  statusCode: number;
}
