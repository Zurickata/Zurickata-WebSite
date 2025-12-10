import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  company?: string;

  @IsString()
  serviceType: string;

  @IsString()
  message: string;

  @IsOptional()
  howDidYouFindMe?: string;
}
