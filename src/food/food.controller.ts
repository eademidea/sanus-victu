import { Body, Controller, Post } from '@nestjs/common';
import { MineralService } from 'src/mineral/mineral.service';
import { VitaminService } from 'src/vitamin/vitamin.service';
import { Food } from './food.model';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(
    private readonly foodService: FoodService,
    private readonly vitaminService: VitaminService,
    private readonly mineralService: MineralService,
  ) {}

  @Post('/record')
  async recordFood(@Body() food: Food) {
    const response = await this.foodService.recordFood(food);

    food.mineral.map((x) => {
      x.foodId = new Food();
      x.foodId.id = response.dataValues.id;
      this.mineralService.recordMineral(x);
    });

    food.vitamin.map((x) => {
      x.foodId = new Food();
      x.foodId.id = response.dataValues.id;
      this.vitaminService.recordVitamin(x);
    });

    return 'Registro gravado com sucesso.';
  }
}
