import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Food } from 'src/food/food.model';
import { MineralService } from './mineral.service';
import { Mineral } from './mineral.model';

@Module({
  controllers: [],
  providers: [MineralService],
  imports: [SequelizeModule.forFeature([Food, Mineral])],
  exports: [MineralService],
})
export class MineralModule {}
