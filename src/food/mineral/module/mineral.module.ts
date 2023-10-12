import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Food } from 'src/food/models/food.model'
import { MineralService } from '../services/mineral.service'
import { Mineral } from '../models/mineral.model'

@Module({
   controllers: [],
   providers: [MineralService],
   imports: [SequelizeModule.forFeature([Food, Mineral])],
   exports: [MineralService],
})
export class MineralModule {}
