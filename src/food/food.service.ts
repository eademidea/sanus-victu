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

  async getFoodByName(name: string) {
    return await this.connection.query(
      `select * from food where upper(name) = upper('${name}')`,
    );
  }

  // async getFoodByName(name: string) {
  //   return await this.foodRepository.findAll({
  //     where: { name },
  //     include: { all: true },
  //   });
  // }
}
