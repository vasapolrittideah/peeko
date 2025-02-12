import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;
}

export class LoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class VerifyEmailDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  code: string;
}

export class ResendEmailVerificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
