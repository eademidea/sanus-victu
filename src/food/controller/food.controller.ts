import {
   Body,
   Controller,
   HttpException,
   HttpStatus,
   Post,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MineralService } from 'src/food/mineral/services/mineral.service'
import { Food } from '../models/food.model'
import { FoodService } from '../service/food.service'
import { VitaminService } from '../vitamin/services/vitamin.service'

@ApiTags('Cadastro alimentos')
@Controller('food')
export class FoodController {
   constructor(
      private readonly foodService: FoodService,
      private readonly vitaminService: VitaminService,
      private readonly mineralService: MineralService
   ) {}

   @Post('/record')
   async recordFood(@Body() food: Food) {
      const response = await this.foodService.getFoodByName(food.name)
      if (response[0].length > 0) {
         throw new HttpException(
            'Alimento já cadastrado na base de dados.',
            HttpStatus.UNPROCESSABLE_ENTITY
         )
      } else {
         const recordedFood = await this.foodService.recordFood(food)
         food.mineral.map(async (x) => {
            x.foodId = new Food()
            x.foodId.id = recordedFood.dataValues.id
            const mineralResponse = await this.mineralService.recordMineral(x)
            recordedFood.mineral = mineralResponse
         })

         food.vitamin.map(async (x) => {
            x.foodId = new Food()
            x.foodId.id = recordedFood.dataValues.id
            const vitaminResponse = await this.vitaminService.recordVitamin(x)
            recordedFood.vitamin = vitaminResponse
         })

         return recordedFood
      }
   }
}
