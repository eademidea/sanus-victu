import { Body, Controller, Post } from '@nestjs/common';
import { Food } from './food.model';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly service: FoodService) {}

  @Post('/record')
  recordFood(@Body() food: Food) {
    return this.service.recordFood(food);
  }
}
