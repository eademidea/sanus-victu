import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodController } from './food.controller';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { Vitamin } from './mineral.model';
import { Mineral } from './vitamin.model';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [SequelizeModule.forFeature([Food, Mineral, Vitamin])],
  exports: [FoodService],
})
export class FoodModule {}
