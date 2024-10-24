import { IsBoolean, IsNumber, IsString } from "class-validator";
import { IUpdateUser } from '../interfaces/update-user.interface';

export class UpdateUserDto implements IUpdateUser {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsBoolean()
  isStudent: boolean;
  @IsNumber()
  age: number;
}