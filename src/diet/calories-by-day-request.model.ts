import { ApiProperty } from '@nestjs/swagger'
import { Goal } from './models/goal.enum'
import { Gender } from './models/gender.enum'

export class CaloriesByDayRequest {
   @ApiProperty({ example: 31, description: 'Idade da pessoa.' })
   age: number

   @ApiProperty({ example: 1.81, description: 'Altura da pessoa.' })
   height: number

   @ApiProperty({
      example: 'LIGHT / MODERATE / INTENSE / NA',
      description: 'Objetivo da pessoa.',
   })
   goal: Goal

   @ApiProperty({ example: 'MALE', description: 'Gênero.' })
   gender: Gender

   @ApiProperty({ example: 95, description: 'Peso da pessoa.' })
   weight: number
}
