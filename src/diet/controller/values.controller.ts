import { Body, Controller, Get, Post } from '@nestjs/common'
import { CaloriesByDayRequest } from '../calories-by-day-request.model'
import { MacrosRequest } from '../models/macros-request.model'
import { ValuesService } from '../services/values.service'

@Controller('values')
export class ValuesController {
   constructor(private valuesService: ValuesService) {}

   @Get('/get-macros')
   async getMacros(@Body() macrosRequest: MacrosRequest) {
      console.log(macrosRequest)
      return 'em construção'
   }

   @Post('/calories-by-day')
   async getCaloriesByDay(@Body() caloriesByDayRequest: CaloriesByDayRequest) {
      return this.valuesService.getCaloriesByDay(caloriesByDayRequest)
   }
}
