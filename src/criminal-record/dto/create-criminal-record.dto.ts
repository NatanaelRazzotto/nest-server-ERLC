
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsBoolean, IsNumber } from 'class-validator';

export class CreateCriminalRecordDto {
  @IsString()
  @IsNotEmpty()
  descriptionSituation: string;

  @IsNumber()
  @IsNotEmpty()
  coast: number;

  @IsNumber()
  @IsNotEmpty()
  timeOfConfinement: number;

  @IsBoolean()
  @IsNotEmpty()
  paymentPending: boolean;

  @IsString()
  @IsNotEmpty()
  urlImage: string;

  @IsString()
  @IsOptional()
  authorRecordIDDiscord?: string; // vinculado ao model Person.userID, opcional

  @IsString()
  @IsOptional()
  offenderIDDiscord?: string; // vinculado ao model Person.userID, opcional
}