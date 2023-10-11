import { Injectable } from '@nestjs/common';
import { CaloriesByDayRequest } from '../calories-by-day-request.model';
import { ConsumptionForAged31to60 } from '../components/tbm/calories-consumption-31-60-component';
import { ConsumptionForAged60Plus } from '../components/tbm/calories-consumption-60plus-component';
import { ConsumptionForAged18to30 } from '../components/tbm/calories-consumption-18-30-component';
@Injectable()
export class ValuesService {
  constructor() {}

  getCaloriesByDay(caloriesByDayRequest: CaloriesByDayRequest) {
    if (caloriesByDayRequest.age > 18 && caloriesByDayRequest.age <= 30) {
      return new ConsumptionForAged18to30().getCalorieConsumption(
        caloriesByDayRequest,
      );
    } else if (
      caloriesByDayRequest.age > 31 &&
      caloriesByDayRequest.age <= 60
    ) {
      return new ConsumptionForAged31to60().getCalorieConsumption(
        caloriesByDayRequest,
      );
    } else if (caloriesByDayRequest.age > 60) {
      return new ConsumptionForAged60Plus().getCalorieConsumption(
        caloriesByDayRequest,
      );
    }
  }
}
