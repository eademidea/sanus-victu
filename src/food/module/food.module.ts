import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MineralService } from 'src/food/mineral/services/mineral.service';
import { VitaminService } from 'src/vitamin/vitamin.service';
import { FoodController } from '../controller/food.controller';
import { Food } from '../models/food.model';
import { FoodService } from '../service/food.service';
import { Mineral } from 'src/mineral/mineral.model';
import { Vitamin } from 'src/vitamin/vitamin.model';

@Module({
  controllers: [FoodController],
  providers: [FoodService, VitaminService, MineralService],
  imports: [SequelizeModule.forFeature([Food, Mineral, Vitamin])],
  exports: [FoodService],
})
export class FoodModule {}
