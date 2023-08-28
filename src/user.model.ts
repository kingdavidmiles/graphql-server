import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User{
  @Field(() => ID)
  id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  userName: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop({ length: 60 })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
