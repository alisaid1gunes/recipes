import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateRecipeInput {
  @Field(() => String, { description: 'Name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @Field(() => String, { description: 'Description' })
  @IsNotEmpty()
  @IsString()
  description: string;
  @Field(() => String, { description: 'Image' })
  @IsNotEmpty()
  @IsString()
  image: string;
  @Field(() => [String], { description: 'Ingredients' })
  @IsNotEmpty()
  @IsArray()
  ingredients: string[];
}
