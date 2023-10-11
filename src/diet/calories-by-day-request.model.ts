import { ApiProperty } from '@nestjs/swagger';
import { Goal } from './models/goal.enum';
import { Gender } from './models/gender.enum';

export class CaloriesByDayRequest {
  @ApiProperty({ example: 25, description: 'Idade da pessoa.' })
  age: number;

  @ApiProperty({ example: 1.85, description: 'Altura da pessoa.' })
  height: number;

  @ApiProperty({ example: 'HYPERTROPHY', description: 'Objetivo da pessoa.' })
  goal: Goal;

  @ApiProperty({ example: 'MALE', description: 'Gênero.' })
  gender: Gender;

  @ApiProperty({ example: 85, description: 'Peso da pessoa.' })
  weight: number;
}
