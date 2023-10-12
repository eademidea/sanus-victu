import { Injectable } from '@nestjs/common'

@Injectable()
export class TbmCalculator {
   /*
   http://www.leb.esalq.usp.br/leb/aulas/ler0140/Calorias_sob_medida.pdf 
   Calculadora - TAXA METÁBOLICA BASAL (TMB)
   */
   public calculate(paramOne: number, weigth: number, paramTwo: number) {
      return paramOne * weigth + paramTwo
   }
}
