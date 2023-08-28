import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from '@nestjs/class-validator';

@InputType()
export class UserDto {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsString()
  userName?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password?: string;
}

@InputType()
export class UpdateUserDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  id: string;

  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsString()
  userName?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password?: string;
}
