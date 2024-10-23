import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ICreateUser } from "../interfaces/create-user.interface";

export class CreateUserDto implements ICreateUser {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsBoolean()
  isStudent: boolean;
  @IsNumber()
  age: number;
}
