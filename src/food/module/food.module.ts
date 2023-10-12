import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { MineralService } from 'src/food/mineral/services/mineral.service'
import { FoodController } from '../controller/food.controller'
import { Food } from '../models/food.model'
import { FoodService } from '../service/food.service'
import { Mineral } from '../mineral/models/mineral.model'
import { Vitamin } from '../vitamin/models/vitamin.model'
import { VitaminService } from '../vitamin/services/vitamin.service'

@Module({
   controllers: [FoodController],
   providers: [FoodService, VitaminService, MineralService],
   imports: [SequelizeModule.forFeature([Food, Mineral, Vitamin])],
   exports: [FoodService],
})
export class FoodModule {}
