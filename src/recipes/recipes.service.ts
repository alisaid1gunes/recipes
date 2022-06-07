import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeInput: CreateRecipeInput) {
    return await this.recipesRepository.save(createRecipeInput);
  }

  async findAll() {
    return await this.recipesRepository.find();
  }

  async findOne(id: number) {
    return await this.recipesRepository.findOneBy({ id });
  }

  async update(id: number, updateRecipeInput: UpdateRecipeInput) {
    const recipe: Recipe = new Recipe();
    recipe.name = updateRecipeInput.name;
    recipe.description = updateRecipeInput.description;
    recipe.ingredients = updateRecipeInput.ingredients;
    return await this.recipesRepository.update(id, updateRecipeInput);
  }

  remove(id: number) {
    return this.recipesRepository.delete(id);
  }
}
