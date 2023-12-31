import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Food } from 'src/food/models/food.model'
import { VitaminService } from '../services/vitamin.service'
import { Vitamin } from '../models/vitamin.model'

@Module({
   controllers: [],
   providers: [VitaminService],
   imports: [SequelizeModule.forFeature([Food, Vitamin])],
   exports: [VitaminService],
})
export class VitaminModule {}
