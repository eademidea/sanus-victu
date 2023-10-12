import { ApiProperty } from '@nestjs/swagger'
import { Goal } from './goal.enum'

export class MacrosRequest {
   @ApiProperty({
      example: 2000,
      description: 'Quantidade de calorias a ser consumida por dia.',
   })
   calories: number

   @ApiProperty({ example: 25, description: 'Idade da pessoa.' })
   age: number

   @ApiProperty({ example: 1.85, description: 'Altura da pessoa.' })
   height: number

   @ApiProperty({ example: 'LIGHT', description: 'Objetivo da pessoa.' })
   goal: Goal

   @ApiProperty({ example: 85, description: 'Peso da pessoa.' })
   weight: number
}
