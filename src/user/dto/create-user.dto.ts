
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum UserType {

  FOUNDER = 'FOUNDER',
  STAFF  = 'STAFF',
  PLAYER = 'PLAYER',
  DEVELOPER = 'DEVELOPER',
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  nameServer: string;

    @IsNotEmpty()
    @IsString()
    idDiscord: string;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string;

  @IsNotEmpty()
  @IsEnum(UserType)
  userType: UserType;
}
