import { Injectable } from '@nestjs/common'
import { CaloriesByDayRequest } from '../../calories-by-day-request.model'
import { CaloriesConsumption } from './calories-consumption-component'
import { ActivityFactor } from './activity-factor-calculator-component'
import { TbmCalculator } from './tbm-calculator-component'

@Injectable()
export class ConsumptionForAged18to30 extends CaloriesConsumption {
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
            this.tbmService.calculate(15.3, caloriesByDayRequest.weight, 679)
         )
      } else if (caloriesByDayRequest.gender.toString() == 'FEMALE') {
         return this.activityService.calculate(
            caloriesByDayRequest,
            this.tbmService.calculate(14.7, caloriesByDayRequest.weight, 496)
         )
      }
   }
}
