import { ISignInUser } from "../interfaces/sign-in-user.interface";
import { IsString } from "class-validator";

export class SignInUserDto implements ISignInUser {
  @IsString()
  email: string;
  @IsString()
  password: string;
}