import { Injectable } from '@nestjs/common'

@Injectable()
export class MacroService {
   public getMacros(calories: number) {
      return {
         fat: this.getFatValue(calories),
         protein: this.getProteinValue(calories),
         carbohydrates: this.getCarboValue(calories),
      }
   }

   private getFatValue(calories: number) {
      return parseFloat(((0.2 * calories) / 9).toFixed(2))
   }

   private getProteinValue(calories: number) {
      return parseFloat(((0.35 * calories) / 4).toFixed(2))
   }

   private getCarboValue(calories: number) {
      return parseFloat(((0.45 * calories) / 4).toFixed(2))
   }
}
