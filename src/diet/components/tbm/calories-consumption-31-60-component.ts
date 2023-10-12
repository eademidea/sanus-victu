import { Injectable } from '@nestjs/common'
import { Goal } from 'src/diet/models/goal.enum'
import { CaloriesByDayRequest } from '../../calories-by-day-request.model'
import { ActivityFactor } from './activity-factor-calculator-component'
import { CaloriesConsumption } from './calories-consumption-component'
import { TbmCalculator } from './tbm-calculator-component'

@Injectable()
export class ConsumptionForAged31to60 extends CaloriesConsumption {
   constructor(
      private activityService: ActivityFactor,
      private tbmService: TbmCalculator
   ) {
      super()
   }
   /* 
     http://www.leb.esalq.usp.br/leb/aulas/ler0140/Calorias_sob_medida.pdf
  */
   public getCalorieConsumption(
      caloriesByDayRequest: CaloriesByDayRequest
   ): number {
      if (caloriesByDayRequest.gender.toString() == 'MALE') {
         return this.activityService.calculate(
            caloriesByDayRequest,
            this.tbmService.calculate(11.6, caloriesByDayRequest.weight, 879)
         )
      } else if (caloriesByDayRequest.gender.toString() == 'FEMALE') {
         return this.activityService.calculate(
            caloriesByDayRequest,
            this.tbmService.calculate(8.7, caloriesByDayRequest.weight, 829)
         )
      }
   }
}
