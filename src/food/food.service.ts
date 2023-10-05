import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Connection } from 'typeorm';
import { Food } from './food.model';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food) private foodRepository: typeof Food,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async recordFood(food: Food) {
    return await this.foodRepository.create(food);
  }
}
