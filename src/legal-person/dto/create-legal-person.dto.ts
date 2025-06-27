
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsBoolean } from 'class-validator';

export class CreateLegalPersonDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsBoolean()
  @IsNotEmpty()
  publicCompany: boolean;

  @IsString()
  @IsNotEmpty()
  urlImage: string;

  @IsString()
  @IsOptional()
  userIdDiscord?: string; // vinculado ao model Person.userID, opcional
}