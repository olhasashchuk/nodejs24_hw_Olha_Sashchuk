import { ISignUpUser } from "../interfaces/sign-up-user.interface";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class SignUpUserDto implements ISignUpUser {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsBoolean()
  isStudent: boolean;
  @IsNumber()
  age: number;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
