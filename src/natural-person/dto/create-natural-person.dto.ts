
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateNaturalPersonDto {
  @IsString()
  @IsNotEmpty()
  primaryName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  urlImage: string;

  @IsString()
  @IsNotEmpty()
  NPF: string; // CPF no formato "123.456.789-00"

  @IsDateString()
  @IsNotEmpty()
  birth: string; // formato ISO 8601

  @IsString()
  @IsOptional()
  userIdDiscord?: string; // vinculado ao model Person.userID, opcional
}