import { IsBoolean, IsNumber, IsString, IsOptional } from "class-validator";
import { IUpdateUserPartial } from '../interfaces/update-user-partial.interface';

export class UpdateUserPartialDto implements IUpdateUserPartial {
  @IsString()
  @IsOptional()
  firstName?: string | null;
  
  @IsString()
  @IsOptional()
  lastName?: string | null;
  
  @IsBoolean()
  @IsOptional()
  isStudent?: boolean | null;
  
  @IsNumber()
  @IsOptional()
  age?: number | null;
}
