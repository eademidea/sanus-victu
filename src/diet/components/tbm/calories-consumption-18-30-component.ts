import { CaloriesByDayRequest } from '../../calories-by-day-request.model';
import { CaloriesConsumption } from './calories-consumption-component';

export class ConsumptionForAged18to30 extends CaloriesConsumption {
  /* 
     http://www.leb.esalq.usp.br/leb/aulas/ler0140/Calorias_sob_medida.pdf
  */
  public getCalorieConsumption(
    caloriesByDayRequest: CaloriesByDayRequest,
  ): number {
    if (caloriesByDayRequest.gender.toString() == 'MALE') {
      return null;
    } else if (caloriesByDayRequest.gender.toString() == 'FEMALE') {
      return null;
    }
  }
}
