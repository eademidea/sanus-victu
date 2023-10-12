import { Injectable } from '@nestjs/common'
import { CaloriesByDayRequest } from 'src/diet/calories-by-day-request.model'
import { Goal } from 'src/diet/models/goal.enum'

@Injectable()
export class ActivityFactor {
   public calculate(
      caloriesByDayRequest: CaloriesByDayRequest,
      tbmParameter: number
   ) {
      let fa = 0
      if (caloriesByDayRequest.gender.toString() == 'MALE') {
         switch (caloriesByDayRequest.goal) {
            case Goal.LIGHT.toString():
               fa = 1.55
               break
            case Goal.MODERATE.toString():
               fa = 1.78
               break
            case Goal.INTENSE.toString():
               fa = 2.1
               break
            default:
               break
         }
      } else if (caloriesByDayRequest.gender.toString() == 'FEMALE') {
         switch (caloriesByDayRequest.goal) {
            case Goal.LIGHT.toString():
               fa = 1.56
               break

            case Goal.MODERATE.toString():
               fa = 1.64
               break
            case Goal.INTENSE.toString():
               fa = 1.82
               break
            default:
               break
         }
      }

      return tbmParameter * fa
   }
}
