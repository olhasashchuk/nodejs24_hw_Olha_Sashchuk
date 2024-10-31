export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  email: string;
  password: string;
  accessToken?: string;
  refreshToken?: string;
}