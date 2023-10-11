import { CaloriesByDayRequest } from '../calories-by-day-request.model';

/* 
    HARIS BENEDICT : http://www.leb.esalq.usp.br/leb/aulas/ler0140/Calorias_sob_medida.pdf

    HARIS BENEDICT: Esta fórmula é usada para obter o gasto
    calórico basal diário. A unidade para peso é o quilograma, a altura, os
    centímetros, a idade e os anos. 

    refatorar para estrategy
  */
export class HarisBenedictCalculator {
  public getHarisBenedictValue(
    caloriesByDayRequest: CaloriesByDayRequest,
    paramWeight: number,
    paramHeigth: number,
    paramAge: number,
    paramBase: number,
  ) {
    const weight = paramWeight * caloriesByDayRequest.weight;
    const heigth = paramHeigth * caloriesByDayRequest.height;
    const age = paramAge * caloriesByDayRequest.age;
    return paramBase + weight + heigth - age;
  }
}
