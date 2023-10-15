import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CaloriesByDayRequest } from '../calories-by-day-request.model'
import { ValuesService } from '../services/values.service'

@ApiTags('Calculo calorias')
@Controller('values')
export class ValuesController {
   constructor(private valuesService: ValuesService) {}

   /** Este método deverá ser ajustado para ser GET */
   @Post('/calories-by-day')
   async getCaloriesByDay(@Body() caloriesByDayRequest: CaloriesByDayRequest) {
      return {
         calories: this.valuesService.getCaloriesByDay(caloriesByDayRequest),
      }
   }
}
