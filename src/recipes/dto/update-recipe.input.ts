import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeInput {
  @Field(() => String, { description: 'Name' })
  name: string;
  @Field(() => String, { description: 'Description' })
  description: string;
  @Field(() => String, { description: 'Image' })
  image: string;
  @Field(() => [String], { description: 'Ingredients' })
  ingredients: string[];
}
