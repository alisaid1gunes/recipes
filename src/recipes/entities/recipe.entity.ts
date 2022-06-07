import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

@ObjectType()
@Entity()
export class Recipe {
  @Field(() => Int, { description: 'Identity' })
  @PrimaryGeneratedColumn()
  id: number;
  @Field(() => String, { description: 'Name' })
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
  @Field(() => String, { description: 'Description' })
  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;
  @Field(() => String, { description: 'Image' })
  @Column()
  @IsNotEmpty()
  @IsString()
  image: string;
  @Field(() => [String], { description: 'Ingredients' })
  @Column('text', { array: true })
  @IsNotEmpty()
  @IsArray()
  ingredients: string[];
}
