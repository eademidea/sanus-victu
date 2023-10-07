import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MineralService } from 'src/mineral/mineral.service';
import { VitaminService } from 'src/vitamin/vitamin.service';
import { FoodController } from './food.controller';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { Mineral } from 'src/mineral/mineral.model';
import { Vitamin } from 'src/vitamin/vitamin.model';

@Module({
  controllers: [FoodController],
  providers: [FoodService, VitaminService, MineralService],
  imports: [SequelizeModule.forFeature([Food, Mineral, Vitamin])],
  exports: [FoodService],
})
export class FoodModule {}
