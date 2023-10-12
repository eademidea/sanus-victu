import { Injectable } from '@nestjs/common'
import { CaloriesByDayRequest } from '../calories-by-day-request.model'
import { ConsumptionForAged31to60 } from '../components/tbm/calories-consumption-31-60-component'
import { ConsumptionForAged60Plus } from '../components/tbm/calories-consumption-60plus-component'
import { ConsumptionForAged18to30 } from '../components/tbm/calories-consumption-18-30-component'
@Injectable()
export class ValuesService {
   constructor(
      private consumption1830: ConsumptionForAged18to30,
      private consumption3160: ConsumptionForAged31to60,
      private consumptionplus60: ConsumptionForAged60Plus
   ) {}

   getCaloriesByDay(caloriesByDayRequest: CaloriesByDayRequest) {
      if (this.ageGreaterThan18LessThan30(caloriesByDayRequest)) {
         return this.consumption1830.getCalorieConsumption(caloriesByDayRequest)
      } else if (this.ageGreaterThan31LessThan60(caloriesByDayRequest)) {
         return this.consumption3160.getCalorieConsumption(caloriesByDayRequest)
      } else if (this.ageGreaterThan60(caloriesByDayRequest)) {
         return this.consumptionplus60.getCalorieConsumption(
            caloriesByDayRequest
         )
      }
   }

   //Rules

   private ageGreaterThan60(caloriesByDayRequest: CaloriesByDayRequest) {
      return caloriesByDayRequest.age > 60
   }

   private ageGreaterThan31LessThan60(
      caloriesByDayRequest: CaloriesByDayRequest
   ) {
      return caloriesByDayRequest.age >= 31 && caloriesByDayRequest.age <= 60
   }

   private ageGreaterThan18LessThan30(
      caloriesByDayRequest: CaloriesByDayRequest
   ) {
      return caloriesByDayRequest.age > 18 && caloriesByDayRequest.age <= 30
   }
}
