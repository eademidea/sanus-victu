import { CaloriesByDayRequest } from '../../calories-by-day-request.model'

export abstract class CaloriesConsumption {
   public abstract getCalorieConsumption(
      caloriesByDayRequest: CaloriesByDayRequest
   ): number
}
